import React, { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import TotalServices from "../../TotalService";
import { useParams } from "react-router";
import { AiOutlineClose } from "react-icons/ai";
import { useContext } from "react";
import { ThemeContext } from "../../App";
const SearchBar = ({
  placeholder,
  sendDataToBackend,
  inputValue,
  setInputValue,
  suggestions,
  setSuggestions,
  elementId,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const { query } = useParams();

  const { test, setTest } = useContext(ThemeContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue) {
      sendDataToBackend(inputValue, suggestions[index].id);
    }
    setIsDropdownOpen(false);
  };

  const handleInputChange = (event) => {
    console.log(test);
    setTest([]);
    const value = event.target.value;
    setInputValue(value);
    index !== 0 && setIndex(0);
    if (value === "") {
      setIsDropdownOpen(false);
      setSuggestions([]);

      // setNextWord("");
    } else {
      setIsDropdownOpen(true);
      fetchSuggestions(value);
      // setNextWord(generateNextWord(value.toLowerCase()));
    }
  };

  const fetchSuggestions = async (query) => {
    const items = [];
    let data = JSON.stringify({
      query: query,
      category: "",
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

  const handleSelectSuggestion = (suggestion, id) => {
    setInputValue(suggestion);
    sendDataToBackend(suggestion, id);

    setSuggestions([]);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      console.log("jun", event.key, suggestions[0].name);
      // Perform the desired action when Enter key is pressed

      document
        .getElementById(elementId ? elementId : "suggestion")
        .classList.add("hidden");

      setInputValue(suggestions[0].name);
      sendDataToBackend(suggestions[0].name, suggestions[0].id);
      setIsDropdownOpen(false);
    } else if (event.keyCode === 40) {
      event.preventDefault();
      index > suggestions.length ? setIndex(0) : setIndex(index + 1);
      console.log("down arro");
    }
  };
  useEffect(() => {
    if (suggestions.length > 1 && index < suggestions.length) {
      document.getElementById(elementId)?.classList?.add("hidden");
      setInputValue(suggestions[index]?.name);
    }
  }, [index]);
  useEffect(() => {
    setInputValue(query);
  }, [query]);

  return (
    <>
      <div className="w-full relative">
        <form
          className="w-full"
          onSubmit={(e) => {
            handleSubmit(e);
            setTest([]);
          }}
          autocomplete="on"
        >
          <div className="w-full relative flex items-center">
            <input
              autocomplete="on"
              placeholder={placeholder}
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyPress}
              className="w-full py-2 rounded-l-md pl-4 pr-20 bg-gray-200"
            />
            {suggestions.length > 2 &&
              inputValue.length > 4 &&
              inputValue.length < 10 && (
                <label
                  id={elementId ? elementId : "suggestion"}
                  className="overflow-hidden absolute left-20 text-gray-400 p-2.5 top-0"
                  htmlFor=""
                >
                  {suggestions[0].name?.substring(0, 40)}.....
                </label>
              )}

            <AiOutlineClose
              onClick={() => {
                setInputValue("");
                setSuggestions([]);
              }}
              className={`absolute right-16 top-[13px] ${
                suggestions.length === 0 && inputValue === ""
                  ? "hidden"
                  : "block"
              } cursor-pointer hover:text-gray-400`}
            />

            <div
              className=" absolute text-white cursor-pointer rounded-r-md right-0 px-4 py-2.5 yellow-color"
              onClick={(e) => handleSubmit(e)}
            >
              {/* <BiSearchAlt/> */}
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
          </div>
        </form>
        {inputValue && isDropdownOpen && (
          <ul
            className={`w-full z-40 bg-white px-2 py-2 rounded-sm border border-gray-400 shadow-lg ${
              suggestions.length == 0 ? "hidden" : "block"
            } absolute top-[42px] max-h-[40vh] overflow-y-auto`}
          >
            {suggestions.map((suggestion) => (
              <li
                key={suggestion.id}
                className="suggestion"
                onClick={() =>
                  handleSelectSuggestion(suggestion.name, suggestion.id)
                }
              >
                {suggestion.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default SearchBar;
