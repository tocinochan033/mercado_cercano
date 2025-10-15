// src/components/Widgets.jsx
import React from 'react';

function Widgets() {
  const itemsTrending = ['Empresa', 'Empresa', 'Empresa'];
  const itemsSuggested = ['Empresa', 'Empresa', 'Empresa'];

  const renderWidget = (title, items) => (
    <div className="card widgets__container">
      <h4>{title}</h4>
      {items.map((item, index) => (
        <div key={index} className="widgets__item">
          <div className="widgets__icon"></div>
          <p>{item}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="widgets">
      {renderWidget("Empresas trending", itemsTrending)}
      {renderWidget("Empresas que podrías conocer", itemsSuggested)}
    </div>
  );
}

export default Widgets;