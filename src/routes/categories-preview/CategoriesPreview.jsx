import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category-preview/CategoryPreview";
import { selectCategoriesMap } from "../../store/categories/categoriesSelector";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
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
