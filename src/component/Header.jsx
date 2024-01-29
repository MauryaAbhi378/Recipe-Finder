import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { GiKnifeFork, GiHamburgerMenu } from "react-icons/gi";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [search, setSearch] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = (e) => {
    e.preventDefault();
    navigate(`/searched/${search}`);
    setSearch("");
  };

  return (
    <header className="w-full h-24 flex justify-evenly items-center border-b-2 max-sm:flex max-sm:space-evenly">
      <Link to={"/"} className="cursor-pointer flex items-center max-sm:hidden">
        <GiKnifeFork />
        <div className="text-lg font-medium">delicious</div>
      </Link>

      <div className="flex flex-col items-center">
        <div className="w-[300px] max-sm:w-[200px] flex justify-center items-center ring-1 ring-slate-600 rounded-md p-2">
          <input
            type="text"
            className="outline-none w-full"
            placeholder="Enter Recipe Name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="cursor-pointer"
            onClick={handleButtonClick}
          />
        </div>
      </div>

      <div className="hidden max-sm:block relative">
        <GiHamburgerMenu
          className="w-[35px] h-[25px] cursor-pointer"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        />

        {isDropdownOpen && (
          <div className="absolute top-10 right-0 bg-white p-2 rounded-md shadow z-20">
            <Link to={"/"} className="block py-1">
              Home
            </Link>
            <Link to={"/favourite"} className="block py-1">
              Favorites
            </Link>
          </div>
        )}
      </div>

      <Link
        to={"/favourite"}
        className="bg-blue-500 text-white p-2 rounded-sm max-sm:hidden"
      >
        Favorites
      </Link>
    </header>
  );
};

export default Header;
