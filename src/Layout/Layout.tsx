import React from "react";
import { Outlet } from "react-router-dom";
import BackGround3d from "../Containers/BackGround3d";
import { Footer } from "../Layouts/Footer";
import { NavigationBar } from "../Layouts/NavigationBar";
import { Header } from "./Header";

export const Layout = () => {
  return (
    <div>
      <Header />
      {/* <BackGround3d /> */}
      <Outlet />
      <Footer />
    </div>
  );
};
