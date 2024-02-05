import React, { useEffect, useState } from "react";
import { Splide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import RecipeCard from "./RecipeCard";

const Popular = () => {
  const [popular, setPopular] = useState([]);

  const getPopular = async () => {
    let check = localStorage.getItem("popular");
    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=f3b8213250e04452abd141b9b731f2c4&number=9`
      );
      const data = await api.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
    }
  };

  useEffect(() => {
    getPopular();
  }, []);

  return (
    <div className="flex flex-col">
      <h1 className="mt-12 pl-48 mb-5 font-semibold text-lg max-sm:pl-16">Popular Picks</h1>
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
          }}
        >
          {popular.map((recipe, id) => {
            return <RecipeCard key={id} recipe={recipe} />;
          })}
        </Splide>
      </div>
    </div>
  );
};

export default Popular;
