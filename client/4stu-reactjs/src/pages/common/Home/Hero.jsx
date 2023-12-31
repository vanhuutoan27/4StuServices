import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function Hero2() {
  function scrollOnTop() {
    window.scrollTo(0, 0);
  }

  return (
    <div className="hero-wrap">
      <div className="content">
        <div className="info">
          <p className="sub-title">Welcome to 4Stu Website!</p>
          <h1 className="title">Clean, tidy and economical.</h1>
          <p className="desc">
            Here we have all the cleaning, sanitation, water delivery services you need.
          </p>

          <Link to="/service" onClick={scrollOnTop}>
            <Button variant="contained" className="btn hero-cta cta">
              Start Order NOW
            </Button>
          </Link>
        </div>

        <img
          src="../assets/images/people-start-booking-a-service-in-website-2.svg"
          alt="Clean, tidy and economical."
          className="hero-img"
        />
      </div>
    </div>
  );
}

export default Hero2;
