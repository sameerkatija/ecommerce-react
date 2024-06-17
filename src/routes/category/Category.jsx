import { useParams } from "react-router-dom";

import { ShopContext } from "../../context/shop-context/ShopContext";
import { Fragment, useContext, useEffect, useState } from "react";
import ProductCard from "../../components/product-card/ProductCard";
import { CategoryContainerDiv, CategoryTitle } from "./Category-styles";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(ShopContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainerDiv>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainerDiv>
    </Fragment>
  );
};

export default Category;
