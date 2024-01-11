import { createContext, useEffect, useState } from "react";

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]); // Define recipes state
  const[isAdded, setIsAdded] = useState(false)
  const [favourites, setFavourites] = useState(() => {
    const storedFavourites = JSON.parse(localStorage.getItem("favourites"));
    return storedFavourites || [];
  });

  // useEffect(() => {
  //   const check = JSON.parse(localStorage.getItem("favourites"));
  //   if (check) {
  //     setFavourites(check);
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const addToFavourite = (id, image, title) => {
    const newFavourite = { id, image, title };
    setFavourites((prevFavourite) => [...prevFavourite, newFavourite]);
    setIsAdded(!isAdded)
  };

  const removeFromFavourite = (id) => {
    setFavourites((prevFavourite) =>
      prevFavourite.filter((prev) => prev.id !== id)
    );
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
