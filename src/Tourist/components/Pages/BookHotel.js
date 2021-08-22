import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import swal from "sweetalert";
import axios from "axios";
const BookHotel = () => {
  const token = localStorage.getItem("token");
  const u_id = localStorage.getItem("id");
  const { id } = useParams();
  const history = useHistory();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      swal("Warning", "Please Login First", "warning");
      history.push("/login");
    }
  }, []);

  //Fetching data from two different table
  const [userData, setUserData] = useState([]);
  const [RoomData, setRoomData] = useState([]);
  const loadData = () => {
    const userApi = "http://127.0.0.1:8000/api/tourist";
    const roomApi = `http://127.0.0.1:8000/api/show-single-room/${id}`;
    const token = localStorage.getItem("token");

    const getUser = axios.get(userApi, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const getRoom = axios.get(roomApi, {
      headers: { Authorization: `Bearer ${token}` },
    });
    axios.all([getUser, getRoom]).then(
      axios.spread((...allData) => {
        const allUserData = allData[0].data;
        const allRoomData = allData[1].data.data;

        setUserData(allUserData);
        setRoomData(allRoomData);
        // console.log(allRoomData);
        console.log(allUserData);
      })
    );
  };
  useEffect(() => {
    loadData();
  }, []);

  const [book, setBook] = useState({
    r_id: id,
    u_id: u_id,
    checkin: "",
    checkout: "",
  });
  const { checkin, checkout } = book;
  const onInputChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`http://127.0.0.1:8000/api/booking/`, book, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        if (res.data.success === true) {
          console.log(res.data);

          swal("Booked", res.data.message, "success");
          history.push("/my-bookings");
        } else {
          setBook({ ...book, error_list: res.data.errors });
          console.log(res.data.errors);
        }
      });
  };
  return (
    <div>
      <Container>
        <h1 className="text-center">Checkout</h1>
        <Row>
          <Col sm={12}>
            <form onSubmit={onSubmit} class="row g-3">
              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">
                  Name
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail4"
                  name="name"
                  defaultValue={userData.name}
                  readOnly
                />
              </div>
              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">
                  User Name
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail4"
                  defaultValue={userData.username}
                  readOnly
                />
              </div>
              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail4"
                  defaultValue={userData.email}
                  readOnly
                />
              </div>
              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">
                  Phone
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail4"
                  defaultValue={userData.phone}
                  readOnly
                />
              </div>
              <div class="col-12">
                <label for="inputAddress" class="form-label">
                  Address
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
                  defaultValue={userData.address}
                  readOnly
                />
              </div>
              <div class="col-md-6">
                <label for="inputcheckin" class="form-label">
                  Check In
                </label>
                <input
                  type="date"
                  name="checkin"
                  class="form-control"
                  id="inputcheckin"
                  defaultValue={checkin}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div class="col-md-6">
                <label for="inputcheckout" class="form-label">
                  Check Out
                </label>
                <input
                  type="date"
                  name="checkout"
                  class="form-control"
                  id="inputcheckout"
                  defaultValue={checkout}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">
                  Room Type
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail4"
                  defaultValue={RoomData.type}
                  readOnly
                />
              </div>
              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">
                  Price
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail4"
                  defaultValue={RoomData.room_price}
                  readOnly
                />
              </div>
              <button type="submit" class="btn btn-danger d-block">
                Book Hotel
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BookHotel;
