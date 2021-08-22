import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../images/travel.jpg';
import img2 from '../../images/travel1.jpg';
import img3 from '../../images/travel2.jpg';

const Slider = () => {
    return (
        <div>
          
            <div class="panda-slider">
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner panda-bg-carousel">
              <div class="carousel-item active "data-bs-interval="3000">
                <div class="row d-flex align-items-center p-5">
                  <div class="col-lg-7">
                    <h1 class="mb-5">
                    “Travel makes one modest, you see what a tiny place you occupy in the world.”
                    </h1>
                    <button class="btn panda-bg-btn">Book Now</button>
                  </div>
                  <div class="col-lg-5">
                    <img
                      src={img1}
                      class="d-block w-100 img-fluid"
                      alt="tv"
                    />
                  </div>
                </div>
              </div>
              <div class="carousel-item"data-bs-interval="3000">
                <div class="row d-flex align-items-center p-5">
                  <div class="col-lg-7">
                    <h1 class="mb-5">
                    “Travel is  fatal to prejudice, bigotry, and narrow mindedness, and many of our people need it sorely on these accounts.”
                    </h1>
                    <button class="btn panda-bg-btn">Book Now</button>
                  </div>
                  <div class="col-lg-5">
                    <img
                      src={img2}
                      class="d-block w-100 img-fluid"
                      alt="tv"
                    />
                  </div>
                </div>
              </div>
              <div class="carousel-item"data-bs-interval="3000">
                <div class="row d-flex align-items-center p-5">
                  <div class="col-lg-7">
                    <h1 class="mb-5">
                    "Feel free to pin, download, and print them off to put up around your house for inspiration."
                    </h1 >
                    <button class="btn panda-bg-btn">Book Now</button>
                  </div>
                  <div class="col-lg-5">
                    <img
                      src={img3}
                      class="d-block w-100 img-fluid"
                      alt="tv"
                    />
                  </div>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        
        </div>
    );
};

export default Slider;