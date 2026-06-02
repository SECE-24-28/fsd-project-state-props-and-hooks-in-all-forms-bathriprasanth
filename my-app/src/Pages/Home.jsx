import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Assets/Css/Home.css';
import Navbar from '../Components/Navbar';
import video1 from '../Assets/Images/vedio1.mp4';
import p6 from '../Assets/Images/p6.avif';

function Home() {
    return (
        <div>
            <Navbar />

            {/* Hero Video Section */}
            <div className="video">
                <video autoPlay muted loop>
                    <source src={video1} type="video/mp4" />
                </video>
                <div className="text">
                    <h2>life-changing</h2>
                    <h1>travel, worldclass</h1>
                    <p>
                        The real voyage of discovery consists not in seeking new landscapes,
                        but in having new eyes.
                    </p>
                </div>
            </div>

            {/* About Section */}
            <div className="travel-section">
                <div className="travel-image">
                    <img src={p6} alt="travel" />
                </div>
                <div className="travel-text">
                    <h3>Stressfree Holidays with Aspire</h3>
                    <h1>Your Journey Starts Here!</h1>
                    <p>
                        Aspire Holidays is one of the best travel agencies in South India.
                        We make your next trip truly special and memorable.
                    </p>
                    <p>
                        Our experienced team plans everything perfectly so you can
                        enjoy your holiday without stress.
                    </p>
                    <div className="travel-box">
                        <div>
                            <h2>15+</h2>
                            <span>Years Experience</span>
                        </div>
                        <div>
                            <h2>100%</h2>
                            <span>Happy Clients</span>
                        </div>
                        <div>
                            <h2>4000+</h2>
                            <span>Packages</span>
                        </div>
                    </div>
                    <Link to="/about"><button>MORE ABOUT</button></Link>
                </div>
            </div>

            {/* Quick Links Banner */}
            <div className="container-fluid py-5" style={{ background: '#2c5f7a' }}>
                <div className="container text-center">
                    <h3 className="text-white fw-bold mb-2">Ready to Explore the World?</h3>
                    <p className="text-white-50 mb-4">Browse our curated packages and enquire today.</p>
                    <div className="d-flex justify-content-center gap-3 flex-wrap">
                        <Link to="/packages" className="btn fw-semibold px-4" style={{ background: '#f4845f', color: 'white', borderRadius: '8px' }}>
                            View Packages
                        </Link>
                        <Link to="/enquiry" className="btn fw-semibold px-4" style={{ background: 'white', color: '#2c5f7a', borderRadius: '8px' }}>
                            Enquire Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
