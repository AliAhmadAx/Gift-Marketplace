import React from "react";
import Button from "../Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

const ComparisonCards = ({ cardData }) => {
  const navigate = useNavigate();

  console.log(cardData);

  return (
    <div className="text-center w-full mt-10 pb-10">
      {cardData?.images && (
        <div>
          <div className="rounded-3xl flex justify-start space-x-3 pr-5 ">
            <img
              className="w-1/2 rounded-lg"
              src={cardData?.images
                ?.split(",")[0]
                .replace("cat_image/100", "cat_image/600")}
              alt="product image"
            />
            <div className="w-full flex flex-col justify-center space-y-3 pr-3">
              <span className="text-left font-bold uppercase text-xl flex flex-col">
                {cardData.name}
                <span className="text-left text-sm font-normal lowercase">
                  {cardData.title}
                </span>
              </span>

              <div className="flex items-center ">
                <p className="uppercase font-bold">Rating:</p>
                {cardData.rating &&
                  !isNaN(parseInt(cardData?.rating?.split(" ")[0])) &&
                  Array.from(
                    Array(parseInt(cardData?.rating?.split(" ")[0])),
                    (val) => (
                      <AiFillStar className="yellow-color-text text-xl" />
                    )
                  )}

                <span className=" text-black text-lg font-normal mr-2 px-2.5 py-0.5  ml-3">
                  {!isNaN(parseInt(cardData?.rating?.split(" ")[0]))
                    ? cardData?.rating?.split(" ")[0]
                    : cardData?.rating}
                </span>
              </div>

              <span className="text-left flex">
                <p className="font-bold text-base mr-2">PRICE:</p>
                {cardData.currency}
                {cardData.price}
              </span>

              <span className="text-left flex">
                <p className="font-bold text-base mr-2">DOMAIN:</p>
                {cardData.domain}
              </span>

              <span className="pt-5">
                {console.log(cardData.url)}
                <Link
                  to={cardData.url}
                  className={`text-xs border-2 ${
                    cardData.url === null
                      ? "border-gray-300 text-gray-300"
                      : "border-[#E7AB3C] hover:bg-[#e7ab3c3b] yellow-text-color"
                  }  py-3 w-full rounded-lg  block`}
                >
                  {cardData.url === null ? "No Link Found" : "Go to Site"}
                </Link>
              </span>
            </div>
          </div>
        </div>
      )}
      <div className="py-2 ">
        {/* {Object.keys(cardData).map(
          (val) =>
            val !== "images" &&
            val !== "rating" &&
            cardData[val] !== null && (
              <div className="text-left w-full pr-10">
                <p className="uppercase font-bold">{val}:</p>

                <p className="mb-2 text-justify overflow-y-auto">
                  {cardData[val]}
                </p>
              </div>
            )
        )} */}

        <span className=" font-normal flex flex-col text-left mt-5">
          <p className="font-bold uppercase">DESCRIPTION:</p>
          <p className="text-left ">
            {cardData.description.length >= 250
              ? cardData.description.slice(0, 250) + "..."
              : cardData.description}
          </p>
        </span>

        <span className=" font-normal flex flex-col text-left mt-5">
          <p className="font-bold uppercase">main category:</p>
          <p className="text-left ">{cardData.main_category}</p>
        </span>

        <span className=" font-normal flex flex-col text-left mt-5">
          <p className="font-bold uppercase">sub category 1:</p>
          <p className="text-left ">
            {cardData.sub_category_1
              ? cardData.sub_category_1
              : "Not Available"}
          </p>
        </span>

        <span className=" font-normal flex flex-col text-left mt-5">
          <p className="font-bold uppercase">sub category 2:</p>
          <p className="text-left ">
            {cardData.sub_category_2
              ? cardData.sub_category_2
              : "Not Available"}
          </p>
        </span>

        <span className=" font-normal flex flex-col text-left mt-5">
          <p className="font-bold uppercase">sub category 3:</p>
          <p className="text-left ">
            {cardData.sub_category_3
              ? cardData.sub_category_3
              : "Not Available"}
          </p>
        </span>
      </div>
    </div>
  );
};

export default ComparisonCards;
