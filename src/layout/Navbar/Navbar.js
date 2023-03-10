import React from "react";

//components
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import User from "./components/User";

const Navbar = () => {
  return (
    <div className="shadow-md shadow-[#e5cdff]">
      <div className="navbar w-[100%] bg-[#fcfaff]  flex flex-row justify-between items-center text-black py-3 px-10 border-b-[1px] border-b-[#e5cdff]">
        <div className="flex flex-row h-10 items-center">
          <Logo />
          <Menu />
        </div>
        <User />
      </div>
    </div>
  );
};

export default Navbar;
