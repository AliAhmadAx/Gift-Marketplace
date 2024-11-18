import React, { useContext, useEffect, useState } from "react";
import Filter from "./Filter";
import TotalServices from "../../TotalService";
import PricingFilter from "./PricingFilter";
import TypesFilter from "./TypesFilter";
import { Tooltip } from "react-tooltip";
import { AiOutlineClear } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import { ThemeContext } from "../../App";

const AllProductsFilters = ({
  setCategoryFilter,
  CategoryFilter,
  PriceFilter,
  setPriceFilter,
  AllProducts,
  currentPage,
  setCurrentPage,
}) => {
  const { query } = useParams();

  const { test, setTest } = useContext(ThemeContext);

  const categories = ["Books", "Toys", "Furniture", "Clothes", "Electronics"];

  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

  let navigate = useNavigate();

  const handleClearCheckboxes = () => {
    setSelectedCheckboxes([]);
    setPriceFilter("");
  };

  const getFilters = (query) => {
    const data = JSON.stringify({
      query: query,
    });

    TotalServices.getFiltersData(data)
      .then((response) => {
        if (response.status === 200) {
          setCurrentPage(1);
        }
      })
      .catch((error) => {
        console.log(error);
        setLoader(false);
      });
  };

  useEffect(() => {
    getFilters();
  }, [CategoryFilter]);

  useEffect(() => {
    if (
      test.length > 0 &&
      selectedCheckboxes.length < 1 &&
      query == undefined
    ) {
      setSelectedCheckboxes(test);
      AllProducts([""], [test]);
    } else if (query == undefined) {
      AllProducts([""]);
      setTest([]);
    }
  }, [CategoryFilter, PriceFilter, currentPage]);

  return (
    <div className="w-full flex flex-col flex-wrap justify-evenly mt-14 mb-4">
      <label className="w-full flex font-bold" htmlFor="categories">
        Categories
      </label>

      <div className="absolute top-14 lg:top-9 w-full flex space-x-3">
        <button
          data-tooltip-id="compare2"
          data-tooltip-content="Compare"
          onClick={() => navigate("/comparison-list")}
          className="py-3.5 px-3.5 w-7/12 lg:w-6/12 shadow-lg hover:-translate-y-2 duration-300 hover:scale-x-105 font-semibold rounded-lg bg-gray-900 yellow-color-text"
        >
          Compare
        </button>

        <button
          onClick={handleClearCheckboxes}
          data-tooltip-id="clear"
          data-tooltip-content="Clear All Filters"
          className=" py-3.5 px-3.5 shadow-lg hover:-translate-y-2 duration-300 hover:scale-x-105 font-semibold rounded-lg bg-gray-900 yellow-color-text"
        >
          <AiOutlineClear />
        </button>

        <Tooltip id="clear" />
      </div>

      <Filter
        options={categories}
        CategoryFilter={CategoryFilter}
        setCategoryFilter={setCategoryFilter}
        setPriceFilter={setPriceFilter}
        selectedCheckboxes={selectedCheckboxes}
        setSelectedCheckboxes={setSelectedCheckboxes}
        handleClearCheckboxes={handleClearCheckboxes}
        placeholder={"Categories"}
      />

      <label className="w-full flex font-bold" htmlFor="Pricing">
        Pricing
      </label>

      <PricingFilter
        PriceFilter={PriceFilter}
        setPriceFilter={setPriceFilter}
      />
    </div>
  );
};

export default AllProductsFilters;
