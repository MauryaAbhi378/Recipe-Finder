import { createContext, useCallback, useEffect, useState } from "react";

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]); // Define recipes state

  const apiData = useCallback(async (searchValue) => {
    try {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=f3b8213250e04452abd141b9b731f2c4&query=${searchValue}`
      );
      const data = await api.json();
      setRecipes(data.results); // Update recipes state with fetched data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  useEffect(() => {
    
      apiData(search);
    
  }, [search, apiData]);

  return (
    <RecipeContext.Provider value={{ search, setSearch, recipes, apiData }}>
      {children}
    </RecipeContext.Provider>
  );
};
