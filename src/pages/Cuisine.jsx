import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import RecipeCard from "../component/RecipeCard";

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  const params = useParams();

  const getCuisine = async (name) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=f3b8213250e04452abd141b9b731f2c4&cuisine=${name}`
    );
    const data = await api.json();
    setCuisine(data.results);
  };

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  return (
    <div className="w-3/5 m-auto mt-10 grid grid-cols-3 gap-12">
      {cuisine.map((recipe) => {
        return (
          <RecipeCard recipe={recipe}/>
        );
      })}
    </div>
  );
};

export default Cuisine;
