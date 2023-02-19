import React from "react";
import { DataContext } from "../../dataContext";

//components
import Header from "./components/Header";
import Search from "../../components/search/Search";
import Filter from "../../components/filter/Filter";
import Result from "../../components/result/Result";

const Rent = () => {
  // data is the list of items to be displayed in the result component
  // setData is the function to update the data through the filter component
  const [data, setData] = React.useState(React.useContext(DataContext));
  return (
    <div className="flex flex-col items-center w-[100%]">
      <div className="flex flex-row justify-between  w-212 xl:w-288 mt-8 items-center">
        <div>
          <Header />
        </div>
        <div>
          <Search />
        </div>
      </div>
      <div className="filter">
        <Filter setData={setData} />
      </div>
      <div className="results">
        <Result data={data} />
      </div>
    </div>
  );
};

export default Rent;
