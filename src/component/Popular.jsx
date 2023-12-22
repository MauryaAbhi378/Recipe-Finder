import React, { useEffect, useState } from "react";
import { Splide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import RecipeCard from "./RecipeCard";

const Popular = () => {
  const [popular, setPopular] = useState([]);
  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=7561c94016cf478cbf0abe03c8c6cf5c&number=9`
    );
    const data = await api.json();

    setPopular(data.recipes);
  };

  useEffect(() => {
    getPopular();
  }, []);

  return (
    <>
      <h1 className="mt-12 pl-48 mb-5 font-semibold text-lg">Popular Picks</h1>
      <div className="w-4/5 mx-auto">
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            drag: "free",
            pagination: false,
          }}
        >
          {popular.map((recipe) => {
            return <RecipeCard recipe={recipe} />;
          })}
        </Splide>
      </div>
    </>
  );
};

export default Popular;
