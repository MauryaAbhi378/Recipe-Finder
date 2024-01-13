import React, {useContext, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GiKnifeFork } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { RecipeContext } from "../context/RecipeContext";

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
    setSearch("");
  };
  return (
    <>
      <div className="w-full h-24  flex justify-evenly items-center border-b-2">
        <Link to={"/"} className="cursor-pointer flex items-center">
          <GiKnifeFork />
          <div className="text-lg font-medium">delicious</div>
        </Link>
        <div className="flex  flex-col items-center">
          <div className="w-full flex justify-center items-center mt-10  ring-1 ring-slate-600 rounded-md p-2">
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
        <Link
          to={"/favourite"}
          className="bg-blue-500 text-white p-2 rounded-sm"
        >
          Favorites
        </Link>
      </div>
    </>
  );
};

export default Header;
