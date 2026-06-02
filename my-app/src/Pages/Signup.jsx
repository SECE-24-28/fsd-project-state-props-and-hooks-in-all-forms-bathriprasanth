import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Assets/Css/Login.css';

function Signup() {
    const navigate = useNavigate();
    const [form, setForm] = useState({ name: '', email: '', phone: '', password: '', confirm: '' });
    const [agreed, setAgreed] = useState(false);
    const [showTerms, setShowTerms] = useState(false);
    const [errors, setErrors] = useState({});
    const [alert, setAlert] = useState(null);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const validate = () => {
        const errs = {};
        if (!form.name.trim()) errs.name = 'Full name is required.';
        if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Enter a valid email address.';
        if (!/^\d{10}$/.test(form.phone)) errs.phone = 'Enter a valid 10-digit mobile number.';
        if (form.password.length < 8) errs.password = 'Password must be at least 8 characters.';
        if (form.password !== form.confirm) errs.confirm = 'Passwords do not match.';
        if (!agreed) errs.agreed = 'You must accept the Terms & Conditions.';

        // Check duplicate email
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        if (users.find(u => u.email === form.email)) errs.email = 'Email already registered.';

        return errs;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = validate();
        setErrors(errs);
        if (Object.keys(errs).length > 0) return;

        // Save new user to LocalStorage
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        users.push({ name: form.name, email: form.email, phone: form.phone, password: form.password });
        localStorage.setItem('users', JSON.stringify(users));

        setAlert({ type: 'success', msg: 'Account created successfully! Redirecting to Login...' });
        setTimeout(() => navigate('/login'), 1500);
    };

    return (
        <div className="auth-wrapper py-5">
            <div className="auth-card" style={{ width: '460px' }}>
                <h1>Create Account</h1>
                <p className="auth-subtitle">Join us and start your travel adventure.</p>

                {alert && (
                    <div className={`alert alert-${alert.type} py-2`} role="alert">
                        {alert.msg}
                    </div>
                )}

                <form onSubmit={handleSubmit} noValidate>
                    {/* Full Name */}
                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" name="name" placeholder="Enter your full name" value={form.name} onChange={handleChange} />
                        {errors.name && <small className="text-danger">{errors.name}</small>}
                    </div>

                    {/* Email */}
                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" name="email" placeholder="Enter your email" value={form.email} onChange={handleChange} />
                        {errors.email && <small className="text-danger">{errors.email}</small>}
                    </div>

                    {/* Mobile */}
                    <div className="form-group">
                        <label>Mobile Number</label>
                        <input type="tel" name="phone" placeholder="Enter 10-digit mobile number" value={form.phone} onChange={handleChange} />
                        {errors.phone && <small className="text-danger">{errors.phone}</small>}
                    </div>

                    {/* Password */}
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="password" placeholder="Minimum 8 characters" value={form.password} onChange={handleChange} />
                        {errors.password && <small className="text-danger">{errors.password}</small>}
                    </div>

                    {/* Confirm Password */}
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input type="password" name="confirm" placeholder="Re-enter your password" value={form.confirm} onChange={handleChange} />
                        {errors.confirm && <small className="text-danger">{errors.confirm}</small>}
                    </div>

                    {/* Terms & Conditions Checkbox */}
                    <div className="mb-3">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="termsCheck"
                                checked={agreed}
                                onChange={(e) => setAgreed(e.target.checked)}
                            />
                            <label className="form-check-label" style={{ fontSize: '13px' }} htmlFor="termsCheck">
                                I agree to the{' '}
                                <span
                                    onClick={() => setShowTerms(true)}
                                    style={{ color: '#f4845f', cursor: 'pointer', fontWeight: 600 }}
                                >
                                    Terms &amp; Conditions
                                </span>
                            </label>
                        </div>
                        {errors.agreed && <small className="text-danger">{errors.agreed}</small>}
                    </div>

                    <button type="submit" className="submit-btn">Create Account</button>
                </form>

                <div className="divider">OR</div>

                <p className="signup-link">
                    Already have an account?
                    <Link to="/login"> Login</Link>
                </p>
            </div>

            {/* Terms & Conditions Modal */}
            {showTerms && (
                <div className="modal show d-block" style={{ background: 'rgba(0,0,0,0.5)' }} tabIndex="-1">
                    <div className="modal-dialog modal-lg modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header" style={{ background: '#2c5f7a', color: 'white' }}>
                                <h5 className="modal-title">Terms &amp; Conditions — Aspire Holidays</h5>
                                <button type="button" className="btn-close btn-close-white" onClick={() => setShowTerms(false)}></button>
                            </div>
                            <div className="modal-body" style={{ fontSize: '14px', lineHeight: '1.8' }}>
                                <h6 className="fw-bold" style={{ color: '#2c5f7a' }}>1. Booking Policy</h6>
                                <p>All bookings are subject to availability. A confirmation email will be sent upon successful booking. Full payment or a deposit may be required to confirm the booking.</p>

                                <h6 className="fw-bold" style={{ color: '#2c5f7a' }}>2. Cancellation Policy</h6>
                                <p>Cancellations made 30+ days before departure receive a full refund. Cancellations within 15–29 days incur a 25% charge. Cancellations within 14 days are non-refundable unless stated otherwise.</p>

                                <h6 className="fw-bold" style={{ color: '#2c5f7a' }}>3. Refund Policy</h6>
                                <p>Eligible refunds are processed within 7–14 business days to the original payment method. Refund eligibility depends on the package and supplier terms.</p>

                                <h6 className="fw-bold" style={{ color: '#2c5f7a' }}>4. Privacy Policy</h6>
                                <p>We collect personal data solely for booking and communication purposes. We do not sell or share your data with third parties without your consent, except as required by law.</p>

                                <h6 className="fw-bold" style={{ color: '#2c5f7a' }}>5. User Responsibilities</h6>
                                <p>You are responsible for ensuring valid travel documents (passport, visa). Aspire Holidays is not liable for denied entry or missed flights due to incomplete documentation.</p>

                                <h6 className="fw-bold" style={{ color: '#2c5f7a' }}>6. Travel Insurance</h6>
                                <p>We strongly recommend purchasing comprehensive travel insurance. Aspire Holidays is not responsible for medical emergencies, trip cancellations, or baggage loss.</p>

                                <h6 className="fw-bold" style={{ color: '#2c5f7a' }}>7. Data Protection Policy</h6>
                                <p>Your data is stored securely and protected in accordance with applicable data protection laws. You may request deletion of your data at any time by contacting us.</p>
                            </div>
                            <div className="modal-footer">
                                <button
                                    className="btn btn-sm fw-semibold"
                                    style={{ background: '#f4845f', color: 'white' }}
                                    onClick={() => { setAgreed(true); setShowTerms(false); }}
                                >
                                    I Accept
                                </button>
                                <button className="btn btn-sm btn-secondary" onClick={() => setShowTerms(false)}>
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Signup;
