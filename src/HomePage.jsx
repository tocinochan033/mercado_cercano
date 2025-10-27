import React from "react";
import './App.css'; 

//components
import Header from "./components/header";

function HomePage(){
    return(
        <div className="app">
            <Header variant="landing" /> 

            <div className="app__body__homePage">
                <h1>Buscar negocios. input loresum</h1>
                
                <p>Conectamos empresas locales con talento de la zona.</p>
                <p>Encuentra oportunidades cerca de ti o publica ofertas para tu negocio.</p>

                <div className="homePage__cards-container">
                    {/* tarjeta 1: busco Empleo */}
                    <div className="card homePage__card">
                        <div className="card__icon">👤</div>
                        <h3>Busco Empleo</h3>
                        <button className="btn btn--primary">Buscar empleo</button>
                    </div>

                    {/* tarjeta 2: soy Empresa */}
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