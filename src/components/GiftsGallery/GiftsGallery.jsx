import React, { useState } from "react";

const GiftsGallery = ({ AlphabeticGifts }) => {
  const alphabets = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  return (
    <>
      <div
        className="w-full grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3 justify-center place-items-center  lg:gap-4 gap-2 overflow-hidden"
        style={{ WebkitBoxPack: "center" }}
      >
        {alphabets.map((alphabet, index) => (
          <div className="z-10 cursor-pointer" key={index}>
            <div
              onClick={() => {
                AlphabeticGifts(alphabet);
              }}
              className="w-16 h-16 transition-all rounded-none hover:-skew-x-3 shadow-sm hover:shadow-md hover:shadow-gray-400 hover:skew-y-3 hover:-translate-y-2 duration-200 overflow-hidden bg-gray-900 flex items-center justify-center m-2"
            >
              <p className="text-2xl text-[#E7AB3C] font-semibold border-b-2 border-white text-[##3779FD] leading-[26px]">
                {alphabet}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GiftsGallery;
