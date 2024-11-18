import React, { useEffect, useState } from "react";

import Checkbox from "./Checkbox";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../App";

const Filter = ({
  options,
  setCategoryFilter,
  CategoryFilter,
  selectedCheckboxes,
  setSelectedCheckboxes,
}) => {
  const { test, setInputValue } = useContext(ThemeContext);

  const { query } = useParams();

  // useEffect(() => {
  //   const searchParams = decodeURIComponent([query] || "");

  //   if (searchParams.length >= 2 && searchParams.length <= 20) {
  //     setSelectedCheckboxes([searchParams]);
  //     setInputValue("");
  //   }
  // }, [query]);

  console.log("category options", options);

  const handleCheckboxClick = (value, label, isChecked) => {
    if (isChecked) {
      // let data = selectedCheckboxes;
      // data.push(label);
      // console.log(data, "tts");
      setSelectedCheckboxes([...selectedCheckboxes, label]);
      console.log(`Checkbox ${value} is checked.`);
    } else {
      // console.log(CategoryFilter);
      let b = CategoryFilter.filter((item) => item !== label);
      setSelectedCheckboxes(b);
    }
  };

  useEffect(() => {
    setCategoryFilter(selectedCheckboxes);
  }, [selectedCheckboxes, setCategoryFilter]);

  return (
    <div className=" w-full mb-5 max-h-[50vh] overflow-auto">
      <div className=" justify-start flex "></div>

      <>
        {options?.map((i, index) => {
          const isChecked = selectedCheckboxes.includes(i.label);

          return (
            <span
              key={index}
              className="flex mb-2 z-0 items-center space-x-2 text-left"
            >
              <Checkbox
                key={i}
                label={i}
                value={i}
                onClick={handleCheckboxClick}
                isChecked={isChecked}
              />
            </span>
          );
        })}
      </>
    </div>
  );
};

export default Filter;
