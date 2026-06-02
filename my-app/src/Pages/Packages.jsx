import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Components/Navbar';
import p1 from '../Assets/Images/p1.avif';
import p2 from '../Assets/Images/p2.avif';
import p3 from '../Assets/Images/p3.jpeg';
import p4 from '../Assets/Images/p4.jpg';
import p5 from '../Assets/Images/p5.jpg';
import p6 from '../Assets/Images/p6.avif';

const packages = [
    { img: p1, name: 'Kerala Backwaters', duration: '5 Days / 4 Nights', price: '₹18,999', tag: 'Popular' },
    { img: p2, name: 'Rajasthan Heritage', duration: '7 Days / 6 Nights', price: '₹24,999', tag: 'Best Seller' },
    { img: p3, name: 'Goa Beach Escape', duration: '4 Days / 3 Nights', price: '₹12,999', tag: 'Budget' },
    { img: p4, name: 'Shimla Manali Tour', duration: '6 Days / 5 Nights', price: '₹21,999', tag: 'Adventure' },
    { img: p5, name: 'Dubai City Tour', duration: '5 Days / 4 Nights', price: '₹55,999', tag: 'International' },
    { img: p6, name: 'Maldives Paradise', duration: '6 Days / 5 Nights', price: '₹89,999', tag: 'Luxury' },
];

function Packages() {
    return (
        <div style={{ background: '#f8fafc', minHeight: '100vh' }}>
            <Navbar />

            <div className="container py-5">
                {/* Header */}
                <div className="text-center mb-5">
                    <p style={{ color: '#f4845f', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>Explore Our Deals</p>
                    <h2 style={{ color: '#2c5f7a', fontWeight: 700 }}>Featured Travel Packages</h2>
                    <p className="text-muted">Handpicked destinations for every type of traveller</p>
                </div>

                {/* Package Cards */}
                <div className="row g-4">
                    {packages.map((pkg, i) => (
                        <div key={i} className="col-md-4">
                            <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '14px', overflow: 'hidden' }}>
                                <div style={{ position: 'relative' }}>
                                    <img
                                        src={pkg.img}
                                        className="card-img-top"
                                        alt={pkg.name}
                                        style={{ height: '200px', objectFit: 'cover' }}
                                    />
                                    <span
                                        className="badge position-absolute top-0 end-0 m-2"
                                        style={{ background: '#f4845f', fontSize: '11px' }}
                                    >
                                        {pkg.tag}
                                    </span>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title fw-bold" style={{ color: '#2c5f7a' }}>{pkg.name}</h5>
                                    <p className="text-muted mb-2" style={{ fontSize: '13px' }}>🗓 {pkg.duration}</p>
                                    <div className="d-flex justify-content-between align-items-center mt-3">
                                        <span style={{ color: '#f4845f', fontWeight: 700, fontSize: '18px' }}>{pkg.price}</span>
                                        <button
                                            className="btn btn-sm fw-semibold"
                                            style={{ background: '#2c5f7a', color: 'white', borderRadius: '8px' }}
                                        >
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Packages;
