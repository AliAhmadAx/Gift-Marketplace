import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../App";

const PopCategories = ({ popularCategories }) => {
  let navigate = useNavigate();
  const { setTest } = useContext(ThemeContext);

  return (
    <div className="w-full flex flex-col items-center z-20">
      <h2 className="w-full mb-4 text-lg font-semibold text-gray-900 ">
        Popular Categories
      </h2>
      <ul className="w-full lg:w-2/3 space-y-3 text-black list-none text-center list-inside">
        {popularCategories.length === 0 ? (
          <div className="text-[#E7AB3C] bg-gray-900 font-semibold py-2 px-10 rounded-md shadow-md shadow-gray-400">
            NO DATA FOUND
          </div>
        ) : (
          popularCategories?.map((item, key) => {
            return (
              <li
                key={key}
                onClick={() => {
                  setTest([item]);
                }}
                className="cursor-pointer hover:-translate-y-2 ease-in-out duration-200 text-[#E7AB3C] font-semibold py-2 w-full px-10 rounded-md border-white bg-gray-900 shadow-md hover:shadow-xl shadow-gray-400 hover:shadow-gray-400"
              >
                {item}
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default PopCategories;
