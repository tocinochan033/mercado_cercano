import React, { useState } from 'react';
import Header from './components/header';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient.js';

function RegisterPageUser() {

    const navigate = useNavigate();

    // 1. Campos de Autenticación
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // 2. Campos de la Tabla 'usuarios'
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [descripcion, setDescripcion] = useState(''); 

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden.');
            setLoading(false);
            return;
        }

        try {
            const { data: authData, error: authError } = await supabase.auth.signUp({
                email,
                password,
            });

            if (authError) throw authError;

            const userId = authData.user?.id;
            
            if (userId) {
                const { error: rpcError } = await supabase.rpc('handle_new_user_signup', {
                    new_user_id: userId,
                    new_nombre: nombre,
                    new_apellido: apellido,
                    new_email: email,
                    new_telefono: telefono,
                    new_descripcion: descripcion,
                });

                if (rpcError) throw rpcError;

                alert('Registro de candidato exitoso.');
                navigate("/FeedUI");
                
            } else {
                throw new Error("Registro exitoso, pero requiere confirmación por correo.");
            }

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
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
