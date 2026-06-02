import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../Assets/Images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../Assets/Css/Home.css';

function Navbar() {
    const navigate = useNavigate();
    const session = JSON.parse(localStorage.getItem('session') || '{}');
    const isLoggedIn = session.isLoggedIn;

    const handleLogout = () => {
        localStorage.removeItem('session');
        navigate('/login');
    };

    return (
        <nav className="navbar navbar-expand-lg sticky-top site-navbar">
            <div className="container-fluid px-4">

                {/* Brand */}
                <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
                    <img src={logo} alt="logo" width="44" height="44" className="rounded-circle" />
                    <span>Aspire Holidays</span>
                </Link>

                {/* Mobile Toggle */}
                <button
                    className="navbar-toggler border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navMenu"
                    aria-controls="navMenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Links + Auth */}
                <div className="collapse navbar-collapse" id="navMenu">
                    {/* Left links */}
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-2">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/packages">PACKAGES</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/enquiry">ENQUIRY PANEL</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">ABOUT US</Link>
                        </li>
                    </ul>

                    {/* Right — user email + login/logout */}
                    <div className="d-flex align-items-center gap-3">
                        {isLoggedIn && (
                            <span className="nav-user-email">👤 {session.userEmail}</span>
                        )}
                        {isLoggedIn ? (
                            <button className="nav-login-btn" onClick={handleLogout}>
                                LOGOUT
                            </button>
                        ) : (
                            <Link className="nav-login-btn" to="/login">
                                LOGIN
                            </Link>
                        )}
                    </div>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;
