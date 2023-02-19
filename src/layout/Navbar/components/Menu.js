import React from "react";
import { Link, useLocation } from "react-router-dom";

const Menu = () => {
  const loc = useLocation();
  const path = loc.pathname;

  //for style
  const active = "bg-[#efe6fc] text-[#6800d9]";
  const inactive = "text-[#000]";
  const rent = path === "/rent" ? active : inactive;
  const buy = path === "/buy" ? active : inactive;
  const sell = path === "/sell" ? active : inactive;

  return (
    <div className="menu">
      <ul className="flex flex-row items-center">
        <Link to="/rent">
          <li className={`px-3 py-1 mr-8 font-medium ${rent} rounded`}>Rent</li>
        </Link>
        <Link to="/buy">
          <li className={`px-3 py-1 mr-8 font-medium ${buy} rounded`}>Buy</li>
        </Link>
        <Link to="/sell">
          <li className={`px-3 py-1 mr-8 font-medium ${sell} rounded`}>Sell</li>
        </Link>
      </ul>
    </div>
  );
};

export default Menu;
