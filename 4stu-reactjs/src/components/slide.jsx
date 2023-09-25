import React from 'react';

const Slide = ({ title, description, imgSrc }) => {
  return (
    <div className="slide">
      <div className="content">
        <div className="hero-content">
          <div className="info">
            <p className="sub-title">Welcome to 4Stu Website!</p>
            <h1 className="title">{title}</h1>
            <p className="desc">{description}</p>
            <a href="service" className="btn hero-cta cta">
              Start Booking NOW
            </a>
          </div>

          <img src={imgSrc} alt={title} className="hero-img" />
        </div>
      </div>
    </div>
  );
};

export default Slide;
