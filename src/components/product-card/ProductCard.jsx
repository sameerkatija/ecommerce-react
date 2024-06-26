import {
  ProductCardContainerDiv,
  ProductFooterDiv,
  ProductNameSpan,
  ProductPriceSpan,
} from "./ProductCard-styles.jsx";
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";
import { addItemToCart } from "../../store/cart/CartAction.js";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/CartSelector.js";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));
  return (
    <ProductCardContainerDiv>
      <img src={imageUrl} alt={`${name}`} />
      <ProductFooterDiv>
        <ProductNameSpan>{name}</ProductNameSpan>
        <ProductPriceSpan>{price}</ProductPriceSpan>
      </ProductFooterDiv>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to Cart
      </Button>
    </ProductCardContainerDiv>
  );
};

export default ProductCard;
