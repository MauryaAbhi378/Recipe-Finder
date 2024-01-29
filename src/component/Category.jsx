import React from "react";
import { NavLink } from "react-router-dom";
import Samosa from "../assets/samosa.png";
import American from "../assets/hamburger.png";
import Ramen from "../assets/ramen.png";
import Thai from "../assets/thai-food.png";

const Category = () => {
  return (
    <div className={"flex w-4/5 m-auto justify-center pt-5"}>
      <NavLink
        to="/cuisine/Indian"
        className={({ isActive }) =>
          ` flex flex-col items-center p-2 rounded-3xl mr-3 scale-90 w-20 max-sm:p-1 max-sm:h-14 ${
            isActive ? "bg-orange-700" : "bg-blue-400"
          }`
        }
      >
        <img src={Samosa} className="w-10 max-sm:w-7" alt="Indian" />
        <h4 className="text-white text-xs">Indian</h4>
      </NavLink>
      <NavLink
        to="/cuisine/American"
        className={({ isActive }) =>
          ` flex flex-col items-center p-2 rounded-3xl mr-3 scale-90 w-20 max-sm:p-1 max-sm:h-14 ${
            isActive ? "bg-orange-700" : "bg-blue-400"
          }`
        }
      >
        <img src={American} className="w-10 max-sm:w-7" alt="American" />
        <h4 className="text-white text-xs">American</h4>
      </NavLink>
      <NavLink
        to="/cuisine/Thai"
        className={({ isActive }) =>
          ` flex flex-col items-center p-2 rounded-3xl mr-3 scale-90 w-20 max-sm:p-1 max-sm:h-14 ${
            isActive ? "bg-orange-700" : "bg-blue-400"
          }`
        }
      >
        <img src={Thai} className="w-10 max-sm:w-7" alt="Thai" />
        <h4 className="text-white text-xs">Thai</h4>
      </NavLink>
      <NavLink
        to="/cuisine/Japanese"
        className={({ isActive }) =>
          ` flex flex-col items-center p-2 rounded-3xl mr-3 scale-90 w-20 max-sm:p-1 max-sm:h-14 ${
            isActive ? "bg-orange-700" : "bg-blue-400"
          }`
        }
      >
        <img src={Ramen} className="w-10 max-sm:w-7" alt="Japanese" />
        <h4 className="text-white text-xs">Japanese</h4>
      </NavLink>
    </div>
  );
};

export default Category;
