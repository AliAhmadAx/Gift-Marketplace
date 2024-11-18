import React, { useContext } from "react";
import Button from "../Button/Button";
import { Link, useNavigate } from "react-router-dom";
import RemoveFavorite from "../Functions/RemoveFavorites";
import { ThemeContext } from "../../App";
import { AiFillStar } from "react-icons/ai";
import { BsSuitHeartFill } from "react-icons/bs";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const GiftCards = ({ item, image, text, display, url }) => {
  const navigate = useNavigate();
  const { favorite, setFavorite } = useContext(ThemeContext);

  console.log(item);
  return (
    <div className="text-center w-full">
      <span>
        <div className="rounded-3xl flex ">
          <img
            className="transition-opacity duration-300 hover:opacity-75 cursor-pointer w-full object-cover rounded-lg  h-[280px]  "
            src={image.replace("cat_image/100", "cat_image/600")}
            alt="product image"
          />
        </div>
      </span>
      <div className="w-full pr-5 flex flex-col justify-between">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:text-left text-center ">
            <h1 className=" font-bold text-xl md:mb-2 mb-2 h-20">
              {item._source.main_category} | {item._source.name}{" "}
            </h1>

            <div className="w-full flex justify-between items-center">
              <span className="flex items-center">
                <p className="text-black text-2xl font-bold mr-1">
                  {item._source.currency}
                </p>
                <p className="text-black text-2xl font-bold">
                  {item._source.price}
                </p>
                <p className="ml-2">
                  <BsSuitHeartFill
                    data-tooltip-id="remove_favorite"
                    data-tooltip-content="Remove from Favorites"
                    onClick={() =>
                      RemoveFavorite(item._source.id, setFavorite, favorite)
                    }
                    className="cursor-pointer text-red-500 outline-none"
                  />
                  <Tooltip id="remove_favorite" />
                </p>
              </span>
            </div>

            {/* ratings  */}
            <div className="">
              <div className="flex items-center mt-2">
                <p className="uppercase text-sm font-bold">Rating:</p>
                {console.log(item._source.rating)}
                {item._source.rating === null ? (
                  <p className="text-gray-800 text-sm w-full text-center">
                    No Reviews Yet
                  </p>
                ) : (
                  item._source.rating &&
                  !isNaN(parseInt(item._source?.rating?.split(" ")[0])) &&
                  Array.from(
                    Array(parseInt(item._source?.rating?.split(" ")[0])),
                    (val) => (
                      <AiFillStar className="yellow-color-text text-xl" />
                    )
                  )
                )}

                <span className=" text-black text-sm font-normal mr-2 px-2.5 py-0.5  ml-3">
                  {!isNaN(parseInt(item._source?.rating?.split(" ")[0]))
                    ? item._source?.rating?.split(" ")[0]
                    : item._source?.rating}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link
        to={item._source.url}
        className="text-xs border-2  border-[#E7AB3C] hover:bg-[#e7ab3c3b] py-3 w-full rounded-lg text-[#E7AB3C] block my-5 md:mb-2"
      >
        Go to Site
      </Link>
    </div>
  );
};

export default GiftCards;
