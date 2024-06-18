import { Outlet } from "react-router-dom";
import CrownSVG from "../../assets/crown.svg";

import { signOutuser } from "../../utils/firebase/firebase";
import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropDown from "../../components/cart-dropdown/CartDropDown";

import {
  LinkContainer,
  LogoContainer,
  NavLink,
  NavigationContainer,
} from "./NavigationBar-styles";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/UserSelectors";
import { selectIsCartOpen } from "../../store/cart/CartSelector";

function NavigationBar() {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  console.log("IS", isCartOpen);
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
            <NavLink as="span" onClick={signOutuser}>
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
