import axios from "axios";
import ApiURL from "./config/config";
import { toast } from "react-toastify";

const API = axios.create({
  baseURL: ApiURL,
  headers: {
    "Content-type": " application/json",
  },
});

// request interceptor for settting the two headers refresh & access tokens
API.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem("UserAuth"));

    if (
      token &&
      config.url !== "/UserRefreshtoken" &&
      config.url !== "/User" &&
      config.url !== "/FavProductsData" &&
      config.url !== "/signUp" &&
      config.url !== "/favorite-gift" &&
      config.url !== "/privacy-policy" &&
      config.url !== "/comparison-list" &&
      config.url !== "/product-details" &&
      config.url !== "/search" &&
      config.url !== "/Products" &&
      !config.url.includes("/AllProducts") &&
      config.url !== "/filters" &&
      config.url !== "/RecentSearches" &&
      config.url !== "/PopularCategories" &&
      config.url !== "/TrendingCategories" &&
      config.url !== "/OccassionsGifts" &&
      config.url !== "/ComparisionProducts"
    ) {
      config.headers["Authorization"] = "Bearer " + token.access_token;
    } else if (
      config.url !== "/FavProductsData" &&
      config.url !== "/User" &&
      config.url !== "/signUp" &&
      config.url !== "/favorite-gift" &&
      config.url !== "/filters" &&
      config.url !== "/privacy-policy" &&
      config.url !== "/comparison-list" &&
      config.url !== "/product-details" &&
      !config.url.includes("/Products/") &&
      config.url !== "/Products" &&
      !config.url.includes("/AllProducts") &&
      config.url !== "/ComparisionProducts" &&
      config.url !== "/RecentSearches" &&
      config.url !== "/PopularCategories" &&
      config.url !== "/TrendingCategories" &&
      config.url !== "/OccassionsGifts" &&
      config.url !== "/search"
    ) {
      config.headers["Authorization"] = "Bearer " + token.refresh_token;
    } else if (config.url === "/User" && config.method !== "post") {
      config.headers["Authorization"] = "Bearer " + token.access_token;
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// response interceptor, when the backend throws error 403 for token expire it call the refresh token API and updates the token
API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const originalRequest = error.config;
    console.log(error, " Original Request");
    if (error.response.status === 500) {
      toast.warn("An error has occurred please try again");
    } else if (error.response.status !== 403) {
      toast.error(error.response.data.message);
    } else if (error.response.status === 403) {
      return API.get("/UserRefreshtoken").then((res) => {
        if (res.status === 200) {
          originalRequest._retry = true;
          let items = {
            access_token: res.data.access_token,
            refresh_token: res.data.refresh_token,
          };
          localStorage.setItem("UserAuth", JSON.stringify(items));
          // Navigate("/admin-dashboard");
          API.defaults.headers.common["Authorization"] =
            "Bearer " + res.data.access_token;
          originalRequest.headers["Authorization"] =
            "Bearer " + res.data.access_token;
          // call failed request due to token expire
          return axios(originalRequest);
        }
      });
    }
    Promise.reject(error);
  }
);

export default API;
