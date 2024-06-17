import { useContext } from "react";
import {
  ProductCardContainerDiv,
  ProductFooterDiv,
  ProductNameSpan,
  ProductPriceSpan,
} from "./ProductCard-styles.jsx";
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";
import { CartDropDownContext } from "../../context/cart-dropdown-context/CartDropDownContext";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartDropDownContext);

  const addProductToCart = () => addItemToCart(product);
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
