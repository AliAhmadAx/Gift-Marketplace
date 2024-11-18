import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";
import HeroSection from "../components/HeroSection/HeroSection";
import PopCategories from "../components/Categories/PopCategories";
import TrendCategories from "../components/Categories/TrendCategories";
import BirthDayList from "../components/Gift/BirthDayList";
import AnniversaryList from "../components/Gift/AnniversaryList";
import WeddingList from "../components/Gift/WeddingList";
import GiftsGallery from "../components/GiftsGallery/GiftsGallery";
import TotalServices from "../TotalService";
import { useNavigate } from "react-router-dom";
import hoverBox from "../assets/giftbox.png";

const Home = () => {
  const navigate = useNavigate();
  const [popularCategories, setPopularCategories] = useState([]);
  const [trendingCategories, setTrendingCategories] = useState([]);

  const [alphabet, setAlphabet] = useState([]);
  const [birthdayGift, setBirthdayGift] = useState([]);
  const [weddingGift, setWeddingGift] = useState([]);
  const [anniversaryGift, setAnniversaryGift] = useState([]);

  const sizes = [
    "3xl",
    "xl",
    "md",
    "lg",
    "sm",
    "3xl",
    "md",
    "2xl",
    "xl",
    "md",
    "xs",
    "4xl",
    "lg",
    "3xl",
    "md",
    "4xl",
    "lg",
    "sm",
  ];

  const recentWords = [
    "cats",
    "pets",
    "furniture for pets",
    "toys",
    "Cars",
    "kids favorites",
    "chew",
    "mini world",
    "cute penguins",
    "chocolates for babies",
  ];

  const PopularCategories = async () => {
    try {
      var res = await TotalServices.PopularCategories();

      if (res.status === 200) {
        console.log(res);
        setPopularCategories(res.data.response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    PopularCategories();
  }, []);

  const TrendingCategories = async () => {
    try {
      var res = await TotalServices.TrendingCategories();

      if (res.status === 200) {
        setTrendingCategories(res.data.response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    TrendingCategories();
  }, []);

  const OccassionsGifts = async () => {
    try {
      var res = await TotalServices.OccassionsGifts();
      if (res.status === 200) {
        // setOccasionCategories(res.data);
        setBirthdayGift(res.data.birthday_categories);
        setWeddingGift(res.data.wedding_categories);
        setAnniversaryGift(res.data.anniversary_categories);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    OccassionsGifts();
  }, []);

  const AlphabeticGifts = async (abt) => {
    navigate(`/all-gifts`);
  };

  return (
    <>
      <Helmet>
        <title>Gift_Market Place | Home</title>
      </Helmet>

      <HeroSection />

      <div className="w-full py-20 text-white relative flex bg-gray-900 flex-col justify-center items-center overflow-hidden ">
        <h2 className="mb-10 text-4xl font-semibold">Top Searches</h2>
        <ul className="flex justify-center flex-wrap max-w-xl align-center gap-2 leading-8">
          {recentWords.length === 0 ? (
            <div className="text-white yellow-color font-semibold py-2 px-10 rounded-md">
              NO DATA FOUND
            </div>
          ) : (
            recentWords.map((item, index) => (
              <li
                key={index}
                className={`yellow-color-text hover:underline text-${sizes[index]}`}
              >
                {item}
              </li>
            ))
          )}
        </ul>
      </div>

      <div className="w-full flex justify-center relative overflow-hidden">
        <div className="w-full bg-gray-200 shadow-lg flex py-10 flex-col justify-center items-center">
          <h2 className="pb-10 font-semibold text-4xl">Categories</h2>

          <div className="w-10/12 place-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
            <PopCategories popularCategories={recentWords} />
            <TrendCategories trendingCategories={recentWords} />
          </div>

          {/* DROPLET  */}
          <img
            className="left-[12%] top-[40%] trans hover:translate-y-[-400px] opacity-100 hover:opacity-0 transition-all duration-[5000ms] ease-linear absolute w-32 h-32 z-10 rotate-45"
            src={hoverBox}
            alt="floating boxes"
          />

          <img
            className="left-[32%] top-[20%] trans hover:translate-y-[-400px] opacity-100 hover:opacity-0 transition-all duration-[5000ms] ease-linear absolute w-24 h-24 z-10"
            src={hoverBox}
            alt="floating boxes"
          />

          <img
            className="right-[12%] bottom-[10%] rotate-[30deg] trans hover:translate-y-[-400px] opacity-100 hover:opacity-0 transition-all duration-[5000ms] ease-linear absolute w-16 h-16 z-10"
            src={hoverBox}
            alt="floating boxes"
          />
        </div>
      </div>

      <div className="w-full relative my-24 flex flex-col justify-center items-center z-10">
        <h1 className="font-sans font-bold text-center text-3xl mb-4">
          A collection of gifts for any occasion
        </h1>
        <div className="w-10/12 place-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <BirthDayList occasionCategories={birthdayGift} />
          <AnniversaryList occasionCategories={anniversaryGift} />
          <WeddingList occasionCategories={weddingGift} />
        </div>

        <img
          className="left-[38%] top-[30%] trans hover:translate-y-[-400px] opacity-100 hover:opacity-0 transition-all duration-[5000ms] ease-linear absolute w-28 h-28 z-10"
          src={hoverBox}
          alt="floating boxes"
        />

        <img
          className="right-[43%] bottom-[10%] rotate-[30deg] trans hover:translate-y-[-400px] opacity-100 hover:opacity-0 transition-all duration-[5000ms] ease-linear absolute w-12 h-12 z-10"
          src={hoverBox}
          alt="floating boxes"
        />

        <img
          className="right-[6%] top-[10%] rotate-[45deg] trans hover:translate-y-[-400px] opacity-100 hover:opacity-0 transition-all duration-[5000ms] ease-linear absolute w-8 h-8 z-10"
          src={hoverBox}
          alt="floating boxes"
        />
      </div>

      <div className="w-full relative flex flex-col justify-center items-center">
        <img
          className="right-[10%] top-[10%] rotate-[45deg] trans hover:translate-y-[-400px] opacity-100 hover:opacity-0 transition-all duration-[5000ms] ease-linear absolute w-10 h-10"
          src={hoverBox}
          alt="floating boxes"
        />

        <img
          className="left-[14%] top-[30%] rotate-[10deg] trans hover:translate-y-[-400px] opacity-100 hover:opacity-0 transition-all duration-[5000ms] ease-linear absolute w-14 h-14 "
          src={hoverBox}
          alt="floating boxes"
        />

        <img
          className="right-[42%] bottom-[20%] trans hover:translate-y-[-400px] opacity-100 hover:opacity-0 transition-all duration-[5000ms] ease-linear absolute w-32 h-32 "
          src={hoverBox}
          alt="floating boxes"
        />

        <div className="w-full bg-gray-200 shadow-lg flex py-10 flex-col justify-center items-center">
          <h1 className="font-sans font-bold text-center text-3xl my-14">
            A-Z Gifts
          </h1>

          <GiftsGallery
            setAlphabet={setAlphabet}
            alphabet={alphabet}
            AlphabeticGifts={AlphabeticGifts}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
