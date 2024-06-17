import { Link, Outlet } from "react-router-dom";
import CrownSVG from "../../assets/crown.svg";

import { useContext } from "react";
import { UserContext } from "../../context/user-context/UserContext";
import { signOutuser } from "../../utils/firebase/firebase";
import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropDown from "../../components/cart-dropdown/CartDropDown";
import { CartDropDownContext } from "../../context/cart-dropdown-context/CartDropDownContext";
import {
  LinkContainer,
  LogoContainer,
  NavLink,
  NavigationContainer,
} from "./NavigationBar-styles";

function NavigationBar() {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartDropDownContext);

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
