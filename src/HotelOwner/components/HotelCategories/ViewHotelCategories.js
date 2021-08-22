// import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { Button } from "react-bootstrap";
import Home from "../Pages/Home";
const ViewHotelCategories= () => {
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    rooms: "",
    price: "",
   

  });
  const { name, address, email, phone,rooms,price } = user;
  //   const onInputChange = (e) => {
  //     setUser({ ...user, [e.target.name]: e.target.value });
  //   };
  useEffect(() => {
    loadUser();
    },[]);
  //   const loadUser = async (e) => {
  //     const result = await axios.get(`http://localhost:3001/users/${id}`);
  //     // console.log(result);
  //     setUser(result.data);
  //   };

  const loadUser = async (e) => {
    let result = await fetch(`http://127.0.0.1:8000/api/adHotel/singleShow/${id}`, {
      method: "GET",
    });

    result = await result.json();
    console.log(result);
    setUser(result.data);
  };
  return (
    <>
      


      <div className="row">
        <div className="col-sm-2">
        <Home/>
        </div>
        <div className="col-sm-10">
      
        <h1 className="mb-5">View HotelCategories</h1>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form>
              <div class="mb-3">
                <input
                  type="text"
                  name="name"
                  value={name}
                  class="form-control"
                  placeholder="Enter Name"
                  readOnly
                  // onChange={(e) => onInputChange(e)}
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  name="address"
                  value={address}
                  class="form-control"
                  placeholder="Enter User Name"
                  readOnly
                  // onChange={(e) => onInputChange(e)}
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  name="email"
                  value={email}
                  class="form-control"
                  placeholder="Enter Email"
                  readOnly
                  // onChange={(e) => onInputChange(e)}
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  name="phone"
                  value={phone}
                  class="form-control"
                  placeholder="Enter Phone Number"
                  readOnly
                  // onChange={(e) => onInputChange(e)}
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  name="address"
                  value={rooms}
                  class="form-control"
                  placeholder="Enter rooms Name"
                  readOnly
                  // onChange={(e) => onInputChange(e)}
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  name="quality"
                  value={price}
                  class="form-control"
                  placeholder="Enter price Name"
                  readOnly
                  // onChange={(e) => onInputChange(e)}
                />
              </div>
            </form>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default ViewHotelCategories;
