import CheckOutItem from "../../components/checkout-item/CheckOutItem";
import {
  CheckoutContainerDiv,
  CheckoutHeaderDiv,
  HeaderBlockDiv,
  TotalDiv,
} from "./Checkout-styles";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/CartSelector";
import PaymentForm from "../../components/payment-form/PaymentForm";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

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
      <PaymentForm />
    </CheckoutContainerDiv>
  );
};

export default Checkout;
