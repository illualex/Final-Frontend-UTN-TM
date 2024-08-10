// src/pages/HomePage.jsx
import React from "react";
import ImageCarousel from "../components/ImageCarousel";
import ProductCarousel from "../components/ProductCarousel";

const HomePage = () => {
  return (
    <>
      <header></header>
      <main>
        <ImageCarousel />
        <h2>Nosotros Productos mas reciente</h2>
        <ProductCarousel />
      </main>
      <footer></footer>
    </>
  );
};

export default HomePage;
