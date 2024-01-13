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
          ` flex flex-col items-center p-2 rounded-3xl mr-3 scale-90 w-20 h-15 ${
            isActive ? "bg-orange-700" : "bg-blue-400"
          }`
        }
      >
        <img src={Samosa} width={"40px"} alt="" />
        <h4 className="text-white text-xs">Indian</h4>
      </NavLink>
      <NavLink
        to="/cuisine/American"
        className={({ isActive }) =>
          ` flex flex-col items-center p-2 rounded-3xl mr-3 scale-90 w-20 h-15 ${
            isActive ? "bg-orange-700" : "bg-blue-400"
          }`
        }
      >
        <img src={American} width={"40px"} alt="" />
        <h4 className="text-white text-xs">American</h4>
      </NavLink>
      <NavLink
        to="/cuisine/Thai"
        className={({ isActive }) =>
          ` flex flex-col items-center p-2 rounded-3xl mr-3 scale-90 w-20 h-15 ${
            isActive ? "bg-orange-700" : "bg-blue-400"
          }`
        }
      >
        <img src={Thai} width={"40px"} alt="" />
        <h4 className="text-white text-xs">Thai</h4>
      </NavLink>
      <NavLink
        to="/cuisine/Japanese"
        className={({ isActive }) =>
          ` flex flex-col items-center p-2 rounded-3xl mr-3 scale-90 w-20 h-15 ${
            isActive ? "bg-orange-700" : "bg-blue-400"
          }`
        }
      >
        <img src={Ramen} width={"40px"} alt="" />
        <h4 className="text-white text-xs">Japanese</h4>
      </NavLink>
    </div>
  );
};

export default Category;
