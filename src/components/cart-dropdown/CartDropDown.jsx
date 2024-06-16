import { useContext } from "react";
import Button from "../button/Button";
import "./CartDropDown.scss";
import { CartDropDownContext } from "../../context/cart-dropdown-context/CartDropDownContext";
import CartItem from "../cart-item/CartItem";
import { useNavigate } from "react-router-dom";
const CartDropDown = () => {
  const { cartItems } = useContext(CartDropDownContext);
  const navigate = useNavigate();
  const navigateToCheckOut = () => {
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items ">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button onClick={navigateToCheckOut}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropDown;
