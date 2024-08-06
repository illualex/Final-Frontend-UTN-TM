// src/pages/HomePage.jsx
import React from "react";
import Navbar from "../components/Navbar"; // Importa el Navbar si lo estás usando
import ImageCarousel from "../components/ImageCarousel";
import ProductCarousel from "../components/ProductCarousel";

const HomePage = () => {
  return (
    <>
      <header>
        <Navbar />
        {/* Agrega el Navbar si deseas que esté en todas las páginas */}
      </header>
      <main>
        <ImageCarousel />
        <h2>Siguiente contenido de la pagina</h2>
        <ProductCarousel />
      </main>
      <footer>
        <p>&copy; 2024 GamerMania</p>
      </footer>
    </>
  );
};

export default HomePage;
