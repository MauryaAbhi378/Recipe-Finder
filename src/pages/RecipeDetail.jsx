import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CiHeart } from "react-icons/ci";

const RecipeDetail = () => {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=f3b8213250e04452abd141b9b731f2c4`
    );
    const details = await data.json();
    console.log(details);
    setDetails(details);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <div className="w-3/5 m-auto mt-8 flex justify-between flex-row ">
      <div className="relative">
        <h1 className="font-semibold text-xl mb-4">{details.title}</h1>
        <img src={details.image} alt="details.title" width={335} />
        <CiHeart
          size="1.5rem"
          color="white"
          className="absolute bottom-56 left-72"
        />
      </div>
      <div className=" felx flex-col w-2/5">
        <div className="mb-4">
          <button
            onClick={() => setActiveTab("instructions")}
            className="p-2 border-2 border-slate-900 font-semibold"
          >
            Instructions
          </button>
          <button
            className="ml-6  p-2 border-2 border-slate-900 font-semibold"
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients
          </button>
        </div>

        {activeTab === "instructions" ? (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
          </div>
        ) : (
          <ul>
            {details.extendedIngredients.map((ingredient) => {
              <li key={ingredient.id}>{ingredient.original}</li>;
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default RecipeDetail;
