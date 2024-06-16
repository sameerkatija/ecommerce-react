import { useContext } from "react";
import Button from "../button/Button";
import "./ProductCard.scss";
import { CartDropDownContext } from "../../context/cart-dropdown-context/CartDropDownContext";
const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartDropDownContext);

  const addProductToCart = () => addItemToCart(product);
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
