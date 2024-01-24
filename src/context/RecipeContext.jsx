import { createContext, useContext, useEffect, useState } from "react";

export const FavoriteContext = createContext();

export const useFavorite = () => {
  return useContext(FavoriteContext);
};

export const FavoriteProvider = ({ children }) => {
  const [favorite, setFavorite] = useState([]);
  
//   useEffect(() => {
//     let check = localStorage.getItem("favorite")
//     if(check) {
//         setFavorite(JSON.parse(check))
//     }
//   }, [])

//   useEffect(() => {
//     localStorage.setItem("favorite", JSON.stringify(favorite))
//   }, [favorite])

  const addToFavorite = (recipe) => {
    setFavorite((prev) => [...prev, recipe]);
  };

  const removeFromFavorite = (id) => {
    setFavorite((prev) => prev.filter((prevFav) => prevFav.id !== id));
  };

  const isFavorite = (id) => {
    return favorite.find((val) => {
      return val.id === id;
    });
  };

  return (
    <FavoriteContext.Provider
      value={{ favorite, setFavorite, addToFavorite, removeFromFavorite, isFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
