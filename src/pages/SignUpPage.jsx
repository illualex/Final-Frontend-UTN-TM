import React, { useState } from "react";
import "../styles/SignUpPage.css";
import { useGlobalContext } from "../contexts/GlobalContext";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useGlobalContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username);
    navigate("/home");
  };

  return (
    <main>
      <div className="page-container">
        <div className="sign-up-container">
          <h1>Iniciar Sesión</h1>
          <form onSubmit={handleSubmit} className="sign-up-form">
            <div className="form-group">
              <label htmlFor="username">Usuario</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn-loginIn">
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default SignUpPage;
