import { useContext } from "react";
import "./CheckOutItem.scss";
import { CartDropDownContext } from "../../context/cart-dropdown-context/CartDropDownContext";

const CheckOutItem = ({ item }) => {
  const { name, imageUrl, price, quantity } = item;
  const { addItemToCart, removeItemToCart, clearItemFromCart } =
    useContext(CartDropDownContext);
  const removeItemHandler = () => removeItemToCart(item);
  const addItemHandler = () => addItemToCart(item);
  const clearItemHandler = () => clearItemFromCart(item);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name"> {name} </span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price"> {price}</span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckOutItem;
