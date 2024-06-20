import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "../../store/cart/CartAction";
import {
  CheckOutImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  CheckoutItemContainer,
  RemoveButton,
} from "./CheckOutItem-styles";
import { selectCartItems } from "../../store/cart/CartSelector";

const CheckOutItem = ({ item }) => {
  const { name, imageUrl, price, quantity } = item;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, item));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, item));
  const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, item));
  return (
    <CheckoutItemContainer>
      <CheckOutImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </CheckOutImageContainer>
      <BaseSpan> {name} </BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan> {price}</BaseSpan>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckOutItem;
