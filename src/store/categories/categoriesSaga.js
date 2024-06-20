import { takeLatest, all, call, put } from "redux-saga/effects";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase";
import {
  fetchCategoriesError,
  fetchCategoriesSuccess,
} from "./categoriesAction";

import { CATEGORIES_TYPE } from "./categoriesType";

export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield call(getCategoriesAndDocuments, "categories");
    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch (e) {
    yield put(fetchCategoriesError(e));
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_TYPE.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
