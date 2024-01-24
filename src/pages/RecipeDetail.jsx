import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
// import { RecipeContext } from "../context/RecipeContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RecipeDetail = () => {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");
  const[isClicked, setIsClicked] = useState(false)

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

  // const { addToFavourite } = useContext(RecipeContext);
  
  // const handleClick = () => {
  //   addToFavourite(details.id, details.image, details.title);
  //   setIsClicked(!isClicked)
  // };

  return (
    <div className="w-3/5 m-auto mt-8 flex justify-between flex-row ">
      <div className="relative flex flex-col items-center">
        <h1 className="font-semibold text-xl mb-4">{details.title}</h1>
        <img src={details.image} className="rounded-md border-2" alt="details.title" width={335} />

        {/* <div>
          <CiHeart
            size="1.5rem"
            color={`${isClicked ? "red" : "white"}`}
            className="absolute bottom-56 right-[102px] cursor-pointer"
            onClick={handleClick}
          />
          <ToastContainer />
        </div> */}
      </div>
      <div className=" felx flex-col w-2/5">
        <div className="mb-4">
          <button
            onClick={() => setActiveTab("instructions")}
            className={`p-2 border-2 border-slate-900 font-semibold ${activeTab === "instructions" ? "bg-blue-300" : "bg-white"} `}
          >
            Instructions
          </button>
          <button
            className={`ml-6  p-2 border-2 border-slate-900 font-semibold ${activeTab === "ingredients" ? "bg-blue-300" : "bg-white"}`}
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients
          </button>
        </div>

        {activeTab === "ingredients" ? (
          <div>
            {details.extendedIngredients.map((ingredient) => (
              <li className="text-black" key={ingredient.id}>
                {ingredient.original}
              </li>
            ))}
          </div>
        ) : (
          <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
        )}
      </div>
    </div>
  );
};

export default RecipeDetail;
