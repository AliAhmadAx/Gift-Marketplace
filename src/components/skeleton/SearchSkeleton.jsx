import React from "react";

const SearchSkeleton = () => {
  return (
    <div className="mx-auto p-4 border-gray-300 rounded-lg w-full flex flex-col items-center">
      <div className="w-full md:px-11">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:text-left w-full text-center">
            <h1 className="font-bold text-3xl md:mb-2 mb-2">
              <div className="h-4 bg-gray-300 rounded-full  w-[60%] mb-2"></div>
            </h1>
            <a
              href="#"
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline block mb-5 md:mb-0"
            >
              <div className="h-4 bg-gray-300 rounded-full  w-[80%]"></div>
            </a>
          </div>
          <div className="w-full md:h-28 md:w-[300px] bg-gray-300 rounded-lg"></div>
        </div>
        <div className="py-2 pr-4 md:text-left text-center">
          <div className="h-4 bg-gray-300 rounded-full  w-[30%]"></div>
          <div className="h-4 bg-gray-300 rounded-full  w-[60%] mt-2"></div>
          <div className="h-4 bg-gray-300 rounded-full  w-[30%] mt-2"></div>
        </div>
      </div>
    </div>
  );
};

export default SearchSkeleton;
