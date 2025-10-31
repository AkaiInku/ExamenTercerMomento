import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Botton from '../../components/Botton/Botton';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login:', { email, password });
        // Aquí iría la lógica de autenticación
        // Por ahora, redirige directamente al dashboard
        navigate('/dashboard');
    };

    return (
        <main className="login-container">
            <section className='login-title'>
                <h1 className="login-h1">Iniciar Sesión</h1>
                <p className="login-subtitle">Bienvenido de nuevo. Accede a tu cuenta.</p>
            </section>
            <section className="login-card">
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">
                            Email o Nombre de Usuario
                        </label>
                        <input 
                            type="text"
                            id="email"
                            className="form-input"
                            placeholder="tu@ejemplo.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <div className="form-label-row">
                            <label htmlFor="password" className="form-label">
                                Contraseña
                            </label>
                            <Link to="/forgot-password" className="forgot-link">
                                ¿Olvidaste tu contraseña?
                            </Link>
                        </div>
                        <input
                            type="password"
                            id="password"
                            className="form-input"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <Botton
                        text="Iniciar Sesión"
                        type="submit"
                        size="large"
                        variant="primary"
                    />
                </form>
            </section>
            <section className='linck-registro'>
                <p className="register-link">
                    ¿No tienes una cuenta?{' '}
                    <Link to="/registro" className="link-highlight">
                        Regístrate
                    </Link>
                </p>
            </section>
        </main>
    );
};

export default Login;

