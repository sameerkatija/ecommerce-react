import { useContext } from "react";
import { ShopContext } from "../../context/shop-context/ShopContext";
import ProductCard from "../../components/product-card/ProductCard";
import "./Shop.scss";

const Shop = () => {
  const { products } = useContext(ShopContext);
  console.log(products);
  return (
    <div className="products-container">
      {products?.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Shop;
