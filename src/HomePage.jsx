import React from "react";

//components
import Header from "./components/header.jsx";

function HomePage(){
    return(
        <div className="app">
            <Header />
        <div className="app__body__home__page">
            <h1>El portal de empleos para tu comunidad local</h1>
            <h2>Conectamos empresas locales con tu talento de la zona.</h2>
            <h2>Encuentra oportunidades cerca de ti o publica ofertas para tu negocio.</h2>
        </div>


        </div>
    )
}

export default HomePage;