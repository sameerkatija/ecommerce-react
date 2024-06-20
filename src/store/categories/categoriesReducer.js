import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  categories: [],
};

const CategoriesSlice = createSlice({
  name: "categories",
  initialState: INITIAL_STATE,
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload;
    },
  },
});

export const { setCategories } = CategoriesSlice.actions;
export const CategoriesReducer = CategoriesSlice.reducer;
