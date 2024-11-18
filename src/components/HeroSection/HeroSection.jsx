import React from "react";
import { AiFillGift } from "react-icons/ai";

const HeroSection = () => {
  return (
    <div className="w-full h-[70vh] lg:h-screen lg:bg-transparent">
      <div className="gift-background w-full h-full overflow-hidden flex flex-col lg:flex-row items-center justify-center">
        <div className="w-full backdrop-blur-sm bg-black/20 lg:bg-transparent lg:w-1/2 h-full flex flex-col justify-center items-center lg:items-start text-left leading-7 lg:leading-[50px] lg:pl-40 lg:mt-10">
          <span className="flex lg:-ml-2 items-center">
            <AiFillGift className="lg:mr-2 text-[60px] lg:text-[100px] text-white" />

            <span className="">
              <h2 className="text-[30px] lg:text-[50px] text-white flex items-center ">
                Gift
              </h2>
              <h2 className="text-[30px] lg:text-[50px] text-white ">
                MarketPlace
              </h2>
            </span>
          </span>
          <p className="text-sm w-2/3 text-center lg:text-justify mt-5 pl-1 text-white ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
            consectetur neque possimus illo sit, aperiam ipsum! Voluptas
            obcaecati sapiente ea.
          </p>
        </div>
        <div className="w-1/2 lg:h-full"></div>
      </div>
    </div>
  );
};

export default HeroSection;
