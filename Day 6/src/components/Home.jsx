import React from 'react';
import './Home.css'; // Import the CSS file
import { Link } from 'react-router-dom';
import Navbar from './Nav';

const HomePage = () => {
  return (<>
    <div className='home1'>
    <div className="home-page">
      <section className="hero-section">
        <h2 className='home2'>Celebrate the Arrival of a Bundle of Joy</h2>
        <p className>Join us in the joyous occasion of welcoming a new life into the world!</p>
        <Link to={"/Content"} className="cta-button">
          RSVP Now
        </Link>
      </section>
      </div>
    </div>
    </>
  );
};

export default HomePage;
