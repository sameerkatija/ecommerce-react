import { all, call, put, takeLatest } from "redux-saga/effects";
import { USER_TYPES } from "./UserTypes";
import {
  signInFailure,
  signInSuccess,
  signOutFailure,
  signOutSuccess,
  signUpFailed,
  signUpSuccess,
} from "./UserAction";
import {
  getCurrentUser,
  createuserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  signOutuser,
  createAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase";

export function* getSnapshotFromUserAuth(userAuth, additionalInformation) {
  try {
    const userSnapShot = yield call(
      createuserDocumentFromAuth,
      userAuth,
      additionalInformation
    );
    console.log(userSnapShot, userSnapShot.data());
    yield put(signInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }));
  } catch (e) {
    yield put(signInFailure(e));
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield call(
      signInAuthUserWithEmailAndPassword,
      email,
      password
    );
    yield call(getSnapshotFromUserAuth, user);
  } catch (e) {
    yield put(signInFailure(e));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopup);

    yield call(getSnapshotFromUserAuth, user);
  } catch (e) {
    yield put(signInFailure(e));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (e) {
    yield put(signInFailure(e));
  }
}

export function* signOutUser() {
  try {
    yield call(signOutuser);
    yield put(signOutSuccess(null));
  } catch (e) {
    yield put(signOutFailure(e));
  }
}

export function* signUpUserStart({
  payload: { email, password, displayName },
}) {
  try {
    const { user } = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );
    yield put(signUpSuccess(user, { displayName }));
  } catch (e) {
    yield put(signUpFailed(e));
  }
}

export function* signInAfterSignUp({
  payload: { user, additionalInformation },
}) {
  yield call(getSnapshotFromUserAuth, user, additionalInformation);
}

export function* onSignOutStart() {
  yield takeLatest(USER_TYPES.SIGN_OUT_START, signOutUser);
}

export function* onGoogleSignInStart() {
  yield takeLatest(USER_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield takeLatest(USER_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUserSession() {
  yield takeLatest(USER_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignUpStart() {
  yield takeLatest(USER_TYPES.SIGN_UP_START, signUpUserStart);
}
export function* onSignUpSuccess() {
  yield takeLatest(USER_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* userSaga() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
  ]);
}
