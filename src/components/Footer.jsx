import React from "react";
import "../styles/Footer.css"; // Asegúrate de que la ruta al archivo CSS sea correcta
import logo from "../assets/images/logo/titulo1.png"; // Asegúrate de que la ruta al logo sea correcta

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section left">
          <h2>Enlaces de Ayuda Rápida</h2>
          <ul>
            <li>
              <a href="#">Información de Nosotros</a>
            </li>
            <li>
              <a href="#">Cómo Realizar un Pedido</a>
            </li>
            <li>
              <a href="#">Formas de Pago</a>
            </li>
            <li>
              <a href="#">Garantía / Cambios / Devoluciones</a>
            </li>
            <li>
              <a href="#">Formas de Envío</a>
            </li>
            <li>
              <a href="#">Cómo Seguir un Envío</a>
            </li>
          </ul>
        </div>

        <div className="footer-section middle">
          <img src={logo} alt="Logo" className="logo-img" />
          <p>
            &copy; {new Date().getFullYear()} GamerMania. Todos los derechos
            reservados.
          </p>
        </div>

        <div className="footer-section rigth">
          <h2>Suscríbete a nuestras Noticias</h2>
          <form>
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="input-gmail"
            />
            <button type="submit" className="btn-subscribe">
              Suscribirse
            </button>
          </form>
          <div className="social-media">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
