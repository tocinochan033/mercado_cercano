import React, { useState } from 'react';
import Header from './components/header';

import { supabase } from '../supabaseClient.js';

function RegisterPageUser({ navigate }) {
  // 1. Campos de Autenticación
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // 2. Campos de la Tabla 'usuarios'
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [descripcion, setDescripcion] = useState(''); // "Sobre ti"

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
            // PASO 1: Registrar al usuario en el sistema de autenticación (auth.users)
            const { data: authData, error: authError } = await supabase.auth.signUp({
                email,
                password,
            });

            if (authError) throw authError;

            const userId = authData.user?.id;
            
            if (userId) {
                // PASO 2: LLAMAR A LA FUNCIÓN DE POSTGRES (RPC) EN LUGAR DEL INSERT DIRECTO
                const { error: rpcError } = await supabase.rpc('handle_new_user_signup', {
                    new_user_id: userId, // UUID del nuevo usuario
                    new_nombre: nombre,
                    new_apellido: apellido,
                    new_email: email,
                    new_telefono: telefono,
                    new_descripcion: descripcion,
                    // new_rol se deja por defecto (2) en la función SQL si no se envía
                });

                if (rpcError) throw rpcError;

                alert('Registro de candidato exitoso.');
                // ... (Redirección)
                
            } else {
                // Este error ocurre si el usuario necesita confirmar correo
                throw new Error("Registro exitoso, pero se requiere confirmación por correo.");
            }

        } catch (error) {
            // ... (Manejo de errores) ...
        } finally {
            setLoading(false);
        }
    };
  return (
        <div className="app">
            <Header variant="landing" navigate={navigate} /> 

            <div className="registerPage__container">
                <div className="registerPage__card">
                    {/* ... Títulos y subtítulos ... */}
                    
                    <form className="registerPage__form" onSubmit={handleSubmit}>
                        
                        {/* Fila: Nombre y Apellido */}
                        <div className="form__row">
                            <div className="form__group">
                                <label htmlFor="nombre">Nombre</label>
                                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
                            </div>
                            <div className="form__group">
                                <label htmlFor="apellido">Apellido</label>
                                <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} required />
                            </div>
                        </div>

                        {/* Fila: Contraseña y Confirmar */}
                        <div className="form__row">
                            <div className="form__group">
                                <label htmlFor="contrasena">Contraseña</label>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            </div>
                            <div className="form__group">
                                <label htmlFor="confirmar">Confirmar</label>
                                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                            </div>
                        </div>
                        
                        {/* Fila: Correo */}
                        <div className="form__group full-width">
                            <label htmlFor="correo">Correo</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        
                        {/* Fila: Teléfono */}
                        <div className="form__group full-width">
                            <label htmlFor="telefono">Teléfono</label>
                            <input type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                        </div>

                        {/* Fila: Sobre ti (Descripcion) */}
                        <div className="form__group full-width">
                            <label htmlFor="sobreti">Sobre ti</label>
                            <textarea rows="4" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}></textarea>
                        </div>
                        
                        {/* Botón de envío */}
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