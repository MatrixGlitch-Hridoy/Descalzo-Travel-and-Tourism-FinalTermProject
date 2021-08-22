import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
const ViewSingleRoom = () => {
  const { id } = useParams();
  const [hotels, setHotels] = useState([]);
  const loadUser = async () => {
    let result = await fetch(
      `http://127.0.0.1:8000/api/show-single-room/${id}`
    );
    result = await result.json();
    setHotels(result.data);
    // console.log(hotels);
  };
  useEffect(() => {
    loadUser();
  }, []);
  return (
    <div className="container mt-5">
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={"http://127.0.0.1:8000/" + hotels.room_image}
              class="card-img-top img-fluid"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h2 class="card-title">{hotels.type}</h2>
              <p class="card-text">{hotels.room_description}</p>
            </div>
            <div class="ms-3">
            <h2 class="text-danger d-inline "><del>${hotels.room_offer}</del></h2>
                        <h2 class="ms-2 d-inline">${hotels.room_price}/Night</h2>
            </div>
            <div class="m-3">
              <Link class="btn panda-bg-btn mt-5" to={`booking/${hotels.id}`}>
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewSingleRoom;
