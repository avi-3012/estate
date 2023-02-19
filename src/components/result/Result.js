import React from "react";

//components
import ItemCard from "../itemCard/ItemCard";

const Result = ({ data }) => {
  const [data2, setData2] = React.useState([]);
  //image api
  const fetchImage = async () => {
    const response = await fetch(
      "https://api.pexels.com/v1/search/?page=1&per_page=15&query=house"
    );
    const data2 = await response.json();
    setData2(data2);
  };
  React.useEffect(() => {
    fetchImage();
  }, []);

  try {
    return (
      <div className="m-8 w-212 xl:w-288 flex flex-wrap">
        {data.map((item, index) => {
          return (
            <div key={`index${index}`}>
              <ItemCard item={item} image={data2.photos[index]} />
            </div>
          );
        })}
      </div>
    );
  } catch (error) {}
};

export default Result;
