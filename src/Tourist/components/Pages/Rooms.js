import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link,useParams } from "react-router-dom";

const Rooms = () => {
const { id } = useParams();
  const [rooms, setRooms] = useState([]);
  const [hotels, setHotels] = useState([]);
  // const loadUser = async () => {
  //   let result = await fetch(`http://127.0.0.1:8000/api/show-room/${id}`);
  //   result = await result.json();
  //   setRooms(result);
  //   console.log(rooms);
  // };
  const loadData = () => {
    const roomsApi = `http://127.0.0.1:8000/api/show-room/${id}`;
    const hotelsApi = `http://127.0.0.1:8000/api/show-single-hotel/${id}`;
    const token = localStorage.getItem("token");

    const getRooms = axios.get(roomsApi, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const getHotel = axios.get(hotelsApi, {
      headers: { Authorization: `Bearer ${token}` },
    });
    axios.all([getRooms, getHotel]).then(
      axios.spread((...allData) => {
        const allRoomData = allData[0].data;
        const allHotelData = allData[1].data.data;

        setRooms(allRoomData);
        setHotels(allHotelData);
        console.log(allHotelData);
        console.log(allRoomData);
      })
    );
  };
  useEffect(() => {
    loadData();
  }, []);
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
                    <h1>{hotels.name}</h1>
                    <p>
                      {hotels.description}
                    </p>
                    <h3>Starting From <span class="text-danger">${hotels.price}/Night</span></h3>
                    <h5 class="text-danger">Book Today To Get {hotels.offer}% OFF</h5>
                    <button class="btn panda-bg-btn mt-5">Book Now</button>
                  </div>
                  <div class="col-lg-5">
                    <img
                      src={"http://127.0.0.1:8000/" + hotels.image}
                      class="d-block w-100"
                      alt="tv"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      <div class="mt-5 mb-5">
        <section class="container">
          <h1 class="text-center">Rooms</h1>
          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {rooms.map((room) => {
              return (
                <>
                  <div class="col">
                    <div class="card border-0 shadow-lg h-100">
                      <img
                        src={"http://127.0.0.1:8000/" + room.room_image}
                        class="card-img-top img-fluid h-50"
                        alt="..."
                      />
                      <div class="card-body">
                        <h3 class="card-title">{room.type}</h3>
                        <p class="card-text">
                          {room.room_description}
                        </p>
                        <h2 class="text-danger d-inline"><del>${room.room_offer}</del></h2>
                        <h2 class="ms-2 d-inline">${room.room_price}/Night</h2>
                      </div>
                      <div class="m-3">
                        <Link class="btn panda-bg-btn" to={`view-room/${room.id}`}>View Room</Link>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </div>

      <section class="contact wrapper mt-5 mb-5">
        <div class="container">
          <div class="row text-center">
            <div class="col-sm-12 mb-5">
              <h1>Contact Us</h1>
            </div>
          </div>

          <div class="row mt-1">
            <div class="col-lg-4">
              <div class="info">
                <div class="address mb-4 mt-md-3">
                  <i class="fas fa-map-marker-alt"></i>
                  <h4>Location:</h4>
                  <p>{hotels.address}</p>
                </div>

                <div class="email mb-4 mt-2">
                  <i class="fas fa-envelope"></i>
                  <h4>Email:</h4>
                  <p>{hotels.email}</p>
                </div>

                <div class="phone mt-2">
                  <i class="fas fa-mobile-alt"></i>
                  <h4>Phone:</h4>
                  <p>{hotels.phone}</p>
                </div>
              </div>
            </div>

            <div class="col-lg-8 mt-5 mt-lg-0">
              <form
              >
                <div class="row">
                  <div class="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div class="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div class="form-group mt-3">
                  <input
                    type="text"
                    class="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div class="form-group mt-3">
                  <textarea
                    class="form-control"
                    name="message"
                    rows="5"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div class="text-center mt-5">
                  <button class="btn btn-success border-0 rounded">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rooms;
