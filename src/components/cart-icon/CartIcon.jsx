import { useContext } from "react";
import ShoppingIcon from "../../assets/shopping-bag.svg";
import "./CartIcon.scss";
import { CartDropDownContext } from "../../context/cart-dropdown-context/CartDropDownContext";
const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } =
    useContext(CartDropDownContext);
  return (
    <div
      className="cart-icon-container"
      onClick={() => setIsCartOpen(!isCartOpen)}
    >
      <img src={ShoppingIcon} className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
