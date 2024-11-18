import http from "./axios";

const getCategories = () => {
  return http.get("/categories");
};

const getProducts = (limit, offset, data) => {
  return http.post("/Products/" + limit + "/" + offset, data);
};

const AllProducts = (limit, offset, data) => {
  return http.post("/AllProducts/" + limit + "/" + offset, data);
};

const getProductsSuggestion = (data) => {
  return http.post("/Products", data);
};

const getFiltersData = () => {
  return http.get("/filters");
};
const login = (data) => {
  return http.post("/User", data);
};
const Logout = () => {
  return http.put("/User");
};
const SingUp = (data) => {
  return http.post("/User", data);
};
const getFavoriteList = () => {
  return http.get("/FavouriteProducts/100/0");
};

const getFavoriteListUnAuth = (data) => {
  return http.post("/FavProductsData", data);
};

const addToFavoriteList = (data) => {
  return http.post("/FavouriteProducts", data);
};

const removeFromFavoriteList = (data) => {
  return http.patch("/FavouriteProducts", data);
};

const PopularCategories = (data) => {
  return http.get("/PopularCategories", data);
};

const TrendingCategories = (data) => {
  return http.get("/TrendingCategories", data);
};

const OccassionsGifts = (data) => {
  return http.get("/OccassionsGifts", data);
};

const AlphabeticGifts = (alphabet, limit, offset, data) => {
  return http.post(
    "/AlphabeticGifts/" + alphabet + "/" + limit + "/" + offset,
    data
  );
};

const RecentSearches = (data) => {
  return http.get("/RecentSearches", data);
};

//comparison apis
const ComparisionProducts = (data) => {
  return http.post("/ComparisionProducts", data);
};
const TotalServices = {
  getCategories,
  getProducts,
  AllProducts,
  getFiltersData,
  getProductsSuggestion,
  login,
  Logout,
  addToFavoriteList,
  getFavoriteList,
  getFavoriteListUnAuth,
  removeFromFavoriteList,
  SingUp,
  // removeFavoriteProducts
  //comparison products
  ComparisionProducts,

  PopularCategories,
  TrendingCategories,
  OccassionsGifts,
  AlphabeticGifts,
  RecentSearches,
};

export default TotalServices;
