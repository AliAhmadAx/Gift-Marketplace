import React, { useEffect, useState } from "react";

const PricingFilter = ({ PriceFilter, setPriceFilter }) => {
  const handleRadioChange = (event) => {
    setPriceFilter(event.target.value);
  };
  return (
    <div className=" w-full mb-5 max-h-[50vh] overflow-auto">
      <>
        <span className="flex mb-2 z-0 items-center space-x-2 text-left">
          <label>
            <input
              className="mr-2"
              type="radio"
              value="Low"
              checked={PriceFilter === "Low"}
              onChange={handleRadioChange}
            />
            Low
          </label>
        </span>

        <span className="flex mb-2 z-0 items-center space-x-2 text-left">
          <label>
            <input
              className="mr-2"
              type="radio"
              value="High"
              checked={PriceFilter === "High"}
              onChange={handleRadioChange}
            />
            High
          </label>
        </span>
      </>
    </div>
  );
};

export default PricingFilter;
