import React from 'react';
import { NavLink, Button } from "react-bootstrap";
import { Link, useHistory, Redirect } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
const Navbar = () => {
  const history = useHistory();
  const logoutSubmit = (e)=>{
    e.preventDefault();
    axios.post("http://127.0.0.1:8000/api/logout").then((res) =>{
      if(res.data.success===true)
      {
        localStorage.removeItem("token");
        swal("Logout", res.data.message, "success");
        history.push("/");
        // <Redirect to="/"/>
      }
    });
  }

  var AuthButtons = '';
  if(!localStorage.getItem('token'))
  {
    AuthButtons=(
      <>
      <Link class="btn btn-warning me-2" to="/login">Log In</Link>
      <Link class="btn btn-success" to="/register">Register</Link> 
      </> 
    );
  }
  else{
    AuthButtons=(
      <>
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" to="/profile">
                  Profile
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/my-bookings">
                  My Bookings
                </Link>
              </li>
              <li class="nav-item">
                <Button type="button" onClick={logoutSubmit} className="btn btn-danger">Logout</Button>
              </li>
          </ul>
          
          {/* <Link class="btn btn-danger">Logout</Link> */}
      </>

    );
  }

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <NavLink class="navbar-brand" href="#">
            Descalzo
          </NavLink>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" to="/">
                  Home
                </Link>
              </li>
            </ul>
          </div>
          {AuthButtons}
        </div>
      </nav>
        </div>
    );
};

export default Navbar;