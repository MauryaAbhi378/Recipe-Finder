import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faHeart,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
      <div className="w-full h-16  flex justify-evenly items-center border-b-2">
        <div className="cursor-pointer">
          <FontAwesomeIcon icon={faHouse} />
        </div>
        <span className="cursor-pointer">
          <FontAwesomeIcon icon={faHeart} />
        </span>
      </div>
    </>
  );
};

export default Header;
