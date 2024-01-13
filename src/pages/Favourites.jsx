import React, { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import RecipeCard from "../component/RecipeCard";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";

const Favourites = () => {
  const { favourites, removeFromFavourite } = useContext(RecipeContext);
  // const[isClicked, setIsClicked] = useState(false)


  return (
    <div className="flex justify-center flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Favorites</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {favourites.map((recipe, id) => {
          return (
            // <div key={recipe.id} className="relative">
            //   <Link
            //     to={`/recipe/${recipe.id}`}
            //     className="block rounded-lg overflow-hidden shadow-md"
            //   >
            //     <img
            //       src={recipe.image}
            //       className="w-full h-56 object-cover"
            //       alt={recipe.title}
            //     />
            //     <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-2">
            //       <p className="font-bold">{recipe.title}</p>
            //     </div>
            //   </Link>
            //   <CiHeart
            //     size="1.5rem"
            //     // color={`${isClicked ? "red" : "white"}`}
            //     color="red"
            //     className="absolute top-2 right-2 cursor-pointer"
            //     onClick={() => removeFromFavourite(recipe.id)}
            //   />
            // </div>
            <RecipeCard key={id} recipe={recipe}/>
          );
        })}
      </div>
    </div>
  );
};

export default Favourites;
