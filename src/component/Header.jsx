import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faHeart,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { RecipeContext } from "../context/RecipeContext";

const Header = () => {
  const { search, setSearch, loading, apiData } = useContext(RecipeContext);
  // console.log(recipeState)

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleButtonClick = () => {
    apiData();
  };

  return (
    <div className="w-full h-16  flex justify-evenly items-center border-b-2">
      <span className="cursor-pointer">
        <FontAwesomeIcon icon={faHouse} />
      </span>
      <div className="flex justify-between items-center w-1/4 ring-1 ring-slate-600 rounded-md p-2">
        <input
          type="text"
          className="outline-none w-full"
          placeholder="Enter Recipe Name"
          value={search}
          onChange={handleInputChange}
        />
        <FontAwesomeIcon icon={faMagnifyingGlass} className="cursor-pointer" />
      </div>
      <span
        className="cursor-pointer"
        onClick={handleButtonClick}
        disabled={loading}
      >
        {loading ? "Loading..." : <FontAwesomeIcon icon={faHeart} />}
      </span>
    </div>
  );
};

export default Header;
