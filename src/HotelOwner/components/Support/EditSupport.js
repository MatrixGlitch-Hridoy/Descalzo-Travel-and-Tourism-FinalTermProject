import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import swal from "sweetalert";
import Home from "../Pages/Home";
const Edit = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    quality: "",
  });
  const { name, address, email, phone, quality } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    loadUser();
  }, []);
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`http://127.0.0.1:8000/api/guide/update/${id}`, user).then((res)=>{
      swal("Success",res.data.message, "success");
      history.push("/guide/show");
    })
    
  };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     let result = await fetch(`http://localhost:3001/users/${id}`,{
//         method:'put'
//     });
    
//     result = await result.json();
//     console.log(setUser(result));
//     // history.push("/");
//   };
//   const loadUser = async (e) => {
//     const result = await axios.get(`http://localhost:3001/users/${id}`);
//     setUser(result.data);
//   };
  const loadUser = async (e) => {
    let result = await fetch(`http://127.0.0.1:8000/api/guide/show/${id}`,{
        method:'GET'
    });
    
    result = await result.json();
    // console.log(result);
    setUser(result.data);
}
  return (
   

<div className="row">
<div className="col-sm-2">
<Home/>
</div>
<div className="col-sm-10">
<h1 className="mb-5">Edit Guide</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={(e) => onSubmit(e)}>
            <div class="mb-3">
              <input
                type="text"
                name="name"
                value={name}
                class="form-control"
                placeholder="Enter Name"
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                name="address"
                value={address}
                class="form-control"
                placeholder="Enter User Name"
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                name="email"
                value={email}
                class="form-control"
                placeholder="Enter Email"
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                name="phone"
                value={phone}
                class="form-control"
                placeholder="Enter Phone Number"
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                name="quality"
                value={quality}
                class="form-control"
                placeholder="Enter quality"
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" class="btn btn-warning text-center">
              Edit
            </button>
          </form>
        </div>
      </div>
</div>
</div>
  );
};

export default Edit;
