import React from 'react';
import Header from './components/header';
import App from './App';

function RegisterPageCompany() {
  return (
    <div className="app">
      {/* Variante del header */}
      <Header variant="landing" /> 

      <div className="registerPage__container">
        <div className="registerPage__card">
          
          <h2 className="registerPage__title">Registro de local</h2>
          <p className="registerPage__subtitle">Crea tu pequeño emprendimiento para encontrar oportunidades</p>
          
          <h3 className="registerPage__section-title">Información de la empresas</h3>
          <p className="registerPage__section-subtitle">Completa los datos para crear tu cuenta</p>
          
          <form className="registerPage__form">
            {/* Fila: Nombre y Apellido */}
            <div className="form__row">
              <div className="form__group">
                <label htmlFor="nombre">Nombre de la empresa</label>
                <input type="text" id="nombre" name="nombre" />
              </div>
            </div>

            {/* Fila: Contraseña y Confirmar */}
            <div className="form__row">
              <div className="form__group">
                <label htmlFor="contrasena">Contraseña</label>
                <input type="password" id="contrasena" name="contrasena" />
              </div>
              <div className="form__group">
                <label htmlFor="confirmar">Confirmar Contraseña</label>
                <input type="password" id="confirmar" name="confirmar" />
              </div>
            </div>
            
            {/* Fila: Correo */}
            <div className="form__group full-width">
              <label htmlFor="correo">Correo electronico</label>
              <input type="email" id="correo" name="correo" />
            </div>
            
            {/* Fila: Teléfono */}
            <div className="form__group full-width">
              <label htmlFor="telefono">Teléfono</label>
              <input type="tel" id="telefono" name="telefono" />
            </div>

            {/* Fila: Sobre ti (Textarea) */}
            <div className="form__group full-width">
              <label htmlFor="sobreti">Sobre tu empresa</label>
              <textarea id="sobreti" name="sobreti" rows="4"></textarea>
            </div>
            
            {/* Botón de envío */}
            <button type="submit" className="btn btn--submit full-width">
              Crear cuenta de tu empresa local
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPageCompany;