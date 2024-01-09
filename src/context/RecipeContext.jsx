import { createContext, useEffect, useState } from "react";

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]); // Define recipes state
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const check = localStorage.getItem("favourite");
    if (check) {
      setFavourites(JSON.parse(check));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favourite", JSON.stringify(favourites));
  }, [favourites]);

  const addToFavourite = (id, image, title) => {
    const newFavourite = { id, image, title };
    setFavourites((prevFavourite) => [...prevFavourite, newFavourite]);
  };

  const apiData = async (searchValue) => {
    try {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=e8c5c5401a624c799ee54f92d381b35a&query=${searchValue}&number=36`
      );
      const data = await api.json();
      setRecipes(data.results); // Update recipes state with fetched data

      return data.recipes;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <RecipeContext.Provider
      value={{ recipes, apiData, addToFavourite, favourites }}
    >
      {children}
    </RecipeContext.Provider>
  );
};
