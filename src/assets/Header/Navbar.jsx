import React, { useContext, useState } from "react";
import "./Header.css";
import { CartDataContext } from "../../App";
import avatarImg from "../../bgAssets/premium vector.jfif";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "@react-icons/all-files/fi/FiShoppingCart";
import { getUserdata } from "../../App";
import { totalCartItemPrice } from "../../App";
import {HiArrowNarrowUp} from "@react-icons/all-files/hi/HiArrowNarrowUp"

const Navbar = () => {
  const cartContext = useContext(CartDataContext);
  const userData = useContext(getUserdata);
  const cartItemPrice = useContext(totalCartItemPrice);
  const [userMenu, setUserMenu] = useState(false);

  const userMenuShow = () => {
    setUserMenu(!userMenu);
  };

  return (
    <div className="header">
      <div className="navbar" id="navbar">
        <div className="logo">
          <h3>
            Food<span style={{ color: "tomato" }}>Frenzy</span>
          </h3>
        </div>

        <div className="list-items">
          <Link to={"/"}>home</Link>
          <Link to={"/recip"}>recip</Link>
          <Link to={"/nutrition"}>nutritions</Link>
          <a href="#footer">about</a>
        </div>

        <div className="right-nav">
          <Link to={"/cart"}>
            <FiShoppingCart />
          </Link>
          <p className="cart-count">
            {cartContext.length > 0 ? cartContext.length : 0}
          </p>


          <button className="menubar-icons" onClick={userMenuShow}>
            {userMenu ? (
              <i id="menu-icon-cross" className="fa-solid fa-xmark"></i>
            ) : (
              <i id="menu-icon" className="fa-solid fa-bars"></i>
            )}
          </button>
         
         <div className="scrollup-navbar">
          <a href="#navbar"  className="scroll-up">
           <button>
            <HiArrowNarrowUp />
           </button>
         </a>
         </div>

        </div>
      </div>

      <div className={userMenu ? "user-cart" : "userMenuHide"}>
        <div className="top-user-cart">
          <img src={avatarImg} alt="" />
          <h4>{userData.username ? userData.username : "anonymous"}</h4>
          <span>{userData.email ? userData.email : "anonymous@email.com"}</span>
        </div>
        
        <div className="mid-user-cart">
          <div className="navbar-items-show">
          <Link to={"/cart"}>Go to cart</Link>
          <Link to={"/recip"}>Go to recips</Link>
          <Link to={"/nutrition"}>Go to nutritions</Link>
          </div>
          <div className="navbar-list-items">
          <Link to={"/"}>Home</Link>
          <Link to={"/recip"}>Recips</Link>
          <Link to={"/singup"}>Join us</Link>
          <a href="#footer">about us</a>
          <Link to={"/nutrition"}>Nutritions</Link>
          </div>
        </div>
        <div className="bottom-user-cart">
          <p className="totalcart-item-price">
            Tottel cart item price :{" "}
            <span>${cartItemPrice == null ? 0 : cartItemPrice}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
