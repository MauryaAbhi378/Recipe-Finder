import { createContext, useState } from "react";

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]); // Define recipes state

  const apiData = async (searchValue) => {
    try {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=f3b8213250e04452abd141b9b731f2c4&query=${searchValue}`
      );
      const data = await api.json();
      setRecipes(data.results); // Update recipes state with fetched data
      console.log(recipes)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <RecipeContext.Provider value={{ recipes, apiData }}>
      {children}
    </RecipeContext.Provider>
  );
};
