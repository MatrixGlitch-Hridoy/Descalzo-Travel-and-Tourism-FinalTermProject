import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const AddMantainance = () => {
    let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    duration: "",
    quality: "",
  });
  const {name,address,email,phone,duration,quality} = user;
  const onInputChange = (e) => {
     setUser({...user,[e.target.name]:e.target.value})
  }
  const onSubmit = async (e)=>{
      e.preventDefault();
      await axios.post("http://127.0.0.1:8000/maintaince/guide",user);
      history.push('/maintaince/list');
  }
  return (
    <div class="container">
      <h1 className="mb-5">Add user</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={(e)=>onSubmit(e)}>
            <div class="mb-3">
              <input
                type="text"
                name="name"
                value={name}
                class="form-control"
                placeholder="Enter Name"
                onChange={(e)=>onInputChange(e)}
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                name="address"
                value={address}
                class="form-control"
                placeholder="Enter address"
                onChange={(e)=>onInputChange(e)}
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                name="email"
                value={email}
                class="form-control"
                placeholder="Enter Email"
                onChange={(e)=>onInputChange(e)}
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                name="phone"
                value={phone}
                class="form-control"
                placeholder="Enter Phone Number"
                onChange={(e)=>onInputChange(e)}
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                name="duration"
                value={duration}
                class="form-control"
                placeholder="Enter duration hour"
                onChange={(e)=>onInputChange(e)}
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                name="quality"
                value={quality}
                class="form-control"
                placeholder="Enter quality"
                onChange={(e)=>onInputChange(e)}
              />
            </div>
            <button type="submit" class="btn btn-primary">
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMantainance;
