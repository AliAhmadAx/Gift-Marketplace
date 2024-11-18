import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import { useState } from "react";
import TotalServices from "../../TotalService";
import { ThemeContext } from "../../App";
import addFavorite from "../Functions/AddtoFavorites";
import RemoveFavorite from "../Functions/RemoveFavorites";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import Modal from "../Modals/Modal";

const SearchResults = ({ item, image, favoriteList, setFavoriteList }) => {
  const { favorite, setFavorite } = useContext(ThemeContext);

  const [showMore, setShowMore] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <div className="p2 lg:p-4 w-full h-full relative flex flex-col items-center">
        <div className="w-full rounded-lg mb-5">
          <img src={image} className="w-full rounded-lg" alt="" />
        </div>
        <div className="w-full pr-5 flex flex-col justify-between h-[50%]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="w-full md:text-left text-center ">
              <h1 className="font-bold text-xl md:mb-2 mb-2">{item.name}</h1>

              <div className="w-full flex justify-between items-center">
                <span className="flex items-center">
                  <p className="text-black text-2xl font-bold mr-1">
                    {item.currency}
                  </p>
                  <p className="text-black text-2xl font-bold">{item.price}</p>
                  <p className="ml-2">
                    {favoriteList && favoriteList.indexOf(item.id) !== -1 ? (
                      <BsSuitHeartFill
                        className="cursor-pointer text-red-500"
                        onClick={() =>
                          RemoveFavorite(
                            item.id,
                            setFavorite,
                            favorite,
                            setFavoriteList
                          )
                        }
                      />
                    ) : (
                      <BsSuitHeart
                        className="cursor-pointer"
                        onClick={() =>
                          addFavorite(
                            item.id,
                            setFavoriteList,
                            favoriteList,
                            setFavorite,
                            favorite
                          )
                        }
                      />
                    )}
                  </p>
                </span>
              </div>

              {/* ratings  */}
              <div className="">
                <div className="flex items-center mt-2">
                  <p className="uppercase text-sm font-bold">Rating:</p>
                  {item.rating === null ? (
                    <p className="text-gray-800 text-sm w-full text-center">
                      No Reviews Yet
                    </p>
                  ) : (
                    item.rating &&
                    !isNaN(parseInt(item.rating)) &&
                    Array.from(Array(parseInt(item.rating)), (val) => (
                      <AiFillStar className="yellow-color-text text-xl" />
                    ))
                  )}

                  <span className=" text-black text-sm font-normal mr-2 px-2.5 py-0.5  ml-3">
                    {!isNaN(parseInt(item.rating)) ? item.rating : item.rating}
                  </span>
                </div>
                {/* {Object.keys(item._source).map(
                    (val) =>
                      val !== "images" &&
                      val !== "rating" &&
                      item._source[val] !== null && (
                        <div className="text-left w-full">
                          <p className="uppercase font-bold">{val}:</p>

                          <p className="">{item._source[val]}</p>
                        </div>
                      )
                  )} */}
              </div>
            </div>
          </div>

          {showMore === true ? (
            <Modal setShowMore={setShowMore} description={item.description} />
          ) : null}

          {item.description.length >= 100 ? (
            <p className="py-2 pr-4 md:text-left text-center">
              <span>
                {item.description.slice(0, 40)}...
                <button
                  onClick={() => setShowMore(true)}
                  className="text-xm text-blue-500 hover:underline"
                >
                  show more
                </button>
              </span>
            </p>
          ) : (
            <p className="py-2 lg:pr-4 md:text-left text-center">
              {item.description}
            </p>
          )}
        </div>
        <Link
          to={image}
          className={`text-xs border-2 ${
            image === null
              ? "border-gray-300 text-gray-300"
              : "border-[#E7AB3C] hover:bg-[#e7ab3c3b] text-[#E7AB3C] "
          } py-3 w-full rounded-lg block my-5 md:mb-2`}
        >
          {image === null ? "No Link Found" : "Shop Now"}
        </Link>
      </div>
    </>
  );
};

export default SearchResults;
