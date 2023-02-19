import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div
      className="mr-8 h-full w-20 bg-contain flex flex-row items-center"
      style={{ backgroundImage: "url('../../../assets/realEstate.jpeg')" }}
    >
      <Link to="/">
        <span className="font-black">ESTATE</span>
      </Link>
    </div>
  );
};

export default Logo;
