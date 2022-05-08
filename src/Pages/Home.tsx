import React from "react";
import { AboutMe } from "../Layouts/AboutMe";
import { ContactForm } from "../Layouts/ContactForm";
import { Hero } from "../Layouts/Hero";
import { NavigationBar } from "../Layouts/NavigationBar";
import { ProductsGrid } from "../Layouts/ProductsGrid";
import { ProductsINFO } from "../Layouts/ProductsINFO";
import { Products } from "./Products";

export const Home = () => {
  return (
    <>
      {" "}
      <AboutMe />
      <ProductsINFO />
      <ContactForm />
      <ProductsGrid />
      {/*
      <Hero />
      <ProductsGrid />
     
       */}
    </>
  );
};
