import {
  CheckOutImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  CheckoutItemContainer,
  RemoveButton,
} from "./CheckOutItem-styles";
import { useContext } from "react";
import { CartDropDownContext } from "../../context/cart-dropdown-context/CartDropDownContext";

const CheckOutItem = ({ item }) => {
  const { name, imageUrl, price, quantity } = item;
  const { addItemToCart, removeItemToCart, clearItemFromCart } =
    useContext(CartDropDownContext);
  const removeItemHandler = () => removeItemToCart(item);
  const addItemHandler = () => addItemToCart(item);
  const clearItemHandler = () => clearItemFromCart(item);
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
