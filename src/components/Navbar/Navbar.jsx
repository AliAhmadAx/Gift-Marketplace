import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { ThemeContext } from "../../App";
import TotalServices from "../../TotalService";
import { toast } from "react-toastify";
import logo from "../../assets/logo/logoBlack.svg";

import SearchBar from "../SearchBar/SearchBar";
import { AiFillHeart, AiOutlineGif, AiOutlineGift } from "react-icons/ai";
import { IoIosGitCompare } from "react-icons/io";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Navbar = () => {
  const navigate = useNavigate();

  const [loader, setLoader] = useState(false);

  let location = useLocation();

  const [suggestions, setSuggestions] = useState([]);

  const [favoritesCount, setFavoriteCount] = useState();
  const [islogin, setIslogin] = useState();
  const [logoutLoader, setLogoutLoader] = useState(false);
  const [NumberOfRecordsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const { favorite, setFavorite, setLogin, login, inputValue, setInputValue } =
    useContext(ThemeContext);

  const handleLogout = async () => {
    try {
      setLogoutLoader(true);
      const response = await TotalServices.Logout();

      if (response.status === 200) {
        localStorage.removeItem("UserAuth");
        localStorage.removeItem("UserIsLogin");
        localStorage.removeItem("favorites");
        toast.success(response.data.msg);
        setLogin(!login);
        setFavorite(!favorite);
        navigate("/");
        setLogoutLoader(false);
      }
    } catch (error) {
      console.log("error ", error);
      setLogoutLoader(false);
    }
  };

  useEffect(() => {
    setIslogin(localStorage.getItem("UserIsLogin"));
  }, [login]);

  useEffect(() => {
    let data = localStorage.getItem("favorites");

    if (data) {
      let favList = JSON.parse(data);
      setFavoriteCount(favList.length);
    } else {
      setFavoriteCount(0);
    }
  }, [favorite]);

  const sendDataToBackend = async (query) => {
    setLoader(true);

    navigate(`/search/${query}`);
  };

  useEffect(() => {
    const handleBackButton = () => {
      setInputValue("");
      setSuggestions([]);
    };

    window.addEventListener("popstate", handleBackButton);

    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, []);

  return (
    <div
      className={`w-full ${
        location.pathname.includes("/login") ||
        location.pathname.includes("/signup")
          ? "hidden"
          : "block"
      }  lg:absolute lg:z-10 lg:top-0 flex justify-center lg:pt-4 pb-0 items-center`}
    >
      <nav className="overflow-hidden w-full lg:w-10/12">
        <div
          className={`flex bg-white flex-wrap justify-between items-center ${
            location.pathname.includes("/comparison-list") ? "" : "pb-16"
          } pt-2 lg:py-2 rounded-md border-2 border-gray-200 px-2 lg:px-6`}
        >
          <Link
            to={"/"}
            onClick={() => {
              setInputValue("");
              setSuggestions([]);
            }}
            className="flex items-center"
          >
            <img src={logo} className="h-5 lg:h-10 " alt="Logo" />
          </Link>

          <Tooltip id="Favorites" />
          <Tooltip id="compare" />

          <span className="w-10/12 lg:w-1/4 absolute top-[80px] md:top-[60px] left-[8%] lg:top-6 lg:left-[22%] flex justify-center">
            {location.pathname.includes("/comparison-list") ? null : (
              <SearchBar
                inputValue={inputValue}
                setInputValue={setInputValue}
                suggestions={suggestions}
                setSuggestions={setSuggestions}
                placeholder={"Search Keyword..."}
                sendDataToBackend={sendDataToBackend}
              />
            )}
          </span>

          <div className="w-full md:w-1/2 lg:w-fit flex justify-around items-center space-x-1 lg:space-x-3">
            <NavLink
              end
              className={({ isActive }) =>
                `${
                  isActive === true
                    ? "yellow-color-text font-bold px-2"
                    : "font-semibold hover:text-yellow-400 px-2 rounded-lg"
                }`
              }
              to={"/about"}
              onClick={() => {
                setInputValue("");
                setSuggestions([]);
              }}
            >
              About
            </NavLink>

            <NavLink
              end
              className={({ isActive }) =>
                `${
                  isActive === true
                    ? "yellow-color-text font-bold px-2"
                    : "font-semibold hover:text-yellow-400 px-2 rounded-lg"
                }`
              }
              onClick={() => {
                setInputValue("");
                setSuggestions([]);
              }}
              to={"/contact-us"}
            >
              Contact
            </NavLink>

            <NavLink
              end
              className={({ isActive }) =>
                `${
                  isActive === true
                    ? "yellow-color-text font-bold flex items-center"
                    : "font-semibold hover:text-yellow-400 rounded-lg flex items-center"
                }`
              }
              onClick={() => {
                setInputValue("");
                setSuggestions([]);
              }}
              to={"/all-gifts"}
            >
              All <AiOutlineGift className="ml-1" />
            </NavLink>

            <button
              type="button"
              data-tooltip-id="Favorites"
              data-tooltip-content="Favorites"
              className="relative"
              onClick={() => {
                setInputValue("");
                setSuggestions([]);
                navigate("/favorite-gift");
              }}
            >
              <AiFillHeart className="text-2xl lg:text-3xl text-red-500" />

              <p className="absolute rounded-full border border-green-400 font-semibold flex justify-center items-center bg-yellow-100 w-5 h-5 -top-[10px] text-gray-400 -right-1 text-[10px]">
                {favoritesCount}
              </p>
            </button>

            <NavLink
              end
              data-tooltip-id="compare"
              data-tooltip-content="Compare"
              to={"/comparison-list"}
              className={({ isActive }) =>
                `text-2xl pl-2 lg:text-2xl ${
                  isActive === true ? "text-orange-300" : "text-gray-900"
                } cursor-pointer`
              }
              onClick={() => {
                setInputValue("");
                setSuggestions([]);
              }}
            >
              <IoIosGitCompare />
            </NavLink>
            {islogin === "true" && (
              <button
                type="button"
                onClick={handleLogout}
                className="text-black ml-3  focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 "
              >
                Logout
              </button>
            )}
            {islogin !== "true" && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/signup");
                }}
                className="text-white yellow-color rounded-lg hover:bg-[#e7ab3cc1] focus:outline-none font-medium text-sm px-4 py-2 text-center mr-3 md:mr-0 "
              >
                Register
              </button>
            )}
            {islogin !== "true" && (
              <button
                type="button"
                className="text-black focus:outline-none font-medium rounded-lg text-sm py-2 text-center mx-3 md:mr-0 "
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/login");
                }}
              >
                Login
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
