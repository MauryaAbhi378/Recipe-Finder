import React, { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import RecipeCard from "../component/RecipeCard";

const Favourites = () => {
  const { favourites } = useContext(RecipeContext);
  return (
    <div className="flex justify-center flex-col items-center">
      <h1>Favourites</h1>
      <div className="flex mt-8 w-3/4">
        {favourites.map((recipe, id) => {
          return <RecipeCard key={id} recipe={recipe} />;
        })}
      </div>
    </div>
  );
};

export default Favourites;
