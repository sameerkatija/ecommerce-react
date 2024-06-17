import { useContext } from "react";
import Button from "../button/Button";
import {
  CartItemsContainer,
  CartDropDownContainer,
  EmptyMessageContainer,
} from "./CartDropDown-styles.jsx";
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
    <CartDropDownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessageContainer className="empty-message">
            Your cart is empty
          </EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <Button onClick={navigateToCheckOut}>GO TO CHECKOUT</Button>
    </CartDropDownContainer>
  );
};

export default CartDropDown;
