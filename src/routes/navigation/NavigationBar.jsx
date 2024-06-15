import { Link, Outlet } from "react-router-dom";
import "./NavigationBar.scss";
import CrownSVG from "../../assets/crown.svg";
import { useContext } from "react";
import { UserContext } from "../../context/user-context/UserContext";
import { signOutuser } from "../../utils/firebase/firebase";
function NavigationBar() {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={CrownSVG} />
        </Link>
        <div className="nav-links-container ">
          <Link className="nav-link " to="/shop">
            SHOP
          </Link>
          {!currentUser ? (
            <Link className="nav-link " to="/auth">
              SIGNIN
            </Link>
          ) : (
            <span className="nav-link " onClick={signOutuser}>
              LOG OUT
            </span>
          )}
        </div>
      </div>

      <Outlet />
    </>
  );
}

export default NavigationBar;
