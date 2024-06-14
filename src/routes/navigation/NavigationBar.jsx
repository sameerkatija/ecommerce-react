import { Link, Outlet } from "react-router-dom";
import "./NavigationBar.scss";
import CrownSVG from "../../assets/crown.svg";
function NavigationBar() {
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
          <Link className="nav-link " to="/auth">
            SIGNIN
          </Link>
        </div>
      </div>

      <Outlet />
    </>
  );
}

export default NavigationBar;
