import { useState } from 'react'
import './App.css'

import React from 'react';
// Rutas de componentes: Van a la carpeta components (que está al lado)
import Header from './components/header.jsx';
import Sidebar from './components/Sidebar.jsx';
import Feed from './components/Feed.jsx';
import Widgets from './components/Widget.jsx'; 
import ChatWidget from './components/ChatWidget.jsx';

function App() {
  return (
    <div className="app">
      <Header />
      
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
    </div>
  );
}

export default App
