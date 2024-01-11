import React from "react";
import Header from "./component/Header";
import Category from "./component/Category";
import Pages from "./pages/Pages";
import Search from "./component/Search";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecipeProvider } from "./context/RecipeContext.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </>
  );
};

export default App;
