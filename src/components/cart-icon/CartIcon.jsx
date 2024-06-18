import ShoppingIcon from "../../assets/shopping-bag.svg";

import {
  CartIconContainer,
  ItemCountContainer,
  ShoppingIconContainer,
} from "./CartIcon-styles";
import { useDispatch, useSelector } from "react-redux";
import { setIsCartOpen } from "../../store/cart/CartAction";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/CartSelector";
const CartIcon = () => {
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();
  return (
    <CartIconContainer onClick={() => dispatch(setIsCartOpen(!isCartOpen))}>
      <ShoppingIconContainer src={ShoppingIcon} />
      <ItemCountContainer>{cartCount}</ItemCountContainer>
    </CartIconContainer>
  );
};

export default CartIcon;
