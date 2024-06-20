import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  currentUser: null,
};

const UserSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = UserSlice.actions;
export const UserReducer = UserSlice.reducer;
