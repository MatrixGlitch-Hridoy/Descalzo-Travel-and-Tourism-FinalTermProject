import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Slider from "./Slider";
import Hotel from "./Hotel";
import NewsLetter from "./NewsLetter";
import './Home.css';
import Footer from "./Footer";
// import { Image,Carousel } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

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

        <Slider/>
        <Hotel/>
        <NewsLetter/>
        <Footer/>
        {/* <div className="row">
          <div className="col-sm-12">
          </div>
        </div> */}
        {/* <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 img-fluid"
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> */}

    </>
  );
};

export default Home;
