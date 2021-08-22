import React, { useState, useEffect } from "react";
import { Form, Container, Col, Row } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
const Profile = () => {
  const history = useHistory();
  // const [updateProfile, setUpdateProfile] = useState([]);
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState("");
  // const { name, username, email, phone, address, image } = updateProfile;
  // const handleInput = (e) => {
  //   e.persist();
  //   setUpdateProfile({ ...updateProfile, [e.target.name]: e.target.value });
  // };
  const loadUser = () => {
    const api = "http://127.0.0.1:8000/api/tourist";
    const token = localStorage.getItem("token");
    axios
      .get(api, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        // console.log(res.data);
        // var ide = res.data.id;
        setData(res.data);
        setName(res.data.name);
        setUsername(res.data.username);
        setEmail(res.data.email);
        setPhone(res.data.phone);
        setAddress(res.data.address);
        setImage(res.data.image);
      });
  };

  useEffect(() => {
    loadUser();
  }, []);
  return (
    <Container>
      <h1 className="text-center">Profile</h1>
      <Row>
        <Col sm={4} className="mt-3">
          <img
            src={"http://127.0.0.1:8000/" + data.image}
            alt="profile pic"
            class="img-fluid w-50"
          />
        </Col>
        <Col sm={8}>
          <Form className="form">
            <Form.Group controlId="formCategory1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" defaultValue={data.name} readOnly/>
            </Form.Group>
            <Form.Group controlId="formCategory1">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" defaultValue={data.username} readOnly/>
            </Form.Group>
            <Form.Group controlId="formCategory2">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" defaultValue={data.email} readOnly/>
            </Form.Group>
            <Form.Group controlId="formCategory1">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text" defaultValue={data.phone} readOnly/>
            </Form.Group>
            <Form.Group controlId="formCategory1">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" defaultValue={data.address} readOnly/>
            </Form.Group>

            <Link class="btn btn-danger d-block" to="/edit">
              Edit Profile
            </Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
