import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [isAdded, setIsAdded] = useState(false);

  const [favourites, setFavourites] = useState(() => {
    const storedFavourites = JSON.parse(localStorage.getItem("favourites"));
    return storedFavourites || [];
  });

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const addToFavourite = (id, image, title) => {
    const isAlreadyAdded = favourites.filter((item) => item.id === id);
    
    if (isAlreadyAdded) {
      removeFromFavourite(id);
    } else {
      const newFavourite = { id, image, title };
      setFavourites((prevFavourite) => [...prevFavourite, newFavourite]);
      setIsAdded(true);
      toast("Added to favourite");
    }
  };

  const removeFromFavourite = (id) => {
    setFavourites((prevFavourite) =>
      prevFavourite.filter((prev) => prev.id !== id)
    );
    setIsAdded(!isAdded);
    toast("Removed from favourites");
  };

  return (
    <RecipeContext.Provider
      value={{
        favourites,
        isAdded,
        addToFavourite,
        removeFromFavourite,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};
