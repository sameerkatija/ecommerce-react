import { CART_TYPES } from "./CartTypes";

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

const CartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_TYPES.IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    case CART_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };
    default:
      return state;
  }
};

export default CartReducer;
