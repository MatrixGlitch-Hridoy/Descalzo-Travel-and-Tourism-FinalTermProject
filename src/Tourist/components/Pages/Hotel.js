import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Hotel = () => {
  const [hotels, setHotels] = useState([]);
  const loadUser = async () => {
    let result = await fetch("http://127.0.0.1:8000/api/show-hotel");
    result = await result.json();
    setHotels(result);
  };
  useEffect(() => {
    loadUser();
  }, []);
  return (
    <div>
      <div class="bg-lightpb-5">
        <section class="container px-5 pt-5">
          <h1 class="mb-4 text-center">Best-Hotels</h1>
          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {hotels.map((hotel) => {
              return (
                <>
                  <div class="col">
                    <div class="card border-0 shadow-lg h-100">
                        <img
                          src={"http://127.0.0.1:8000/" + hotel.image}
                          class="card-img-top img-fluid h-50"
                          alt="..."
                        /> 
                      <div class="card-body">
                        <h3 class="card-title">{hotel.name}</h3>
                        <p class="card-text">{hotel.description}</p>
                        <h5 class="text-danger">{hotel.offer}% OFF</h5>
                        <h3>Starting From <span class="text-danger">${hotel.price}/Night</span></h3>
                      </div>
                      <div class="m-3">
                        <Link class="btn panda-bg-btn" to={`rooms/${hotel.id}`}>
                          Show Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}

            {/* <div class="col">
              <div class="card border-0 shadow-lg h-100">
                <img
                  src="images/shoes/shoe-2.png"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Nike 360</h5>
                  <p class="card-text">
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <h2>$320</h2>
                </div>
                <div class="m-3">
                  <button class="btn panda-bg-btn">Buy Now</button>
                </div>
              </div>
            </div> */}
            {/* <div class="col">
              <div class="card border-0 shadow-lg h-100">
                <img
                  src="images/shoes/shoe-3.png"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Red Airmax</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional.
                  </p>
                  <h2>$350</h2>
                </div>
                <div class="m-3">
                  <button class="btn panda-bg-btn">Buy Now</button>
                </div>
              </div>
            </div> */}
          </div>
        </section>

        {/* <section class="container px-5 py-5">
          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            <div class="col">
              <div class="card border-0 shadow-lg h-100">
                <img
                  src="images/bags/bag-1.png"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Red Laltu Bag</h5>
                  <h6>$120</h6>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
                <div class="m-3">
                  <button class="btn panda-bg-btn">Buy Now</button>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card border-0 shadow-lg h-100">
                <img
                  src="images/bags/bag-2.png"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Blue Niltu Bag</h5>
                  <h6>$320</h6>
                  <p class="card-text">
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
                <div class="m-3">
                  <button class="btn panda-bg-btn">Buy Now</button>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card border-0 shadow-lg h-100">
                <img
                  src="images/bags/bag-3.png"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Black Kaltu Bag</h5>
                  <h6>$169</h6>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </p>
                </div>
                <div class="m-3">
                  <button class="btn panda-bg-btn">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </div>
    </div>
  );
};

export default Hotel;
