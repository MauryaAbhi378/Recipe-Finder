import React, { useEffect, useState } from "react";
import { Splide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import RecipeCard from "./RecipeCard";

const Veggie = () => {
  const [veggie, setVeggie] = useState([]);
  const getVeggie = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=f3b8213250e04452abd141b9b731f2c4&number=9&tags=vegetarian`
    );
    const data = await api.json();
    setVeggie(data.recipes);
  };

  useEffect(() => {
    getVeggie();
  }, []);

  return (
    <>
      <h1 className="mt-12 pl-48 mb-5 font-semibold text-lg">Our Vegetarian Picks</h1>
      <div className="w-4/5 mx-auto">
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            drag: "free",
            pagination: false,
          }}
        >
          {veggie.map((recipe) => {
            return (
              <RecipeCard recipe={recipe}/>
            );
          })}
        </Splide>
      </div>
    </>
  );
}

export default Veggie
