import { Outlet } from "react-router-dom";
import CrownSVG from "../../assets/crown.svg";

import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropDown from "../../components/cart-dropdown/CartDropDown";

import {
  LinkContainer,
  LogoContainer,
  NavLink,
  NavigationContainer,
} from "./NavigationBar-styles";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/UserSelectors";
import { selectIsCartOpen } from "../../store/cart/CartSelector";
import { signOutStart } from "../../store/user/UserAction";

function NavigationBar() {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();
  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <img src={CrownSVG} />
        </LogoContainer>
        <LinkContainer>
          <NavLink to="/shop">SHOP</NavLink>
          {!currentUser ? (
            <NavLink to="/auth">SIGNIN</NavLink>
          ) : (
            <NavLink as="span" onClick={() => dispatch(signOutStart())}>
              LOG OUT
            </NavLink>
          )}
          <CartIcon />
        </LinkContainer>
        {isCartOpen && <CartDropDown />}
      </NavigationContainer>

      <Outlet />
    </>
  );
}

export default NavigationBar;
