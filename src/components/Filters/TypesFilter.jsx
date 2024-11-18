import React, { useEffect, useState } from "react";
import Checkbox from "./Checkbox";
import { AiOutlineClear } from "react-icons/ai";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const TypeFilter = ({
  options,
  setTypeFilter,
  TypeFilter,
  selectedCheckboxesType,
  setSelectedCheckboxesType,
}) => {
  const handleCheckboxClick = (value, label, isChecked) => {
    if (isChecked) {
      setSelectedCheckboxesType([...selectedCheckboxesType, label]);
      console.log(`Checkbox ${value} is checked.`);
    } else {
      let b = TypeFilter.filter((item) => item !== label);
      setSelectedCheckboxesType(b);
    }
  };

  useEffect(() => {
    setTypeFilter(selectedCheckboxesType);
  }, [selectedCheckboxesType, setTypeFilter]);

  return (
    <div className="w-full mb-5 max-h-[50vh] overflow-auto">
      <>
        {options?.map((i, index) => {
          const isChecked = selectedCheckboxesType.includes(i.label);

          return (
            <span
              key={index}
              className="flex mb-2 z-0 items-center space-x-2 text-left"
            >
              <Checkbox
                key={i.value}
                label={i.label}
                value={i.value}
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

export default TypeFilter;
