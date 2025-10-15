// src/components/Sidebar.jsx
import React from 'react';

function Sidebar() {
  return (
    <div className="sidebar">
      {/* Tarjeta de Perfil */}
      <div className="card sidebar__profile">
        <div className="sidebar__profile-header"></div>
        <div className="sidebar__profile-info">
          <div className="sidebar__avatar"></div>
          <h4>Tu perfil</h4>
          <p>Desarrollador full stack</p>
        </div>
        {/* Aquí irían las métricas del perfil */}
      </div>

      {/* Tarjeta de Conexiones/Links */}
      <div className="card sidebar__links">
        <p className="sidebar__link">Mis conexiones</p>
        <p className="sidebar__link">Productos guardados</p>
        <p className="sidebar__link">Empresas seguidas</p>
      </div>
    </div>
  );
}

export default Sidebar;