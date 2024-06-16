import { useParams } from "react-router-dom";
import "./Category.scss";
import { ShopContext } from "../../context/shop-context/ShopContext";
import { Fragment, useContext, useEffect, useState } from "react";
import ProductCard from "../../components/product-card/ProductCard";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(ShopContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
