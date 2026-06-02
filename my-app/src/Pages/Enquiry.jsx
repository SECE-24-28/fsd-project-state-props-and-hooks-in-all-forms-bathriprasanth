import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Components/Navbar';

function Enquiry() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', destination: '', date: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setForm({ name: '', email: '', phone: '', destination: '', date: '', message: '' });
        setTimeout(() => setSubmitted(false), 4000);
    };

    return (
        <div style={{ background: '#f8fafc', minHeight: '100vh' }}>
            <Navbar />

            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-7">
                        <div className="card border-0 shadow-sm p-4" style={{ borderRadius: '16px' }}>
                            <div className="text-center mb-4">
                                <h2 className="fw-bold" style={{ color: '#2c5f7a' }}>ENQUIRY PANEL</h2>
                                <p className="text-muted" style={{ fontSize: '14px' }}>Tell us your travel plans — we'll do the rest!</p>
                            </div>

                            {submitted && (
                                <div className="alert alert-success py-2" role="alert">
                                    ✅ Your enquiry has been submitted! We'll contact you soon.
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Full Name</label>
                                    <input type="text" name="name" className="form-control" placeholder="Enter your name" value={form.name} onChange={handleChange} required />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Email Address</label>
                                    <input type="email" name="email" className="form-control" placeholder="Enter your email" value={form.email} onChange={handleChange} required />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Phone Number</label>
                                    <input type="text" name="phone" className="form-control" placeholder="Enter your phone number" value={form.phone} onChange={handleChange} required />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Select Destination</label>
                                    <select name="destination" className="form-select" value={form.destination} onChange={handleChange} required>
                                        <option value="">Choose Destination</option>
                                        <option>India</option>
                                        <option>Japan</option>
                                        <option>Dubai</option>
                                        <option>Maldives</option>
                                        <option>Goa</option>
                                        <option>Shimla Manali</option>
                                        <option>Kerala</option>
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Travel Date</label>
                                    <input type="date" name="date" className="form-control" value={form.date} onChange={handleChange} required />
                                </div>

                                <div className="mb-4">
                                    <label className="form-label fw-semibold">Message</label>
                                    <textarea name="message" className="form-control" rows="4" placeholder="Enter your message or special requirements" value={form.message} onChange={handleChange}></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="btn w-100 fw-bold py-2"
                                    style={{ background: '#f4845f', color: 'white', borderRadius: '8px', fontSize: '15px' }}
                                >
                                    SUBMIT ENQUIRY
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Enquiry;
