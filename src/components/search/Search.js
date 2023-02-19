import React from "react";
import { TextField } from "@mui/material";

const Search = () => {
  return (
    <div className="bg-white shadow-md rounded">
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        size="small"
      />
    </div>
  );
};

export default Search;
