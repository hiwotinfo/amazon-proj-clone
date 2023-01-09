import React from "react";
import logo from "../Header/images/Amazon-logo2.png";
import "../Header/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom"; //link module is to avoid refersh every time is good
import { useStateValue } from "../StateProvider/StateProvider";
import { CFormSelect } from "@coreui/react";
import { auth } from "../firebase/firebase";

// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }; // this function it helps to how to one user sign out in our website
  return (
    <div className="header header__clearlink">
      <Link to="/">
        {/*when i click the logo to rendered home page */}
        <img className="header__logo" src={logo} />
      </Link>

      {/* <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"/> */}
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"} className="header__clearlink">
          {" "}
          {/* //if not live user go to login page other whays  go to home page  */}
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              Hellow {!user ? "Guest" : user.email}
            </span>
            {/*if not here user render Guesst else display user.email address   */}

            <span className="header__optionLineTwo">
              {user ? "Sign.Out" : "Sign In"}
            </span>
            {/*if user is here render signe out els display signIn] // */}
          </div>
        </Link>
<Link to='/orders' className="header__clearlink">
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
</Link>
        <div className="header__option">
          <span className="header__optionLineOne">your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        
        <Link to="/checkout" className="header__clearlink">
          {" "}
          {/* when I click shopingBasketIcon render checkout page*/}
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      
        {/* <ShoppingCartIcon />
        <span className="header__optionLineTwo header__basketCount"><sup>0</sup></span> */}
      </div>
    </div>
  );
};

export default Header;
