import { Route, Routes } from "react-router-dom";

import CategoriesPreview from "../categories-preview/CategoriesPreview";
import Category from "../category/Category";
import { useEffect } from "react";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase";
import { setCategoriesMap } from "../../store/categories/categoriesAction";
import { useDispatch } from "react-redux";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments("categories");
      dispatch(setCategoriesMap(categoryMap));
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
