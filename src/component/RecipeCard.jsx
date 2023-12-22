import React from "react";
import { SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe: { id, image, title } }) => {
  return (
    <SplideSlide>
      <div key={id} className="relative w-4/5 m-auto">
        <Link to={`/recipe/${id}`}>
          <img src={image} className="rounded-3xl" />
          <div className="flex justify-between">
            <p className="absolute bottom-4 left-0 right-0 text-center text-white font-bold">
              {title}
            </p>
            <CiHeart
              size="1.5rem"
              color="white"
              className="absolute bottom-4 right-4"
            />
          </div>
        </Link>
      </div>
    </SplideSlide>
  );
};

export default RecipeCard;
