import React, { useContext, useState } from "react";
import { SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { RecipeContext } from "../context/RecipeContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RecipeCard = ({ recipe: { id, image, title } }) => {
  const { addToFavourite, removeFromFavourite, isAdded } = useContext(RecipeContext);

  const[isClicked, setIsClicked] = useState(false)
  
  // const notify = () => {
  //   toast("Added to favourite")
  // }

  const handleClick = () => {
    // notify()
    addToFavourite(id, image, title)
    setIsClicked(!isClicked)
    isAdded ? addToFavourite(id, image, title) : removeFromFavourite(id)
  }
  return (
    <SplideSlide>
      <div key={id} className="relative w-4/5 m-auto">
        <Link to={`/recipe/${id}`}>
          <img src={image} className="rounded-3xl" />
          <div className="flex justify-between">
            <p className="absolute bottom-4 left-0 right-0 text-center text-blue-300 font-bold">
              {title}
            </p>
          </div>
        </Link>
        <div>
          <CiHeart
            size="1.5rem"
            color={`${isClicked ? "red" : "white"}`}
            className={`absolute bottom-4 right-4 cursor-pointer`}
            onClick={handleClick}
          />
        <ToastContainer/>
        </div>
      </div>
    </SplideSlide>
  );
};

export default RecipeCard;
