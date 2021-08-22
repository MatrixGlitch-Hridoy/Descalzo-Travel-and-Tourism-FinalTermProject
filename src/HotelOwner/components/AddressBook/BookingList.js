// import axios from 'axios';
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Home from "../Pages/Home";

const BookingList = () => {
const [users, setUsers] = useState([]);


  useEffect(() => {
    loadUser();
  }, []);

  // const loadUser = async () => {
  //   const result = await axios.get("http://localhost:3001/users");
  //   setUsers(result.data.reverse());
  // };
  const loadUser = async (e) => {
    let result = await fetch(`http://127.0.0.1:8000/api/AllHotel/show`, {
        method:'GET'
    });
    result = await result.json();
    //console.log(result);
    setUsers(result);
}
  // const deleteUser = async (id) => {
  //   await axios.delete(`http://localhost:3001/users/${id}`);
  //   loadUser();
  // }
  const deleteUser = async (id) =>{
    let result = await fetch(`http://127.0.0.1:8000/api/AllHotel/delete/${id}`,{
      method:'DELETE'
    });
    result = await result.json();
    loadUser();
  }
  return (
    
    <div className="row">
        <div className="col-sm-2">
        <Home/>
        </div>
        <div className="col-sm-10">
        <h1 class="mb-5">Hotel List</h1>
      <table class="table table-bordered border-primary">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">ADDRESS</th>
            <th scope="col">ACCOUNT</th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>{user.account}</td>
                <td>
                    <Link class="btn btn-primary me-2" to={`/AllHotel/${user.id}`}>View</Link>
                    <Link class="btn btn-warning me-2" to={`/AllHotel/edit/${user.id}`}>Edit</Link>
                    <Link class="btn btn-danger" onClick={()=>deleteUser(user.id)}>Delete</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
        </div>
      </div>
  );
};

export default BookingList;
