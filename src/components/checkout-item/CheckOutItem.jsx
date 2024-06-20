import { useDispatch } from "react-redux";
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "../../store/cart/CartReducer";
import {
  CheckOutImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  CheckoutItemContainer,
  RemoveButton,
} from "./CheckOutItem-styles";

const CheckOutItem = ({ item }) => {
  const { name, imageUrl, price, quantity } = item;
  const dispatch = useDispatch();
  const removeItemHandler = () => dispatch(removeItemFromCart(item));
  const addItemHandler = () => dispatch(addItemToCart(item));
  const clearItemHandler = () => dispatch(clearItemFromCart(item));
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
