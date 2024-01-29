import React from "react";
import Header from "./component/Header";
import Category from "./component/Category";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={3100}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition:Bounce
        />
        <div className="">
          <Header />
          <Category />
          <Pages />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
