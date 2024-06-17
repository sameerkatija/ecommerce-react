import { useContext } from "react";
import { ShopContext } from "../../context/shop-context/ShopContext";

import CategoryPreview from "../../components/category-preview/CategoryPreview";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(ShopContext);
  // console.log(categoriesMap);
  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview products={products} key={title} title={title} />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
