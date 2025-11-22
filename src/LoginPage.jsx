// src/LoginPage.jsx
import React, { useState } from "react";
import Header from "./components/header";
import { useNavigate } from "react-router-dom";
import { loginUser } from "./Service/authService";

function LoginPage() {
  
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const result = await loginUser(email, password);

    setLoading(false);

    if (!result.success) {
      alert("Error: " + result.message);
      return;
    }

    // Login correcto
    alert("Inicio de sesión exitoso");
    navigate("/FeedUI");
  };

  return (
    <div className="app">
      <Header variant="landing" />

      <div className="loginPage__container">
        <div className="loginPage__card">
          <h2 className="loginPage__title">Iniciar Sesión</h2>
          <p className="loginPage__subtitle">Ingresa tus credenciales para acceder</p>

          <form className="loginPage__form" onSubmit={handleLogin}>
            
            <div className="form__group full-width">
              <label htmlFor="loginCorreo">Correo</label>
              <input 
                type="email"
                id="loginCorreo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="form__group full-width">
              <label htmlFor="loginContrasena">Contraseña</label>
              <input 
                type="password"
                id="loginContrasena"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn--submit full-width" disabled={loading}>
              {loading ? "Ingresando..." : "Iniciar Sesión"}
            </button>

            <p className="loginPage__forgot">¿Olvidaste tu contraseña?</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
