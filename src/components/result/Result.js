import React from "react";

//components
import ItemCard from "../itemCard/ItemCard";

//Result component which maps data passed through props with the help of ItemCard component
const Result = ({ data }) => {
  try {
    return (
      <div className="m-8 w-212 xl:w-288 flex flex-wrap">
        {data.map((item, index) => {
          return (
            <div key={`index${index}`}>
              <ItemCard item={item} />
            </div>
          );
        })}
      </div>
    );
  } catch (error) {}
};

export default Result;
