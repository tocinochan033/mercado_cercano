// src/components/FeedUI.jsx

import React from 'react';


import Header from './components/header.jsx';
import Sidebar from './components/Sidebar.jsx';
import Feed from './components/Feed.jsx';
import Widgets from './components/Widget.jsx'; 
import ChatWidget from './components/ChatWidget.jsx';

// El componente FeedUI ahora representa la vista de 3 columnas
function FeedUI({ navigate }) {
  return (
    <>
      {/* Usar el Header principal (sin variante 'landing') */}
      <Header navigate={navigate} /> 
      
      <div className="app__body">
        {/* Columna Izquierda */}
        <Sidebar />
        
        {/* Columna Central */}
        <Feed />
        
        {/* Columna Derecha */}
        <Widgets />
      </div>

      {/* Widget Flotante de Chat */}
      <ChatWidget />
    </>
  );
}

export default FeedUI;