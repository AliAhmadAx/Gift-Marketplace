import React from "react";
import { useNavigate } from "react-router-dom";

const BirthDayList = ({ occasionCategories }) => {
  let navigate = useNavigate();
  return (
    <div className="w-full lg:w-fit flex flex-col items-center z-20">
      <h2 className="mb-4 text-lg font-semibold text-gray-900 ">Birthday</h2>
      <ul className="w-full lg:max-w-md space-y-3 text-black list-none text-center list-inside">
        {occasionCategories.length === 0 ? (
          <div className="text-white yellow-color font-semibold py-2 px-10 rounded-md">
            Candles
          </div>
        ) : (
          occasionCategories?.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => navigate(`/search/${item.key}`)}
                className="cursor-pointer hover:-translate-y-2 ease-in-out duration-200 text-white font-semibold py-2 w-full lg:px-10 rounded-md border-white yellow-color shadow-md hover:shadow-xl shadow-gray-400 hover:shadow-gray-400"
              >
                {item.key}
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default BirthDayList;
