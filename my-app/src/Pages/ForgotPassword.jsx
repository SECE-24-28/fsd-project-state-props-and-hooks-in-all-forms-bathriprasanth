import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Assets/Css/Login.css';

function ForgotPassword() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [step, setStep] = useState(1); // 1 = enter email, 2 = enter new password
    const [newPass, setNewPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [alert, setAlert] = useState(null);

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const exists = users.find(u => u.email === email);

        if (exists) {
            setAlert(null);
            setStep(2); // Show password fields
        } else {
            setAlert({ type: 'danger', msg: 'Email not found. Please check and try again.' });
        }
    };

    const handlePasswordReset = (e) => {
        e.preventDefault();
        if (newPass.length < 8) {
            setAlert({ type: 'danger', msg: 'Password must be at least 8 characters.' });
            return;
        }
        if (newPass !== confirmPass) {
            setAlert({ type: 'danger', msg: 'Passwords do not match.' });
            return;
        }

        // Update password in LocalStorage
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const updated = users.map(u => u.email === email ? { ...u, password: newPass } : u);
        localStorage.setItem('users', JSON.stringify(updated));

        setAlert({ type: 'success', msg: 'Password updated successfully! Redirecting to Login...' });
        setTimeout(() => navigate('/login'), 1500);
    };

    return (
        <div className="auth-wrapper">
            <div className="auth-card">
                <h1>Forgot Password</h1>
                <p className="auth-subtitle">
                    {step === 1 ? 'Enter your registered email to reset password.' : 'Set your new password.'}
                </p>

                {alert && (
                    <div className={`alert alert-${alert.type} py-2`} role="alert">
                        {alert.msg}
                    </div>
                )}

                {/* Step 1: Email Verification */}
                {step === 1 && (
                    <form onSubmit={handleEmailSubmit}>
                        <div className="form-group">
                            <label>Registered Email Address</label>
                            <input
                                type="email"
                                placeholder="Enter your registered email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="submit-btn">Verify Email</button>
                    </form>
                )}

                {/* Step 2: New Password */}
                {step === 2 && (
                    <form onSubmit={handlePasswordReset}>
                        <div className="form-group">
                            <label>New Password</label>
                            <input
                                type="password"
                                placeholder="Minimum 8 characters"
                                value={newPass}
                                onChange={(e) => setNewPass(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Confirm New Password</label>
                            <input
                                type="password"
                                placeholder="Re-enter new password"
                                value={confirmPass}
                                onChange={(e) => setConfirmPass(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="submit-btn">Reset Password</button>
                    </form>
                )}

                <div className="divider">OR</div>

                <p className="signup-link">
                    Remembered your password?
                    <Link to="/login"> Back to Login</Link>
                </p>
            </div>
        </div>
    );
}

export default ForgotPassword;
