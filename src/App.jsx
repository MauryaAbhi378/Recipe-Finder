import React from "react";
import Header from "./component/Header";
import Category from "./component/Category";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Category />
        <Pages />
      </BrowserRouter>
    </>
  );
};

export default App;
