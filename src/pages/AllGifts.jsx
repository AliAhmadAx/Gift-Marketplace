import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import TotalServices from "../TotalService";
import SearchSkeleton from "../components/skeleton/searchSkeleton";
import SearchResults from "../components/SearchResults/SearchResults";
import Pagination from "../components/Pagination/Pagination";
import axios from "axios";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import { BsFilter } from "react-icons/bs";
import { IoIosGitCompare } from "react-icons/io";
import { Tooltip } from "react-tooltip";
import { AiOutlineClear } from "react-icons/ai";
import { useContext } from "react";
import { ThemeContext } from "../App";
import AllProductsFilters from "../components/Filters/AllProductsFilters";

const products = [
  {
    id: 1,
    name: "KOELCELLEN",
    description:
      "Diverse formaten of op maat gemaakt. Professional montage/installatie!",
    currency: "$",
    price: 300,
    imageLink:
      "https://cdn.webshopapp.com/shops/291748/files/391635489/1000x1000x2/diamond-koelcel-laag-model-met-motor-058m3-2c-8c-i.webp",
    rating: 5,
  },
  {
    id: 2,
    name: "Demo",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi nulla fugiat voluptates praesentium, asperiores saepe aspernatur ratione nobis earum velit inventore sequi expedita unde maxime, explicabo repellat accusantium quo sed exercitationem, quas itaque magnam veniam dolorem reiciendis? Natus labore, nam, voluptas sed quidem libero dolores suscipit possimus aperiam cumque repudiandae",
    currency: "$",
    price: 300,
    imageLink:
      "https://images.unsplash.com/photo-1719150016704-270c5a0deee4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
  },
  {
    id: 3,
    name: "Demo",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi nulla fugiat voluptates praesentium, asperiores saepe aspernatur ratione nobis earum velit inventore sequi expedita unde maxime, explicabo repellat accusantium quo sed exercitationem, quas itaque magnam veniam dolorem reiciendis? Natus labore, nam, voluptas sed quidem libero dolores suscipit possimus aperiam cumque repudiandae",
    currency: "$",
    price: 300,
    imageLink:
      "https://images.unsplash.com/photo-1719150016704-270c5a0deee4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
  },
  {
    id: 4,
    name: "Demo",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi nulla fugiat voluptates praesentium, asperiores saepe aspernatur ratione nobis earum velit inventore sequi expedita unde maxime, explicabo repellat accusantium quo sed exercitationem, quas itaque magnam veniam dolorem reiciendis? Natus labore, nam, voluptas sed quidem libero dolores suscipit possimus aperiam cumque repudiandae",
    currency: "$",
    price: 300,
    imageLink:
      "https://images.unsplash.com/photo-1719150016704-270c5a0deee4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
  },
  {
    id: 5,
    name: "Demo",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi nulla fugiat voluptates praesentium, asperiores saepe aspernatur ratione nobis earum velit inventore sequi expedita unde maxime, explicabo repellat accusantium quo sed exercitationem, quas itaque magnam veniam dolorem reiciendis? Natus labore, nam, voluptas sed quidem libero dolores suscipit possimus aperiam cumque repudiandae",
    currency: "$",
    price: 300,
    imageLink:
      "https://images.unsplash.com/photo-1719150016704-270c5a0deee4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
  },
  {
    id: 6,
    name: "Demo",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi nulla fugiat voluptates praesentium, asperiores saepe aspernatur ratione nobis earum velit inventore sequi expedita unde maxime, explicabo repellat accusantium quo sed exercitationem, quas itaque magnam veniam dolorem reiciendis? Natus labore, nam, voluptas sed quidem libero dolores suscipit possimus aperiam cumque repudiandae",
    currency: "$",
    price: 300,
    imageLink:
      "https://images.unsplash.com/photo-1719150016704-270c5a0deee4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
  },
];

