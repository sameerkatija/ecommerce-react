import { useContext } from "react";
import "./Checkout.scss";
import { CartDropDownContext } from "../../context/cart-dropdown-context/CartDropDownContext";
import CheckOutItem from "../../components/checkout-item/CheckOutItem";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartDropDownContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems?.map((cartItem) => (
        <CheckOutItem key={cartItem.id} item={cartItem} />
      ))}
      <div className="total">TOTAL: ${cartTotal}</div>
    </div>
  );
};

export default Checkout;
