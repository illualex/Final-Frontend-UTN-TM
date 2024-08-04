import React from "react";
import Navbar from "../components/Navbar"; // Importa el Navbar si lo estás usando
import ImageCarousel from "../components/ImageCarousel"; // Ajusta la ruta según sea necesario

const HomePage = () => {
  return (
    <>
      <header>
        <Navbar />
        {/* Agrega el Navbar si deseas que esté en todas las páginas */}
      </header>
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
