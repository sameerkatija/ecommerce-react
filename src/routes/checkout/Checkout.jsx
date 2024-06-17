import { useContext } from "react";

import { CartDropDownContext } from "../../context/cart-dropdown-context/CartDropDownContext";
import CheckOutItem from "../../components/checkout-item/CheckOutItem";
import {
  CheckoutContainerDiv,
  CheckoutHeaderDiv,
  HeaderBlockDiv,
  TotalDiv,
} from "./Checkout-styles";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartDropDownContext);

  return (
    <CheckoutContainerDiv>
      <CheckoutHeaderDiv>
        <HeaderBlockDiv>
          <span>Product</span>
        </HeaderBlockDiv>
        <HeaderBlockDiv>
          <span>Description</span>
        </HeaderBlockDiv>
        <HeaderBlockDiv>
          <span>Quantity</span>
        </HeaderBlockDiv>
        <HeaderBlockDiv>
          <span>Price</span>
        </HeaderBlockDiv>
        <HeaderBlockDiv>
          <span>Remove</span>
        </HeaderBlockDiv>
      </CheckoutHeaderDiv>
      {cartItems?.map((cartItem) => (
        <CheckOutItem key={cartItem.id} item={cartItem} />
      ))}
      <TotalDiv>TOTAL: ${cartTotal}</TotalDiv>
    </CheckoutContainerDiv>
  );
};

export default Checkout;
