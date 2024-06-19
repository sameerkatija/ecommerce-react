import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category-preview/CategoryPreview";
import {
  selectCategoriesMap,
  selectIscategoryLoading,
} from "../../store/categories/categoriesSelector";
import Spinner from "../../components/spinner/Spinner";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIscategoryLoading);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview products={products} key={title} title={title} />
          );
        })
      )}
    </>
  );
};

export default CategoriesPreview;
