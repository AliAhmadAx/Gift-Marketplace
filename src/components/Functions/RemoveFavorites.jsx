import TotalServices from "../../TotalService";

const RemoveFavorite = async (id, setFavorite, favorite, setFavoriteList) => {
  const token = JSON.parse(localStorage.getItem("UserAuth"));
  if (token) {
    try {
      const response = await TotalServices.removeFromFavoriteList({
        product_id: [id],
      });
      console.log(response);
      if (response.status === 200) {
        localRemoveFavorite(id, setFavorite, favorite, setFavoriteList);

        // navigate("/favorite-gift");
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    localRemoveFavorite(id, setFavorite, favorite, setFavoriteList);
  }
};
const localRemoveFavorite = (id, setFavorite, favorite, setFavoriteList) => {
  let favorites = localStorage.getItem("favorites");
  if (favorites) {
    let fav = JSON.parse(favorites);
    let favList = fav.filter((val) => val !== id);
    setFavoriteList && setFavoriteList(favList);
    localStorage.setItem("favorites", JSON.stringify(favList));
    setFavorite(!favorite);
  }
};
export default RemoveFavorite;
