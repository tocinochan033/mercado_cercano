import React, { useState } from "react";
import Header from "./components/header";

import { useNavigate } from "react-router-dom";

import { registerCompany } from "./Service/authService";

function RegisterPageCompany() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nombre: "",
    contrasena: "",
    confirmar: "",
    correo: "",
    telefono: "",
    sobreti: "",
    direccion: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.contrasena !== form.confirmar) {
      alert("Las contraseñas no coinciden");
      return;
    }

    const result = await registerCompany({
      nombre: form.nombre,
      descripcion: form.sobreti,
      direccion: form.direccion,
      correo: form.correo,
      contrasena: form.contrasena
    });

    if (result.success) {
      alert("Empresa registrada correctamente");
      navigate("/FeedUI")
    } else {
      alert("Error: " + result.message);
    }
  };

  return (
    <div className="app">
      <Header variant="landing" />

      <div className="registerPage__container">
        <div className="registerPage__card">
          <h2 className="registerPage__title">Registro de local</h2>
          <p className="registerPage__subtitle">Crea tu pequeño emprendimiento para encontrar oportunidades</p>
          
          <form className="registerPage__form" onSubmit={handleSubmit}>

            <div className="form__row">
              <div className="form__group">
                <label>Nombre de la empresa</label>
                <input type="text" name="nombre" onChange={handleChange} />
              </div>
            </div>

            <div className="form__group full-width">
              <label>Dirección</label>
              <input type="text" name="direccion" onChange={handleChange} />
            </div>

            <div className="form__row">
              <div className="form__group">
                <label>Contraseña</label>
                <input type="password" name="contrasena" onChange={handleChange} />
              </div>
              <div className="form__group">
                <label>Confirmar Contraseña</label>
                <input type="password" name="confirmar" onChange={handleChange} />
              </div>
            </div>

            <div className="form__group full-width">
              <label>Correo</label>
              <input type="email" name="correo" onChange={handleChange} />
            </div>

            <div className="form__group full-width">
              <label>Teléfono</label>
              <input type="tel" name="telefono" onChange={handleChange} />
            </div>

            <div className="form__group full-width">
              <label>Sobre tu empresa</label>
              <textarea name="sobreti" rows="4" onChange={handleChange}></textarea>
            </div>

            <button type="submit" className="btn btn--submit full-width">
              Crear cuenta de tu empresa local
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPageCompany;
