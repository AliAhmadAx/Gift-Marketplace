import React, { useContext } from "react";
import Button from "../components/Button/Button";
import GiftCards from "../components/GiftCards/GiftCards";
import { useNavigate } from "react-router-dom";
import { giftCardsData } from "../components/GiftCards/GiftCardsData";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useEffect } from "react";
import TotalServices from "../TotalService";
import axios from "axios";
import { useState } from "react";
import { ThemeContext } from "../App";
import { Helmet } from "react-helmet";
const Gifts = () => {
  const navigate = useNavigate();
  const [favoriteData, setFavoriteData] = useState([]);
  const { favorite, setFavorite } = useContext(ThemeContext);

  const getFavoriteProducts = async () => {
    const token = JSON.parse(localStorage.getItem("UserAuth"));
    let favorites = localStorage.getItem("favorites");

    try {
      let response = token
        ? await TotalServices.getFavoriteList()
        : favorites
        ? JSON.parse(favorites).length >= 1
          ? await TotalServices.getFavoriteListUnAuth({
              product_id: JSON.parse(favorites),
            })
          : setFavoriteData([])
        : null;

      console.log(favorite, response);

      setFavoriteData(response.data ? response.data?.response?.hits?.hits : []);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(favoriteData);
  useEffect(() => {
    getFavoriteProducts();
  }, [favorite]);

  return (
    <div className="w-full mt-5 lg:mt-24 min-h-[50vh] z-10">
      <span className="right-[6%] hidden lg:visible top-[17%] trans hover:translate-y-[-400px] opacity-100 hover:opacity-0 transition-all duration-[5000ms] ease-linear droplet-shadows lg:absolute w-8 h-8 bg-gradient-to-br from-slate-100/90 to-blue-900/90 rounded-full z-0"></span>

      <span className="left-[26%] hidden lg:visible top-[26%] trans hover:translate-y-[-400px] opacity-100 hover:opacity-0 transition-all duration-[5000ms] ease-linear droplet-shadows absolute w-6 h-6 bg-gradient-to-br from-slate-100/90 to-blue-900/90 rounded-full z-0"></span>
      <Helmet>
        <title>Gift_Market Place | Favorites</title>
      </Helmet>
      <div className="w-full text-center my-8 ">
        <h1 className="font-sans font-normal text-5xl">Favorite Gifts</h1>
      </div>
      <div className="flex w-fit justify-start flex-nowrap mx-5 lg:mx-14 my-4 items-center">
        {/* <div>
          <Button
            title={"Comparison Lists"}
            onClick={() => navigate("/comparison-list")}
          />
        </div> */}
      </div>

      {/* <div className="mx-14 my-4 grid grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <GiftCards key={index} />
        ))}
      </div> */}
      <div className="mx-5 lg:px-32 my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-4 gap-1 md:gap-2 m-auto">
        {!favoriteData ? (
          <div className="absolute w-full py-20 left-0 bg-gray-900 text-yellow-400">
            no data found, please add items to Favorites first
          </div>
        ) : (
          favoriteData?.map((item, index) => {
            return (
              <GiftCards
                key={index}
                image={item._source.images.split(",")[0]}
                item={item}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Gifts;
