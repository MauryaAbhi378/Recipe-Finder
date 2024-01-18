import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]); // Define recipes state
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

  const apiData = async (searchValue) => {
    // const apiKey = process.env.API_KEY
    try {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=e8c5c5401a624c799ee54f92d381b35a&query=${searchValue}&number=36`
      );
      const data = await api.json();
      setRecipes(data.results); // Update recipes state with fetched data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <RecipeContext.Provider
      value={{
        recipes,
        favourites,
        isAdded,
        apiData,
        addToFavourite,
        removeFromFavourite,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};
