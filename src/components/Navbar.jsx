import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/images/logo/titulo3.png";

// Importación de iconos de React Icons
import {
  FaMagnifyingGlass,
  FaCartPlus,
  FaUserLarge,
  FaBars,
  FaBarsStaggered,
} from "react-icons/fa6";

import { useGlobalContext } from "../contexts/GlobalContext";

const Navbar = () => {
  // Estado para controlar si el menú está abierto o cerrado
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Obtiene la función para contar los productos en el carrito desde el contexto global
  const { getCartItemCount } = useGlobalContext();
  // Función para alternar la visibilidad del menú hamburguesa
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Parte superior del navbar */}
      <div className="navbar-top">
        <Link to="/" className="navbar-logo-link">
          <img src={logo} alt="GamerMania Logo" className="navbar-logo" />
        </Link>

        {/* Barra de búsqueda */}
        <div className="search-container">
          <input type="text" placeholder="Buscar..." className="search-input" />
          <button className="search-button">
            <FaMagnifyingGlass className="search-icon" />
          </button>
        </div>

        {/* Botones de carrito y Iniciar sesión */}
        <div className={`navbar-icons ${isMenuOpen ? "active" : ""}`}>
          <Link to="/cart" className="btn-cart">
            <FaCartPlus />
            {/* Muestra la cantidad de productos en el carrito */}
            {getCartItemCount() > 0 && (
              <span className="cart-item-count">{getCartItemCount()}</span>
            )}
          </Link>
          <Link to="/signup" className="btn-login">
            <FaUserLarge />
            &nbsp;Iniciar sesión
          </Link>
        </div>
      </div>

      {/* Botón hamburguesa para mobiles */}
      <button className="menu-toggle" onClick={toggleMenu}>
        {/* Cambia el ícono del botón dependiendo de si el menú está abierto o cerrado */}
        {isMenuOpen ? <FaBarsStaggered /> : <FaBars />}
      </button>

      {/* Parte inferior del navbar */}
      <div className={`navbar-bottom ${isMenuOpen ? "active" : ""}`}>
        {/* Links para navegar a las diferentes secciones de la aplicación */}
        <Link to="/" className="navbar-link">
          Inicio
        </Link>
        <Link to="/products" className="navbar-link">
          Productos
        </Link>
        <Link to="/custom" className="navbar-link">
          Arma tu PC
        </Link>
        <Link to="/help" className="navbar-link">
          Ayuda
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
