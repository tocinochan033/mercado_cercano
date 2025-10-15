// src/components/Header.jsx
import React from 'react';
// Asumiendo que App.css contiene los estilos del header

function Header() {
  return (
    <div className="header">
      <div className="header__content">
        <div className="header__logo">in</div>
        <div className="header__search">
          <span className="header__search-icon">🔍</span>
          <input type="text" placeholder="Buscar empleos, empresas" />
        </div>
        {/* Aquí irían los iconos de navegación (Inicio, Red, Empleos, etc.) */}
      </div>
    </div>
  );
}

export default Header;