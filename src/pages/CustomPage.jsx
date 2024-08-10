import React from "react";
import Logo from "../assets/images/icons/construccion.png"; // Importa la imagen
import "../styles/CustomPage.css";

const CustomPage = () => {
  return (
    <div className="construction-container">
      <div className="message">
        <img src={Logo} alt="Logo en construcción" />
        <h1>¡Estamos en construcción!</h1>
        <p>
          ¡Gracias por tu paciencia! Estamos trabajando duro para que esta
          página esté disponible pronto.
        </p>
      </div>
    </div>
  );
};

export default CustomPage;