import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className="text-black">
      <Link to="/auth/login">
        <Button
          variant="outlined"
          className="border-[#6800d9] text-[#6800d9] hover:bg-[#f6eeff] "
        >
          Login
        </Button>
      </Link>

      <span className="ml-2">
        <Link to="/auth/signup">
          <Button
            variant="contained"
            className="bg-[#6800d9] hover:bg-[#5b00bc]"
          >
            Sign Up
          </Button>
        </Link>
      </span>
    </div>
  );
};

export default User;
