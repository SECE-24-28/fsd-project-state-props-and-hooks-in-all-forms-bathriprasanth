import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Assets/Css/Login.css';

function Login() {
    const navigate = useNavigate();
    const [form, setForm] = useState({ email: '', password: '' });
    const [alert, setAlert] = useState(null); // { type: 'success'|'danger', msg: '' }

    // If already logged in, redirect to home
    useEffect(() => {
        const session = JSON.parse(localStorage.getItem('session') || '{}');
        if (session.isLoggedIn) navigate('/');
    }, [navigate]);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const user = users.find(u => u.email === form.email && u.password === form.password);

        if (user) {
            // Save session to LocalStorage
            localStorage.setItem('session', JSON.stringify({ isLoggedIn: true, userEmail: user.email }));
            setAlert({ type: 'success', msg: 'Login successful! Redirecting...' });
            setTimeout(() => navigate('/'), 1200);
        } else {
            setAlert({ type: 'danger', msg: 'Invalid Email or Password.' });
        }
    };

    return (
        <div className="auth-wrapper">
            <div className="auth-card">
                <h1>Welcome Back</h1>
                <p className="auth-subtitle">Sign in to continue your travel journey.</p>

                {/* Bootstrap Alert */}
                {alert && (
                    <div className={`alert alert-${alert.type} py-2`} role="alert">
                        {alert.msg}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={form.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="forgot-password">
                        <Link to="/forgot-password">Forgot Password?</Link>
                    </div>

                    <button type="submit" className="submit-btn">Login</button>
                </form>

                <div className="divider">OR</div>

                <p className="signup-link">
                    Don't have an account?
                    <Link to="/signup"> Sign Up</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
