import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";
import Header from "../Pages/Header/Header";
import CategoriesInfo from "../Pages/CategoriesInfo/CategoriesInfo";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <CategoriesInfo></CategoriesInfo>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
