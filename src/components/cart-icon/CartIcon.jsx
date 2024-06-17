import { useContext } from "react";
import ShoppingIcon from "../../assets/shopping-bag.svg";

import { CartDropDownContext } from "../../context/cart-dropdown-context/CartDropDownContext";
import {
  CartIconContainer,
  ItemCountContainer,
  ShoppingIconContainer,
} from "./CartIcon-styles";
const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } =
    useContext(CartDropDownContext);
  return (
    <CartIconContainer onClick={() => setIsCartOpen(!isCartOpen)}>
      <ShoppingIconContainer src={ShoppingIcon} />
      <ItemCountContainer>{cartCount}</ItemCountContainer>
    </CartIconContainer>
  );
};

export default CartIcon;
