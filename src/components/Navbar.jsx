import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/images/logo/titulo3.png";
import {
  FaMagnifyingGlass,
  FaCartPlus,
  FaUserLarge,
  FaBars,
  FaBarsStaggered,
} from "react-icons/fa6";
import { useGlobalContext } from "../contexts/GlobalContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { getCartItemCount, username, logout } = useGlobalContext();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleLogout = () => {
    logout();
    setIsUserMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-top">
          <Link to="/home" className="navbar-logo-link">
            <img src={logo} alt="GamerMania Logo" className="navbar-logo" />
          </Link>

          <div className="search-container">
            <input
              type="text"
              placeholder="Buscar..."
              className="search-input"
            />
            <button className="search-button">
              <FaMagnifyingGlass className="search-icon" />
            </button>
          </div>

          <div className={`navbar-icons ${isMenuOpen ? "active" : ""}`}>
            <Link to="/cart" className="btn-cart">
              <FaCartPlus />

              {getCartItemCount() > 0 && (
                <span className="cart-item-count">{getCartItemCount()}</span>
              )}
            </Link>

            {username ? (
              <div className="user-menu">
                <button className="btn-user" onClick={toggleUserMenu}>
                  <FaUserLarge />
                  &nbsp;{username}
                </button>
                {isUserMenuOpen && (
                  <div className="user-dropdown">
                    <button onClick={handleLogout}>Cerrar Sesión</button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/signup" className="btn-login">
                <FaUserLarge />
                &nbsp;Iniciar sesión
              </Link>
            )}
          </div>
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaBarsStaggered /> : <FaBars />}
        </button>

        <div className={`navbar-bottom ${isMenuOpen ? "active" : ""}`}>
          <Link to="/home" className="navbar-link">
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
    </>
  );
};

export default Navbar;
