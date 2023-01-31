import React from "react";
import { SiShopify } from "react-icons/si";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useStateContext } from "../context/StateContext";

const Navbar = () => {
  const {search , setSearch , state: {cart}} = useStateContext();
  return (
    <nav className="flex sticky top-0 absolute shadow-lg items-center justify-between bg-gray-200 shadow-md px-5 py-2 my-5 rounded">
      <Link to="/">
        <div className="flex items-center gap-2 cursor-pointer">
          <SiShopify className="text-4xl text-danger" />
          <h1 className="uppercase text-xl font-semibold tracking-wider text-info">
            mms-shop
          </h1>
        </div>
      </Link>
      <div className="flex items-center gap-2">
        <Link to="/cart">
        <div className="flex items-center gap-2 bg-header text-white px-4 py-2 rounded-md">
          <FaShoppingCart />
          <small>{cart.length}</small>
        </div>
        </Link>
        <div className="flex items-center gap-2 border-2 rounded px-3 py-2">
          <FaSearch />
          <input
          value={search}
          onChange={(e)=> setSearch(e.target.value)}
            type="text"
            className="outline-none bg-transparent"
            placeholder="Search......"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
