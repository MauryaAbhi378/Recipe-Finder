import React, { useContext } from "react";
import { FavoriteContext } from "../Context/RecipeContext";
import RecipeCard from "../component/RecipeCard";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";

const Favourites = () => {
  const { favorite } = useContext(FavoriteContext);
  
  return (
    <div className="flex justify-center flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Favorites</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {favorite.map((recipe, id) => {
          return (

            <RecipeCard key={id} recipe={recipe}/>
          );
        })}
      </div>
    </div>
  );
};

export default Favourites;
