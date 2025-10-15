import React from "react";
// Importar el CSS de la Landing Page (si es diferente) o el general
import './App.css'; // Asegúrate de que este es el CSS correcto

//components
import Header from "./components/header"; // Asegúrate de que la ruta sea correcta

function HomePage(){
    return(
        <div className="app">
            {/* 1. Usar el Header con la variante 'landing' */}
            <Header variant="landing" /> 

            <div className="app__body__homePage">
                <h1>El portal de empleos para tu comunidad local</h1>
                
                <p>Conectamos empresas locales con talento de la zona.</p>
                <p>Encuentra oportunidades cerca de ti o publica ofertas para tu negocio.</p>

                <div className="homePage__cards-container">
                    {/* Tarjeta 1: Busco Empleo */}
                    <div className="card homePage__card">
                        <div className="card__icon">👤</div>
                        <h3>Busco Empleo</h3>
                        <button className="btn btn--primary">Buscar empleo</button>
                    </div>

                    {/* Tarjeta 2: Soy Empresa */}
                    <div className="card homePage__card">
                        <div className="card__icon">🏢</div>
                        <h3>Soy empresa</h3>
                        <button className="btn btn--primary">Publicar ofertas</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;