import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const RecipeDetail = () => {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=7561c94016cf478cbf0abe03c8c6cf5c`
    );
    const details = await data.json();
    setDetails(details);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <div className="w-3/4 m-auto flex justify-evenly mt-8 max-sm:flex-col">
      <div className="flex items-center flex-col">
        <h1 className="font-semibold text-xl mb-4">{details.title}</h1>
        <img
          src={details.image}
          className="rounded-md border-2"
          alt={details.title}
          width={335}
        />
      </div>

      <div className="mt-8">
        <div>
          <button
            className={`p-2 border-2 border-slate-900 font-semibold ${
              activeTab === "instructions" ? "bg-blue-300" : "bg-white"
            } `}
            onClick={() => setActiveTab("instructions")}
          >
            Instructions
          </button>
          <button
            className={`ml-6 p-2 border-2 border-slate-900 font-semibold ${
              activeTab === "ingredients" ? "bg-blue-300" : "bg-white"
            }`}
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients
          </button>
        </div>

        <div className="mt-4">
          {activeTab === "instructions" ? (
            <div
              dangerouslySetInnerHTML={{ __html: details.summary }}
            ></div>
          ) : (
            <ul className="list-disc list-inside ">
              {details.extendedIngredients.map((ingredient) => (
                <li className="text-black" key={ingredient.id}>
                  {ingredient.original}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
