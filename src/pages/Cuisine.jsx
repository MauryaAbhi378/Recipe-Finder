import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import RecipeCard from "../component/RecipeCard";

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  const params = useParams();

  const getCuisine = async (name) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=7561c94016cf478cbf0abe03c8c6cf5c&cuisine=${name}`
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
