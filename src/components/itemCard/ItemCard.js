import React from "react";
import PopularIcon from "../../assets/icons/popular-icon.png";
import BedIcon from "../../assets/icons/bed-icon.png";
import BathIcon from "../../assets/icons/bathroom-icon.png";
import AreaIcon from "../../assets/icons/area-icon.png";
import SaveIconFalse from "../../assets/icons/save-icon-false.png";
import SaveIconTrue from "../../assets/icons/save-icon-true.png";

const ItemCard = ({ item, image }) => {
  const [saveIcon, setSaveIcon] = React.useState(SaveIconFalse);
  const handleSaveClick = () => {
    if (saveIcon === SaveIconFalse) {
      setSaveIcon(SaveIconTrue);
    } else {
      setSaveIcon(SaveIconFalse);
    }
  };
  return (
    <div>
      <div className="bg-white shadow-lg rounded-lg w-[250px] mx-4 my-4 flex-wrap">
        <div className="flex flex-col justify-between">
          <div
            className="w-[250px] h-32 bg-cover bg-no-repeat bg-center rounded-t-lg overflow-visible"
            style={{ backgroundImage: `url(${image.src.medium})` }}
          >
            {item.featured ? (
              <div
                className="w-[100px] h-[60px] bg-contain bg-no-repeat bg-center relative top-[96px] right-[15px]"
                style={{ backgroundImage: "url(" + PopularIcon + ")" }}
              ></div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="flex flex-col h-[150px]">
            <div className="flex mt-4 ml-4 text-left text-[#6800d9] font-black text-xl items-baseline justify-between">
              <div>
                ${item.price}
                <span className="text-[#888] text-sm font-normal">
                  &nbsp;/month
                </span>
              </div>
              <div
                className="w-[30px] h-[30px] bg-contain bg-no-repeat bg-center self-center mr-[20px] cursor-pointer"
                style={{ backgroundImage: "url(" + saveIcon + ")" }}
                onClick={() => {
                  handleSaveClick();
                }}
              ></div>
            </div>
            <div className="flex mt-1 ml-4 text-left text-[#000000] font-black text-md items-baseline">
              {item.title}
            </div>
            <div className="flex mt-1 ml-4 text-left text-[#808080] text-sm items-baseline">
              {item.location}
            </div>
            <div className="flex border-t-[1px] border-[#c0c0c0] m-3"></div>
            <div className="flex flex-row justify-evenly px-3">
              <div className="flex flex-row">
                <div
                  className="w-[16px] h-[16px] bg-contain bg-no-repeat bg-center"
                  style={{
                    backgroundImage: "url(" + BedIcon + ")",
                  }}
                ></div>
                &nbsp;
                <div className="text-xs text-[#808080]">
                  {item.feat.bed}&nbsp;Beds
                </div>
              </div>
              <div className="flex flex-row">
                <div
                  className="w-[16px] h-[16px] bg-contain bg-no-repeat bg-center"
                  style={{
                    backgroundImage: "url(" + BathIcon + ")",
                  }}
                ></div>
                &nbsp;
                <div className="text-xs text-[#808080]">
                  {item.feat.bath}&nbsp;Bathrooms
                </div>
              </div>
              <div className="flex flex-row">
                <div
                  className="w-[14px] h-[14px] bg-contain bg-no-repeat bg-center"
                  style={{
                    backgroundImage: "url(" + AreaIcon + ")",
                  }}
                ></div>
                &nbsp;
                <div className="text-xs text-[#808080]">
                  {item.feat.area}&nbsp;m&#178;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
