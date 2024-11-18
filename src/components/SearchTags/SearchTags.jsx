import React from "react";

const SearchTags = ({ searchWords }) => {
  return (
    <div className="w-full text-center my-4">
      <div className="flex flex-wrap justify-center">
        {searchWords.map((word, index) => (
          <span
            key={index}
            className={`px-2 py-1 m-1 text-sm ${
              word.length > 10 ? "text-lg font-bold" : "text-base"
            } text-black rounded-lg`}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SearchTags;
