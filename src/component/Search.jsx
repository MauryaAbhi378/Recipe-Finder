import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { RecipeContext } from "../context/RecipeContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { apiData } = useContext(RecipeContext);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    apiData(search);
    navigate(`/searched/${search}`);
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="flex justify-center items-center mt-10 w-1/4 ring-1 ring-slate-600 rounded-md p-2">
          <input
            type="text"
            className="outline-none w-full"
            placeholder="Enter Recipe Name"
            value={search}
            onChange={handleInputChange}
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="cursor-pointer"
            onClick={handleButtonClick} 
          />
        </div>
      </div>
    </>
  );
};

export default Header;
