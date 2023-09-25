import React, { useState, useEffect } from 'react';
import Slide from './slide';

const slidesData = [
  {
    title: 'Clean, tidy and economical',
    description: 'Here we have all the cleaning, sanitation, water delivery services you need.',
    imgSrc: './img/people-start-booking-a-service-in-website-2.svg',
  },
  {
    title: 'Clean, tidy and economical 2',
    description: 'Here we have all the cleaning, sanitation, water delivery services you need.',
    imgSrc: './img/people-start-booking-a-service-in-website-2.svg',
  },
  {
    title: 'Clean, tidy and economical 3',
    description: 'Here we have all the cleaning, sanitation, water delivery services you need.',
    imgSrc: './img/people-start-booking-a-service-in-website-2.svg',
  },
  {
    title: 'Clean, tidy and economical 4',
    description: 'Here we have all the cleaning, sanitation, water delivery services you need.',
    imgSrc: './img/people-start-booking-a-service-in-website-2.svg',
  },
  {
    title: 'Clean, tidy and economical 5',
    description: 'Here we have all the cleaning, sanitation, water delivery services you need.',
    imgSrc: './img/people-start-booking-a-service-in-website-2.svg',
  },
  // Thêm các slide khác vào đây
];

const SlideShow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slidesData.length - 1 ? 0 : prevSlide + 1));
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 2000); // Tự động chuyển slide sau 2 giây

    return () => {
      clearInterval(slideInterval); // Dọn dẹp interval khi component bị unmount
    };
  }, []);

  return (
    <div className="hero">
      <Slide {...slidesData[currentSlide]} />
    </div>
  );
};

export default SlideShow;
