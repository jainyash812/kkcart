import { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cart.context";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../helper/firebase/firebase.helper";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./navbar.styles.scss";
const NavBar = () => {
  const { userDetails } = useContext(UserContext);
  const { cartItemCount } = useContext(CartContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    signOutUser();
    navigate("/auth");
  };
  return (
    <>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo-container">
          <div className="navbar-logo">
            <h1>KKCart</h1>
            <h4>Trust it Feel it</h4>
          </div>
        </Link>
        <div className="navbar-links-container">
          <Link className="navbar-link" to="/shop">
            Shop
          </Link>
          <>
            {userDetails ? (
              <span className="navbar-link" onClick={handleLogout}>
                Logout
              </span>
            ) : (
              <Link className="navbar-link" to="/auth">
                Login
              </Link>
            )}
          </>
          <Link className="navbar-link" to="/checkout">
            <AiOutlineShoppingCart className="navbar-cart-icon" />
            <span className="navbar-cart-total-count">{cartItemCount}</span>
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
