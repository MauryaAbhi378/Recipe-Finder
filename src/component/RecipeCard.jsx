import React, { useContext, useState } from "react";
import { SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FavoriteContext } from "../Context/FavoriteContext";

const RecipeCard = ({ recipe }) => {
  const { addToFavorite, removeFromFavorite, isFavorite } =
    useContext(FavoriteContext);
  const [isClicked, setIsClicked] = useState(false);
  
  const handleClick = () => {
    if (!isFavorite(recipe.id)) {
      addToFavorite(recipe);
      toast("Added To Favorite");
      setIsClicked(!isClicked);
    } else {
      removeFromFavorite(recipe.id);
      toast("Remove from Favorite");
    }
  };

  return (
    <SplideSlide>
      <div key={recipe.id} className="relative w-4/5 m-auto">
        <Link
          to={`/recipe/${recipe.id}`}
          className="block rounded-lg overflow-hidden shadow-md"
          recipe={recipe}
        >
          <img
            src={recipe.image}
            className="w-full h-56 object-cover"
            alt={recipe.title}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-2">
            <p className="font-bold">{recipe.title}</p>
          </div>
        </Link>

        <div>
          <CiHeart
            size="1.5rem"
            color={`${isFavorite(recipe.id) ? "red" : "white"}`}
            className={`absolute top-2 right-2 cursor-pointer`}
            onClick={handleClick}
          />
        </div>
      </div>
    </SplideSlide>
  );
};

export default RecipeCard;
