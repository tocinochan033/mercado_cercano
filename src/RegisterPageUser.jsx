import React from 'react';
import Header from './components/header';
import App from './App';

function RegisterPageUser() {
  return (
    <div className="app">
      {/* variante del header */}
      <Header variant="landing" /> 

      <div className="registerPage__container">
        <div className="registerPage__card">
          
          <h2 className="registerPage__title">Registro de Candidato</h2>
          <p className="registerPage__subtitle">Crea tu perfil profesional para encontrar oportunidades</p>
          
          <h3 className="registerPage__section-title">Información personal</h3>
          <p className="registerPage__section-subtitle">Completa los datos para crear tu cuenta</p>
          
          <form className="registerPage__form">
            {/* Fila: Nombre y Apellido */}
            <div className="form__row">
              <div className="form__group">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" name="nombre" />
              </div>
              <div className="form__group">
                <label htmlFor="apellido">Apellido</label>
                <input type="text" id="apellido" name="apellido" />
              </div>
            </div>

            {/* Fila: Contraseña y Confirmar */}
            <div className="form__row">
              <div className="form__group">
                <label htmlFor="contrasena">Contraseña</label>
                <input type="password" id="contrasena" name="contrasena" />
              </div>
              <div className="form__group">
                <label htmlFor="confirmar">Confirmar</label>
                <input type="password" id="confirmar" name="confirmar" />
              </div>
            </div>
            
            {/* Fila: Correo */}
            <div className="form__group full-width">
              <label htmlFor="correo">Correo</label>
              <input type="email" id="correo" name="correo" />
            </div>
            
            {/* Fila: Teléfono */}
            <div className="form__group full-width">
              <label htmlFor="telefono">Teléfono</label>
              <input type="tel" id="telefono" name="telefono" />
            </div>

            {/* Fila: Sobre ti (Textarea) */}
            <div className="form__group full-width">
              <label htmlFor="sobreti">Sobre ti</label>
              <textarea id="sobreti" name="sobreti" rows="4"></textarea>
            </div>
            
            {/* Botón de envío */}
            <button type="submit" className="btn btn--submit full-width">
              Crear cuenta de candidato
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPageUser;