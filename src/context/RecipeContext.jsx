import { createContext, useContext } from "react";

export const RecipeContext = createContext({
  
});

export const useRecipe = () => {
  return useContext(RecipeContext);
};

export const RecipeProvider = RecipeContext.Provider;
