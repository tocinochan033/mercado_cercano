import React from 'react';
import Header from './components/header';
import App from './App';

function LoginPage() {
  return (
    <div className="app">
      <Header variant="landing" />

      <div className="loginPage__container">
        <div className="loginPage__card">
          <h2 className="loginPage__title">Iniciar Sesión</h2>
          <p className="loginPage__subtitle">Ingresa tus credenciales para acceder</p>p

          <form className="loginPage__form">
            
            {/* Correo */}
            <div className="form__group full-width">
              <label htmlFor="loginCorreo">Correo</label>
              <input type="email" id="loginCorreo" name="loginCorreo" />
            </div>
            
            {/* Contraseña */}
            <div className="form__group full-width">
              <label htmlFor="loginContrasena">Contraseña</label>
              <input type="password" id="loginContrasena" name="loginContrasena" />
            </div>

            {/* Botón de envío */}
            <button type="submit" className="btn btn--submit full-width">
              Iniciar Sesión
            </button>

            <p className="loginPage__forgot">¿Olvidaste tu contraseña?</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;