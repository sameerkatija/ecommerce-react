import { Route, Routes } from "react-router-dom";

import CategoriesPreview from "../categories-preview/CategoriesPreview";
import Category from "../category/Category";
import { useEffect } from "react";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase";
import { useDispatch } from "react-redux";
import { setCategories } from "../../store/categories/categoriesReducer";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments("categories");

      dispatch(setCategories(categoriesArray));
      // console.log(setCategories(categoriesArray));
    };

    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
