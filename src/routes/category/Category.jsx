import { useParams } from "react-router-dom";

import { Fragment, useEffect, useState } from "react";
import ProductCard from "../../components/product-card/ProductCard";
import { CategoryContainerDiv, CategoryTitle } from "./Category-styles";
import { useSelector } from "react-redux";
import {
  selectCategoriesMap,
  selectIscategoryLoading,
} from "../../store/categories/categoriesSelector";
import Spinner from "../../components/spinner/Spinner";

const Category = () => {
  const { category } = useParams();
  console.log(`category component rendered`);
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);
  const isLoading = useSelector(selectIscategoryLoading);
  useEffect(() => {
    console.log(`category effect rendered`);
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainerDiv>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainerDiv>
      )}
    </Fragment>
  );
};

export default Category;
