import { createContext, useState } from "react";

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]); // Define recipes state

  const apiData = async (searchValue) => {
    try {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=7561c94016cf478cbf0abe03c8c6cf5c&query=${searchValue}`
      );
      const data = await api.json();
      console.log(data.results)
      setRecipes(data.results); // Update recipes state with fetched data

      return data.recipes;
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
