import React, { useContext, useEffect, useState } from "react";
import Filter from "./Filter";
import TotalServices from "../../TotalService";
import PricingFilter from "./PricingFilter";
import TypesFilter from "./TypesFilter";
import { Tooltip } from "react-tooltip";
import { AiOutlineClear } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import { ThemeContext } from "../../App";

const Filters = ({
  setCategoryFilter,
  CategoryFilter,
  TypeFilter,
  setTypeFilter,
  PriceFilter,
  setPriceFilter,
  sendDataToBackend,
}) => {
  const { query } = useParams();

  const { test, setTest } = useContext(ThemeContext);

  const [categoriesList, setCategoriesList] = useState([]);
  const [priceList, setPriceList] = useState([]);
  const [typeList, setTypeList] = useState([]);
  const [occasionList, setOccasionList] = useState([]);

  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [selectedCheckboxesType, setSelectedCheckboxesType] = useState([]);

  let navigate = useNavigate();

  const handleClearCheckboxes = () => {
    setSelectedCheckboxes([]);
    setSelectedCheckboxesType([]);
    setPriceFilter("");
  };

  const getFilters = (query) => {
    const data = JSON.stringify({
      query: query,
    });

    TotalServices.getFiltersData(data)
      .then((response) => {
        if (response.status === 200) {
          setCategoriesList(response.data.main_category);
          setPriceList(response.data.price);
          setTypeList(response.data.type);
          setOccasionList(response.data.occasion);
        }
      })
      .catch((error) => {
        console.log(error);
        setLoader(false);
      });
  };

  useEffect(() => {
    getFilters();
  }, []);

  useEffect(() => {
    console.log(test);
    if (
      test.length > 0 &&
      selectedCheckboxes.length < 1 &&
      query == undefined
    ) {
      setSelectedCheckboxes(test);
      sendDataToBackend([""], [test]);
    } else if (query == undefined) {
      sendDataToBackend([""]);
      setTest([]);
    } else if (selectedCheckboxes !== test || test === "") {
      setCategoryFilter([""]);
      setTest("");
    }
  }, []);

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
        options={categoriesList}
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

export default Filters;
