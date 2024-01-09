import React from "react";
import Home from "./Home";
import Cuisine from "./Cuisine";
import { Routes, Route } from "react-router-dom";
import Searched from "./Searched";
import RecipeDetail from "./RecipeDetail";
import Favourites from "./Favourites";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/searched/:search" element={<Searched />} />
      <Route path="/recipe/:name" element={<RecipeDetail />} />
      <Route path="/favourite" element={<Favourites />} />
    </Routes>
  );
};

export default Pages;
