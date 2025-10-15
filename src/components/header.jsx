// src/components/Header.jsx
import React from 'react';

// Acepta una prop 'variant' para determinar qué contenido renderizar
function Header({ variant }) {
  // Contenido específico de la Landing Page
  const landingContent = (
    <div className="header__landing-btns">
      <button className="btn btn--signin">Iniciar Sesion</button>
      <button className="btn btn--register">Registrarse</button>
    </div>
  );

  // Contenido de la UI principal (el buscador y los íconos)
  const mainUIContent = (
    <div className="header__search">
      <span className="header__search-icon"></span>
      <input type="text" placeholder="Buscar empleos, empresas" />
    </div>
    // Aquí irían los íconos de navegación si los tuvieras
  );

  return (
    <div className="header">
      <div className={`header__content ${variant === 'landing' ? 'header__content--landing' : ''}`}>
        <div className="header__logo">in</div>

        {/* Lógica para mostrar el contenido correcto */}
        {variant === 'landing' ? landingContent : mainUIContent}
      </div>
    </div>
  );
}

export default Header;