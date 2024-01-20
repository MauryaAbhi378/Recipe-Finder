import React from "react";
import Header from "./component/Header";
import Category from "./component/Category";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
import { RecipeProvider } from "./context/RecipeContext";

const App = () => {
  return (
    <>
      <RecipeProvider>
        <BrowserRouter>
          <Header />
          <Category />
          <Pages />
        </BrowserRouter>
      </RecipeProvider>
    </>
  );
};

export default App;
