import React, { useContext, useState } from "react";
import { SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { RecipeContext } from "../context/RecipeContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RecipeCard = ({ recipe: { id, image, title } }) => {
  const { addToFavourite, removeFromFavourite, isAdded } =
    useContext(RecipeContext);

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    isAdded === false
      ? addToFavourite(id, image, title)
      : removeFromFavourite(id);
    setIsClicked(!isClicked);
  };

  return (
    <SplideSlide>
      <div key={id} className="relative w-4/5 m-auto">
        <Link
          to={`/recipe/${id}`}
          className="block rounded-lg overflow-hidden shadow-md"
        >
          <img src={image} className="w-full h-56 object-cover" alt={title} />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-2">
            <p className="font-bold">{title}</p>
          </div>
        </Link>

        <div>
          <CiHeart
            size="1.5rem"
            color={`${isClicked ? "red" : "white"}`}
            className={`absolute top-2 right-2 cursor-pointer`}
            onClick={handleClick}
          />
          <ToastContainer />
        </div>
      </div>
    </SplideSlide>
  );
};

export default RecipeCard;
