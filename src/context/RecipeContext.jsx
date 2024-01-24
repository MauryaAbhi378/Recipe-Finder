import { createContext, useContext, useState } from "react";

export const FavoriteContext = createContext();

export const useFavorite = () => {
  return useContext(FavoriteContext);
};

export const FavoriteProvider = ({ children }) => {
  const [favorite, setFavorite] = useState([]);
  const addToFavorite = (recipe) => {
    setFavorite((prev) => [...prev, recipe]);
  };

  const removeFromFavorite = (id) => {
    setFavorite((prev) => prev.filter((prevFav) => prevFav.id !== id));
  };

  const isFavorite = (id) => {
    return favorite.includes(id)
  };

  return (
    <FavoriteContext.Provider
      value={{ favorite, addToFavorite, removeFromFavorite, isFavorite}}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
