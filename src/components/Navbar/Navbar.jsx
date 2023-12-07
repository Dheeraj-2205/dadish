import React from "react";
import nav from "./navbar.module.css";
import { IoMdHome } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = ({ props }) => {
  // console.log(prop)
  return (
    <div className={nav.cont}>
      <Link to="/" className={nav.link}>
        <div className={nav.smallCont}>
          <IoMdHome size={25} />

          <p>Home</p>
        </div>
      </Link>
      <Link to="/cart" className={nav.link}>
        <div className={nav.smallCont}>
          <div className={nav.countData}>
            <p>{props}</p>
          </div>
          <FaShoppingCart size={25} />
          <p>Cart</p>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
