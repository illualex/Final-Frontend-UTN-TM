import React from "react";
import ImageCarousel from "../components/ImageCarousel"; // Ajusta la ruta según sea necesario

const HomePage = () => {
  return (
    <>
      <header></header>
      <main>
        <ImageCarousel />
        {/* Otros componentes de la página */}
        <h2>Siguiente contenido de la pagina</h2>
      </main>
      <footer>
        <p>&copy; 2024 GamerMania</p>
      </footer>
    </>
  );
};

export default HomePage;
