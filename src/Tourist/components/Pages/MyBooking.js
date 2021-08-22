import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import swal from "sweetalert";
const MyBooking = () => {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");
    const [bookings, setBookings] = useState([]);

  useEffect(() => {
    loadUser();
  }, []);

  // const loadUser = async () => {
  //   const result = await axios.get("http://localhost:3001/users");
  //   setUsers(result.data.reverse());
  // };
  const loadUser = async (e) => {
    let result = await fetch(`http://127.0.0.1:8000/api/booking-details/${id}`, {
        header:{ Authorization: `Bearer ${token}` },
        method:'GET'
    });
    result = await result.json();
    console.log(result);
    setBookings(result);
}
  const deleteUser = async (id) => {
    await axios.delete(`http://127.0.0.1:8000/api/booking-cancel/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        if (res.data.success === true) {
          swal("Cancelled", res.data.message, "warning");
          
      }});
      loadUser();
}
//   const deleteUser = async (id) =>{
//     let result = await fetch(`http://127.0.0.1:8000/api/booking-cancel/${id}`,{
//         header:{ Authorization: `Bearer ${token}` },
//         method:'DELETE'
//     });
//     result = await result.json();
//     loadUser();
//   }
  return (
    <>

    
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
        <h1 class="mb-5 text-center">My Bookings</h1>
      <table class="table table-bordered border-primary">
        <thead class="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Room Type</th>
            <th scope="col">Room Details</th>
            <th scope="col">Price</th>
            <th scope="col">Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((user, index) => {
            return (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.type}</td>
                <td>{user.room_description}</td>
                <td>{user.room_price}</td>
                <td className="w-25">
                <div class="w-25 mx-auto">
                <img src={"http://127.0.0.1:8000/" + user.room_image} alt="image" class="img-fluid" />
              </div>
              </td>
                <td>
                    {/* <Link class="btn btn-primary me-2" to={`/user/${user.id}`}>Details</Link> */}
                    <Link class="btn btn-danger " onClick={()=>deleteUser(user.id)}>Cancel Booking</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
        </div>
      </div>
      
    </div>
    </>
  );
};

export default MyBooking;
