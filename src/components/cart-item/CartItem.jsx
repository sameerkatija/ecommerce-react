import {
  NameContainer,
  CartImgContainer,
  CartItemContainer,
  ItemDetailsContainer,
} from "./CartItem-styles.jsx";

const CartItem = ({ cartItem }) => {
  const { imageUrl, price, name, quantity } = cartItem;

  return (
    <CartItemContainer>
      <CartImgContainer src={imageUrl} alt={`${name}`} />
      <ItemDetailsContainer>
        <NameContainer>{name}</NameContainer>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;