const AllGifts = () => {
  const params = useParams();

  const [CategoryFilter, setCategoryFilter] = useState([]);
  const [TypeFilter, setTypeFilter] = useState([]);
  const [PriceFilter, setPriceFilter] = useState("");

  const [relatedKeywords, setRelatedKeywords] = useState([]);

  const dropdownRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({});
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [loader, setLoader] = useState(false);
  const [totalFavorites, setTotalFavorites] = useState(0);
  // const [filterSelected, setFilterSelected] = useState(10);
  const [totalRecords, setTotalRecords] = useState("");
  const [record, setRecord] = useState(0);
  const [NumberOfRecordsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [goto, setGoto] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const [data, setData] = useState("");
  const [nextWord, setNextWord] = useState("");
  const [favoriteList, setFavoriteList] = useState([]);

  const [collapseMenu, setCollapseMenu] = useState(true);

  useEffect(() => {
    const searchParams = decodeURIComponent(params.query || "");
    setInputValue(searchParams);

    if (searchParams) {
      AllProducts(searchParams);
    }
  }, [params.query]);

  useEffect(() => {
    if (
      inputValue ||
      Object.values(selectedFilters).some(Boolean) ||
      currentPage !== 1
    ) {
      AllProducts(inputValue);
    }
  }, [selectedFilters, CategoryFilter, PriceFilter, currentPage]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const AllProducts = async (query) => {
    setLoader(true);

    const data = JSON.stringify({
      query: query,
      price: PriceFilter,
      location: selectedFilters.location,
      occasion: selectedFilters.occasion,
      category: CategoryFilter.length === 0 ? [""] : CategoryFilter,
    });

    TotalServices.AllProducts(
      NumberOfRecordsPerPage,
      (currentPage - 1) * NumberOfRecordsPerPage,
      data
    )
      .then((response) => {
        if (response.status === 200) {
          setRelatedKeywords(response.data.related_keywords);
          setData(response.data.response.hits.hits);
          setTotalPages(response.data.pages);
          setTotalRecords(response.data.total_records);
          setLoader(false);
        }
      })
      .catch((error) => {
        console.log(error);
        setLoader(false);
      });
  };

  const [totalCount, setTotalCount] = useState(false);

  const getFavoriteProducts = async () => {
    const token = JSON.parse(localStorage.getItem("UserAuth")).access_token;

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://192.168.18.72:5002/FavouriteProducts/10/0",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };

    axios
      .request(config)
      .then((response) => {
        setTotalFavorites(response.data.total_favorites);
        toast.success(response.data.total_favorites);
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 403) {
          // 403 error indicates the access token has expired
          refreshToken(); // Call the function to refresh the token
        } else {
          console.log(error);
        }
      });
  };
  useEffect(() => {
    let data = localStorage.getItem("favorites");
    if (data) {
      setFavoriteList(JSON?.parse(data));
    }
  }, []);
  useEffect(() => {
    if (totalCount) getFavoriteProducts();
  }, [totalCount]);

  const refreshToken = async () => {
    const refreshToken = JSON.parse(
      localStorage.getItem("UserAuth")
    ).refresh_token;
    // let data = JSON.stringify({
    //   refresh_token: refreshToken,
    // });

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://192.168.18.72:5002/UserRefreshtoken",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + refreshToken,
      },
    };
    try {
      const response = await axios.request(config);
      const newToken = response.data.access_token;
      // Update the access token in localStorage
      const updatedToken = {
        access_token: newToken,
        refresh_token: refreshToken,
      };
      localStorage.setItem("UserAuth", JSON.stringify(updatedToken));
      // Call the getFavoriteProducts function again with the new access token
      favoriteList();
    } catch (error) {
      console.log(error);
      // Handle error during token refresh
    }
  };

  const handleApplyFilters = (filterName, selectedLabel) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: selectedLabel,
    }));
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="w-full lg:mt-20 flex flex-col items-center">
      <Helmet>
        <title>Gift_Market Place | Search Results</title>
      </Helmet>

      <div className="w-full px-5 lg:px-10 xl:px-20 flex flex-col lg:flex-row">
        {/* LHS  */}
        <div
          className={`bg-red-200/50 z-10 lg:z-0 backdrop-blur-lg lg:bg-transparent overflow-auto lg:overflow-visible transition-all duration-500 ease-in-out fixed left-0 top-0 lg:static ${
            collapseMenu === true
              ? "w-0 lg:w-1/4 py-10 pl-0 pr-0 overflow-hidden lg:pl-20 -translate-x-[1000px] lg:translate-x-0"
              : "w-2/3 lg:w-1/4 py-10 pl-5 lg:pl-20 pr-5 -translate-x-[0px]"
          } flex flex-col justify-start h-full `}
        >
          <div
            onClick={() => setCollapseMenu(!collapseMenu)}
            className="w-full flex lg:hidden justify-end -mt-10 font-bold text-lg py-5"
          >
            x
          </div>

          <div className="w-full">
            <AllProductsFilters
              onApplyFilters={handleApplyFilters}
              CategoryFilter={CategoryFilter}
              setCategoryFilter={setCategoryFilter}
              TypeFilter={TypeFilter}
              setTypeFilter={setTypeFilter}
              PriceFilter={PriceFilter}
              setPriceFilter={setPriceFilter}
              AllProducts={AllProducts}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>

        {/* RHS */}
        <div className="w-full lg:w-3/4 flex flex-col pt-6 lg:pl-5 lg:pr-10">
          <button
            onClick={() => setCollapseMenu(!collapseMenu)}
            className="mb-10 text-lg py-2 border border-black rounded-lg flex lg:hidden items-center justify-center"
          >
            Filters <BsFilter className="cursor-pointer text-lg ml-2" />{" "}
          </button>
          {/* {!loader ? (
            <>
              <SearchSkeleton />
            </>
          ) :  */}
          {products && products.length > 0 ? (
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {products.map((item) => (
                <div key={item.id}>
                  <SearchResults
                    item={item}
                    image={item.imageLink}
                    favoriteList={favoriteList}
                    setFavoriteList={setFavoriteList}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div
              style={{
                margin: 20,
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1 className="text-black bg-[#FFFCC7] m-auto font-medium rounded-lg text-sm px-4 py-2 text-center">
                No Data to Display
              </h1>
            </div>
          )}

          {/* <div className="font-bold text-2xl mt-5">Related Keywords</div> */}

          <div className="w-full mt-5 grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3 gap-4 overflow-hidden">
            {relatedKeywords?.map((keyword, index) => (
              <div className=" cursor-pointer" key={keyword.id}>
                <Link
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                  to={`/search/${keyword.name}`}
                >
                  <div className="yellow-color-text font-semibold hover:underline flex rounded-lg items-center justify-center m-2">
                    {keyword.name}
                  </div>
                </Link>
              </div>
            ))}
          </div>
          {data.length <= 0 ? null : (
            <div className="w-full text-center flex justify-center items-center my-10">
              <Pagination
                totalRecords={totalRecords}
                setRecord={setRecord}
                record={record}
                NumberOfRecordsPerPage={NumberOfRecordsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                setGoto={setGoto}
                goto={goto}
                totalPages={totalPages}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllGifts;
