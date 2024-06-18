import { Outlet } from "react-router-dom";
import CrownSVG from "../../assets/crown.svg";

import { useContext } from "react";
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
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/UserSelectors";

function NavigationBar() {
  const currentUser = useSelector(selectCurrentUser);
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
