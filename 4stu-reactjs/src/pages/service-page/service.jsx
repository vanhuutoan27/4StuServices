import React, { useContext, useEffect } from 'react';
import { Session } from '../../App';

import NavBar from '../../components/navbar';
import './service.css';

function Service() {

  useEffect(() => {
    const product = [
      {
        id: 0,
        image: './img/Logo.svg',
        title: 'Service Name 1',
        price: 120,
      },
      {
        id: 1,
        image: './img/Logo.svg',
        title: 'Service Name 2',
        price: 60,
      },
      {
        id: 2,
        image: './img/Logo.svg',
        title: 'Service Name 3',
        price: 230,
      },
      {
        id: 3,
        image: './img/Logo.svg',
        title: 'Service Name 4',
        price: 100,
      },
      {
        id: 4,
        image: './img/Logo.svg',
        title: 'Service Name 5',
        price: 230,
      },
      {
        id: 5,
        image: './img/Logo.svg',
        title: 'Service Name 6',
        price: 100,
      },
      {
        id: 6,
        image: './img/Logo.svg',
        title: 'Service Name 7',
        price: 200,
      },
      {
        id: 7,
        image: './img/Logo.svg',
        title: 'Service Name 8',
        price: 50,
      },
      {
        id: 8,
        image: './img/Logo.svg',
        title: 'Service Name 9',
        price: 500,
      },
    ];

    const categories = [
      ...new Set(
        product.map((item) => {
          return item;
        })
      ),
    ];

    document.getElementById('searchBar').addEventListener('keyup', (e) => {
      const searchData = e.target.value.toLowerCase();
      const filteredData = categories.filter((item) => {
        return item.title.toLowerCase().includes(searchData);
      });
      displayItem(filteredData);
    });

    const displayItem = (items) => {
      document.getElementById('service-list').innerHTML = items
        .map((item) => {
          var { image, title, price } = item;
          return `<div class='box'>
                      <div class='img-box'>
                          <img class='images' src=${image}></img>
                      </div> 
                      <div class='bottom'>
                          <p>${title}</p>
                          <h2>${price}.000 VND</h2>
                      <button className="view-details">View Details</button>
                      </div>
                  </div>
                  `;
        })
        .join('');
    };
    displayItem(categories);
  }, []);

  return (
    <div>
      <div id="root">
        <NavBar />

        {/* <div class="hero">
          <div class="content">
            <div class="hero-content">
              <div class="info">
                <p class="sub-title">Welcome to 4Stu Website!</p>
                <h1 class="title">Clean, tidy and economical</h1>
                <p class="desc">
                  Here we have all the cleaning, sanitation, water delivery services you need.
                </p>
                <a href="service.html" class="btn hero-cta cta">
                  Start Booking NOW <i class="fa-solid fa-arrow-right"></i>
                </a>
              </div>

              <img
                src="./img/people-start-booking-a-service-in-website-2.svg"
                alt="Clean, tidy and economical"
                class="hero-img"
              />
            </div>
          </div>
        </div> */}

        <div class="content">
          <div class="container">
            <div class="sidebar">
              <div class="sidehead">
                <div class="sidehead-header">
                  <img class="sidehead-logo" src="./img/Logo.svg" alt="" />
                  <h2>4Stu</h2>
                </div>
                <hr />
              </div>
              <div class="sidebody">
                <div class="searchBar">
                  <input placeholder="Search..." id="searchBar" name="searchBar" type="text" />
                  <i class="fa-solid fa-magnifying-glass glass" id="btn"></i>
                </div>
              </div>
              <div class="sidefoot">
                <hr />
              </div>
            </div>
            <div class="data">
              <div class="data-top">
                <p>+084123456789</p>
                <p>toanvhse171981@fpt.edu.vn</p>
              </div>
              <div class="data-header">
                <p>BOOK SERVICE ONLINE</p>
              </div>
              <div class="data-body">
                <div id="service-list"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
