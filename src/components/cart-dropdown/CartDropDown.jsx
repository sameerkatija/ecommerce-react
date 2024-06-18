import Button from "../button/Button";
import {
  CartItemsContainer,
  CartDropDownContainer,
  EmptyMessageContainer,
} from "./CartDropDown-styles.jsx";
import CartItem from "../cart-item/CartItem";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/CartSelector.js";
const CartDropDown = () => {
  const cartItems = useSelector(selectCartItems);
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
