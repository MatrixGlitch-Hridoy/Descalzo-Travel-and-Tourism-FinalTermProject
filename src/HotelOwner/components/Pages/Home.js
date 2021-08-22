import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './Home.css'
const Home = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     loadUser();
//   }, []);

//   // const loadUser = async () => {
//   //   const result = await axios.get("http://localhost:3001/users");
//   //   setUsers(result.data.reverse());
//   // };
//   const loadUser = async (e) => {
//     let result = await fetch(`http://localhost:3001/users/`, {
//         method:'GET'
//     });
//     result = await result.json();
//     // console.log(result);
//     setUsers(result.reverse());
// }
//   // const deleteUser = async (id) => {
//   //   await axios.delete(`http://localhost:3001/users/${id}`);
//   //   loadUser();
//   // }
//   const deleteUser = async (id) =>{
//     let result = await fetch(`http://localhost:3001/users/${id}`,{
//       method:'DELETE'
//     });
//     result = await result.json();
//     loadUser();
//   }
  return (
    <>
      {/* <h1 className="mb-5">Home Page</h1>
      <table className="table table-bordered border-primary">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                    <Link className="btn btn-primary me-2" to={`/user/${user.id}`}>View</Link>
                    <Link className="btn btn-warning me-2" to={`/user/edit/${user.id}`}>Edit</Link>
                    <Link className="btn btn-danger" onClick={()=>deleteUser(user.id)}>Delete</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table> */}
      <nav className="navbar navbar-expand d-flex flex-column align-items-start min-vh-100" id="sidebar">
      <Link to="/home" className="navbar-brand text-light">
            <div className="display-6 font-weight-bold">Dashboard</div>
        </Link>
        <ul className="navbar-nav d-flex flex-column">
            <li className="nav-item w-100">
                <Link to="/guide/show" className="nav-link text-light pl-4">Guide</Link>
            </li>
            <li className="nav-item w-100">
                <Link href="#" className="nav-link zckshiusjdtext-light pl-4">Tourist</Link>
            </li>
            
            <li className="nav-item w-100">
                <Link to="/maintaince/show" className="nav-link text-light pl-4">Guest Bookings</Link>
            </li>
            <li className="nav-item w-100">
                <Link to="/AllHotel/show" className="nav-link text-light pl-4">Bookings</Link>
            </li>
            <li className="nav-item w-100">
                <Link to="/SalesDetails/show" className="nav-link text-light pl-4">SalesDetails</Link>
            </li>
            <li className="nav-item w-100">
                <Link to="/maintaince/show" className="nav-link text-light pl-4">Maintainance</Link>
            </li>
            <li className="nav-item w-100">
                <Link to="/AllHotel/show" className="nav-link text-light pl-4">AllHotel</Link>
            </li>
            <li className="nav-item w-100">
                <Link to="/adHotel/show" className="nav-link text-light pl-4">HotelCategories</Link>
            </li>
            <li className="nav-item w-100">
                <Link to="/report/show" className="nav-link text-light pl-4">Support</Link>
            </li>
            <li className="nav-item w-100">
                <Link to="support/show" className="nav-link text-light pl-4">Report</Link>
            </li>
            <li className="nav-item dropdown w-100">
                <Link href="#" className="nav-link dropdown-toggle text-light pl-4" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">Service</Link>
                <ul className="dropdown-menu w-100" aria-labelledby="navbarDropdown">
                    <li><Link href="#" className="dropdown-item text-light pl-4 p-2">Service 01</Link></li>
                    <li><Link href="#" className="dropdown-item text-light pl-4 p-2">Service 02</Link></li>
                    <li><Link href="#" className="dropdown-item text-light pl-4 p-2">Service 03</Link></li>
                </ul>
            </li>
            <li className="nav-item w-100">
                <a href="#" className="nav-link text-light pl-4">Contact</a>
            </li>
        </ul>
    </nav>

    </>
  );
};

export default Home;
