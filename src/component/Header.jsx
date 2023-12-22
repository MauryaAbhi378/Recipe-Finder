import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faHeart
} from "@fortawesome/free-solid-svg-icons";
import {GiKnifeFork} from "react-icons/gi"
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="w-full h-16  flex justify-evenly items-center border-b-2">
        <div to={"/"} className="cursor-pointer flex items-center">
          <GiKnifeFork/>
          <div className="text-lg font-medium">delicious</div>
        </div>
        <span className="cursor-pointer">
          <FontAwesomeIcon icon={faHeart} />
        </span>
      </div>
    </>
  );
};

export default Header;
