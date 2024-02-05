import React, { useEffect, useState } from "react";
import { Splide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import RecipeCard from "./RecipeCard";

const Veggie = () => {
  const [veggie, setVeggie] = useState([]);

  const getVeggie = async () => {
    let check = localStorage.getItem("veggie");
    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=f3b8213250e04452abd141b9b731f2c4&number=9&tags=vegetarian`
      );
      const data = await api.json();
      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      setVeggie(data.recipes);
    }
  };

  useEffect(() => {
    getVeggie();
  }, []);

  return (
    <div className="flex flex-col">
      <h1 className="mt-12 pl-48 mb-5 font-semibold text-lg max-sm:pl-16">
        Our Vegetarian Picks
      </h1>
      <div className="w-4/5 mx-auto">
        <Splide
        options={{
          perPage: 3,
          arrows: false,
          drag: "free",
          pagination: false,
          breakpoints : {
            480 : {
              perPage : 1
            },
            768 : {
              perPage:2
            }
          }
        }}>
          {veggie.map((recipe, id) => {
            return <RecipeCard key={id} recipe={recipe} />;
          })}
        </Splide>
      </div>
    </div>
  );
};

export default Veggie;
