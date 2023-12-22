import React from "react";
import Header from "./component/Header";
import Category from "./component/Category";
import Pages from "./pages/Pages";
import Search from "./component/Search";
import { BrowserRouter } from "react-router-dom";
import { RecipeProvider } from "./context/RecipeContext.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <RecipeProvider>
          <Search />
          <Category />
          <Pages />
        </RecipeProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
