import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeCard from "../component/RecipeCard";

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  const params = useParams();

  const getCuisine = async (name) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=e8c5c5401a624c799ee54f92d381b35a&cuisine=${name}&number=9`
    );
    const data = await api.json();
    setCuisine(data.results);
  };

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  return (
    <div className="w-4/5 m-auto mt-10 grid grid-cols-3 gap-12">
      {cuisine.map((recipe, id) => {
        return <RecipeCard key={id} recipe={recipe} />;
      })}
    </div>
  );
};

export default Cuisine;
