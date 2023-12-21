import React from "react";
import RecipeCard from "../component/RecipeCard";
import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";

const Searched = () => {
  const { recipes } = useContext(RecipeContext);
  return (
    <div className="w-3/5 m-auto mt-10 grid grid-cols-3 gap-12">
      {recipes.map((recipe) => {
        return <RecipeCard recipe={recipe} />;
      })}
    </div>
  );
};

export default Searched;
