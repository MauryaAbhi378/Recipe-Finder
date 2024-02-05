import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeCard from "../component/RecipeCard";

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  const params = useParams();

  const getCuisine = async (name) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=f3b8213250e04452abd141b9b731f2c4&cuisine=${name}&number=9`
    );
    const data = await api.json();
    setCuisine(data.results);
  };

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  return (
    <div className="w-4/5 m-auto mt-10 grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
      {cuisine.map((recipe, id) => {
        return <RecipeCard key={id} recipe={recipe} />;
      })}
    </div>
  );
};

export default Cuisine;
