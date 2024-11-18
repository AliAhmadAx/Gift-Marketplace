import React, { useState } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";
import TotalServices from "../TotalService";
import ComparisonCards from "../components/GiftCards/ComparisonCards";
import { Helmet } from "react-helmet";

const ComparisonList = ({ elementId }) => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [loader, setLoader] = useState(false);

  const [comparisonData, setComparisonData] = useState([]);

  const executeOnClick = (isExpanded) => {
    console.log(isExpanded);
  };

  const fetchSuggestions = async (query) => {
    const items = [];
    let data = JSON.stringify({
      query: query,
    });
    // setTimeout(() => {
    TotalServices.getProductsSuggestion(data)
      .then((response) => {
        if (response.status === 200) {
          response.data.map((obj) => {
            items.push({ id: obj.id, name: obj.name });
          });
          setSuggestions(items);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    // }, 1000);
  };

  const sendDataToBackend = async (query, id) => {
    setLoader(true);

    TotalServices.ComparisionProducts({ item_ids: id })
      .then((response) => {
        // console.log(response.data.response.hits, "API Response");
        if (response.status === 200) {
          console.log(response);
          // setComparisonData(response.data.response.hits.hits[0]);

          setComparisonData(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
        setLoader(false);
      });
  };

  return (
    <div className="w-full px-5">
      <Helmet>
        <title>Gift_Market Place | Comparison</title>
      </Helmet>
      <div className="px-3 mt-5 lg:mt-0">
        <div className="">
          <SearchBar
            elementId={elementId}
            sendDataToBackend={sendDataToBackend}
            placeholder={"Search Keyword..."}
            suggestions={suggestions}
            setSuggestions={setSuggestions}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
        </div>

        <>
          <div className="">
            {console.log(comparisonData)}
            {comparisonData.length >= 1 && (
              <ComparisonCards cardData={comparisonData[0]} />
            )}
          </div>
        </>
      </div>
    </div>
  );
};

export default ComparisonList;
