import React, { useState } from 'react';
import Header from './components/header';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient.js';

import { registerUser } from './Service/authService.js';

function RegisterPageUser() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden.");
            setLoading(false);
            return;
        }

        const { success, error } = await registerUser({
            email,
            password,
            nombre,
            apellido,
            telefono,
            descripcion
        });

        if (!success) {
            console.error(error);
            alert("Error al registrar: " + error.message);
            setLoading(false);
            return;
        }

        alert("Usuario registrado correctamente.");
        navigate("/FeedUI");
    };

    return (
        <div className="app">
            <Header variant="landing" /> 

            <div className="registerPage__container">
                <div className="registerPage__card">
                    <form className="registerPage__form" onSubmit={handleSubmit}>

                        <div className="form__row">
                            <div className="form__group">
                                <label>Nombre</label>
                                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
                            </div>
                            <div className="form__group">
                                <label>Apellido</label>
                                <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} required />
                            </div>
                        </div>

                        <div className="form__row">
                            <div className="form__group">
                                <label>Contraseña</label>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            </div>
                            <div className="form__group">
                                <label>Confirmar</label>
                                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                            </div>
                        </div>

                        <div className="form__group full-width">
                            <label>Correo</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>

                        <div className="form__group full-width">
                            <label>Teléfono</label>
                            <input type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                        </div>

                        <div className="form__group full-width">
                            <label>Sobre ti</label>
                            <textarea rows="4" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}></textarea>
                        </div>

                        <button type="submit" className="btn btn--submit full-width" disabled={loading}>
                            {loading ? 'Creando cuenta...' : 'Crear cuenta de candidato'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RegisterPageUser;
