import React from "react";
import { PopularListData } from "./categoriesData";

const PopularList = () => {
  return (
    <>
      <div className="w-full lg:w-fit flex flex-col items-center z-20">
        <h2 className="mb-4 text-lg font-semibold text-gray-900 ">
          {PopularListData.title}
        </h2>
        <ul className="w-full lg:max-w-md space-y-3 text-black list-none text-center list-inside">
          {PopularListData.list.map((item) => {
            return (
              <li
                onClick={() => navigate("/favourite-gift")}
                className="cursor-pointer hover:-translate-y-2 ease-in-out duration-200 text-[#E7AB3C] font-semibold py-2 w-full lg:px-10 rounded-md border-white bg-gray-900 shadow-md hover:shadow-xl shadow-gray-400 hover:shadow-gray-400"
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default PopularList;
