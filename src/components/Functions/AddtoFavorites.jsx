import TotalServices from "../../TotalService";

const addFavorite = async (
  id,
  setFavoriteList,
  favoriteList,
  setFavorite,
  favorite
) => {
  console.log(id);
  const token = JSON.parse(localStorage.getItem("UserAuth"));
  let favorites = localStorage.getItem("favorites");
  if (token) {
    let favList = JSON.parse(favorites);
    try {
      let idList = id ? [id] : favList;
      const response = await TotalServices.addToFavoriteList({
        product_id: idList,
      });
      console.log(response);
      // if (response.status === 200) {
      //   // toast.success("Products added from favorites");
      localAddFavorite(
        id,
        favorites,
        setFavoriteList,
        favoriteList,
        setFavorite,
        favorite
      );
      //   // navigate("/favorite-gift");
      // }
    } catch (error) {
      console.log(error);
    }
  } else {
    localAddFavorite(
      id,
      favorites,
      setFavoriteList,
      favoriteList,
      setFavorite,
      favorite
    );
  }
};
const localAddFavorite = (
  id,
  favorites,
  setFavoriteList,
  favoriteList,
  setFavorite,
  favorite
) => {
  setFavoriteList([...favoriteList, id]);
  if (favorites) {
    let fav = JSON.parse(favorites);
    fav.push(id);
    console.log(favorites, fav);
    localStorage.setItem("favorites", JSON.stringify(fav));
    setFavorite(!favorite);
  } else {
    localStorage.setItem("favorites", JSON.stringify([id]));
    setFavorite(!favorite);
  }
};
export default addFavorite;
