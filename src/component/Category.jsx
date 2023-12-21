import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Category = () => {
  return (
    <div className="flex w-4/5 m-auto justify-center pt-5">
      <NavLink
        to="/cuisine/Italian"
        className={({ isActive }) =>
          ` flex flex-col items-center p-2 rounded-3xl mr-3 scale-90 w-20 h-15 ${
            isActive ? "bg-orange-700" : "bg-slate-500"
          }`
        }
      >
        <FaPizzaSlice color="white" fontSize="1.5rem" />
        <h4 className="text-white text-xs">Italian</h4>
      </NavLink>
      <NavLink
        to="/cuisine/American"
        className={({ isActive }) =>
          ` flex flex-col items-center p-2 rounded-3xl mr-3 scale-90 w-20 h-15 ${
            isActive ? "bg-orange-700" : "bg-slate-500"
          }`
        }
      >
        <FaHamburger color="white" fontSize="1.5rem" />
        <h4 className="text-white text-xs">American</h4>
      </NavLink>
      <NavLink
        to="/cuisine/Thai"
        className={({ isActive }) =>
          ` flex flex-col items-center p-2 rounded-3xl mr-3 scale-90 w-20 h-15 ${
            isActive ? "bg-orange-700" : "bg-slate-500"
          }`
        }
      >
        <GiNoodles color="white" fontSize="1.5rem" />
        <h4 className="text-white text-xs">Thai</h4>
      </NavLink>
      <NavLink
        to="/cuisine/Japanese"
        className={({ isActive }) =>
          ` flex flex-col items-center p-2 rounded-3xl mr-3 scale-90 w-20 h-15 ${
            isActive ? "bg-orange-700" : "bg-slate-500"
          }`
        }
      >
        <GiChopsticks color="white" fontSize="1.5rem" />
        <h4 className="text-white text-xs">Japanese</h4>
      </NavLink>
    </div>
  );
};

export default Category;
