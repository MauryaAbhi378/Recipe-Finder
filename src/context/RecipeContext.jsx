import { createContext, useCallback, useEffect, useState } from "react";

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const apiData = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=e8c5c5401a624c799ee54f92d381b35a&query=${search}`
    );
    const data = await api.json();
    console.log(data.results);
    setRecipes(data.recipes);
    setLoading(false);
  };

  // useEffect(() => {
  //   apiData()
  // }, [search]);

  return (
    <RecipeContext.Provider
      value={{ search, setSearch, recipes, loading, apiData }}
    >
      {children}
    </RecipeContext.Provider>
  );
};
