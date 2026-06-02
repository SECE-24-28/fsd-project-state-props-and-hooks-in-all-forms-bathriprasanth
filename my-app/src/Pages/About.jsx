import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Assets/Css/About.css';
import Navbar from '../Components/Navbar';
import p1 from '../Assets/Images/p1.avif';
import p2 from '../Assets/Images/p2.avif';
import p3 from '../Assets/Images/p3.jpeg';
import p4 from '../Assets/Images/p4.jpg';
import p5 from '../Assets/Images/p5.jpg';

function About() {
    return (
        <div>
            <Navbar />

            <div className="about-container">
                <div className="about-text">
                    <h3>Explore the world with us, one adventure at a time.</h3>
                    <h1>
                        Your Perfect <span>Trip</span> Starts With
                        A Simple Plan.
                    </h1>
                    <p>
                        Aspire Holidays Tourism India Pvt Ltd offers a wide range
                        of travel services designed to make every journey seamless
                        and enjoyable.
                    </p>
                    <p>
                        From flight and hotel bookings to car rentals, cruise
                        vacations and personalized tour packages, we take care
                        of everything.
                    </p>
                    <p>
                        We also provide support with visa and passport processing,
                        insurance and international travel guidance.
                    </p>
                    <h2>Unlock the World with Aspire Holidays!</h2>
                    <Link to="/terms"><button>Explore More</button></Link>
                </div>

                <div className="about-image">
                    <img src={p1} alt="main" className="main-img" />
                    <img src={p2} alt="img1" className="small-img img1" />
                    <img src={p3} alt="img2" className="small-img img2" />
                    <img src={p4} alt="img3" className="small-img img3" />
                    <img src={p5} alt="img4" className="small-img img4" />
                </div>
            </div>
        </div>
    );
}

export default About;
