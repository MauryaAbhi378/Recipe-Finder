import React, { useEffect, useState } from "react";
import RecipeCard from "../component/RecipeCard";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { useParams } from "react-router-dom";

const Searched = () => {
  const [recipes, setRecipes] = useState([]);
  const [page, setPage] = useState(1);
  const[errorMessage, setErrorMessage] = useState("")
  let params = useParams();

  const apiData = async (searchValue) => {
    try {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=e8c5c5401a624c799ee54f92d381b35a&query=${searchValue}&number=36`
      );
      const data = await api.json();
      console.log(data)
      if (data.results.length > 0) {
        setRecipes(data.results);
      }
      else {
        setErrorMessage(`${searchValue} Not Found`)
        setRecipes(data.results)
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    apiData(params.search);
  }, [params.search]);

  const selectedPage = (page) => {
    if (page >= 1 && page <= recipes.length / 9) {
      setPage(page);
    }
  };

  return (
    <div>
      <div className="w-4/5 m-auto mt-10 grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {recipes.slice(page * 9 - 9, page * 9).map((recipe, index) => {
          return <RecipeCard key={index} recipe={recipe} />;
        })}
      </div>
      { recipes.length === 0 &&
        <div className="flex justify-center text-lg">{errorMessage}</div>
      }
      {recipes.length > 0 && (
        <div className="flex justify-center mt-10 items-center cursor-pointer">
          <span className="px-2">
            <GrFormPrevious
              className={`${page <= 1 ? "hidden" : "inline-block w-6 h-6"}`}
              onClick={() => selectedPage(page - 1)}
            />
          </span>
          {[...Array(Math.ceil(recipes.length / 9))].map((_, i) => {
            const pageNumber = i + 1;
            return (
              <span
                key={i}
                className={`px-2 py-1 cursor-pointer ${
                  pageNumber === page ? "bg-blue-500 text-white" : ""
                }`}
                onClick={() => selectedPage(pageNumber)}
              >
                {pageNumber}
              </span>
            );
          })}
          <span className="px-2">
            <GrFormNext
              className={`${
                page >= recipes.length / 9 ? "hidden" : "inline-block w-6 h-6"
              }`}
              onClick={() => selectedPage(page + 1)}
            />
          </span>
        </div>
      )}
    </div>
  );
};

export default Searched;
