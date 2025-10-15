// src/components/ChatWidget.jsx
import React, { useState } from 'react';

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="chatWidget">
      <div className="chatWidget__header" onClick={() => setIsOpen(!isOpen)}>
        <span>Mensajes</span>
        <span>{isOpen ? '⬇️' : '⬆️'}</span>
      </div>
      <div className={`chatWidget__content ${isOpen ? 'open' : ''}`}>
        {/* Contenido simulado del chat */}
        <p>Chat con Tonto pollas jijjji...</p>
        <p>¡Hola! ¿Cómo estás?</p>
        <div style={{ marginTop: 'auto' }}>
            <input type="text" placeholder="Escribe un mensaje..." style={{ width: '100%', padding: '5px' }} />
        </div>
      </div>
    </div>
  );
}

export default ChatWidget;