import React from "react";
import Header from "./component/Header";
import Category from "./component/Category";
import Pages from "./pages/Pages";
import Search from "./component/Search";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </>
  );
};

export default App;
