import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/navbar.css'; // Asegúrate de que la ruta sea correcta
import logo from '../assets/images/logo/titulo3.png'; // Ruta al logo
import { FaMagnifyingGlass, FaCartPlus, FaUserLarge, FaBars, FaBarsStaggered } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Parte superior del Navbar */}
      <div className="navbar-top">
        {/* Logo */}
        <Link to="/" className="navbar-logo-link">
          <img src={logo} alt="GamerMania Logo" className="navbar-logo" />
        </Link>

        {/* Contenedor de búsqueda */}
        <div className="search-container">
          <input type="text" placeholder="Buscar..." className="search-input" />
          <button className="search-button">
            <FaMagnifyingGlass className="search-icon" />
          </button>
        </div>

        {/* Iconos de navegación (carrito y login) */}
        <div className={`navbar-icons ${isMenuOpen ? 'active' : ''}`}>
          <button className="btn-cart"><FaCartPlus /></button>
          <button className="btn-login"><FaUserLarge /> Iniciar sesión</button>
        </div>
      </div>

      {/* Botón de menú hamburguesa */}
      <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? <FaBarsStaggered /> : <FaBars />}
      </button>

      {/* Menú inferior (enlaces de navegación) */}
      <div className={`navbar-bottom ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/" className="navbar-link">Inicio</Link>
        <Link to="/products" className="navbar-link">Productos</Link>
        <Link to="/custom" className="navbar-link">Arma tu PC</Link>
        <Link to="/help" className="navbar-link">Ayuda</Link>
      </div>
    </nav>
  );
};

export default Navbar;
