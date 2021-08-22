import React, { useState, useEffect } from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";

const Edit = () => {
  const history = useHistory();
  // const [updateProfile, setUpdateProfile] = useState([]);
  const [data, setData] = useState([]);
  // {
  //   name: "",
  //   username: "",
  //   email: "",
  //   phone: "",
  //   address: "",
  //   image: "",
  //   error_list: [],
  // }
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
  const UpdateSubmit = async (e) => {
    e.preventDefault();
    // const data={
    //   name:updateProfile.name,
    //   username:updateProfile.username,
    //   email:updateProfile.email,
    //   password: updateProfile.password,
    // }
    // console.log(data);
    // setRedirect(true);
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");
    const formData = new FormData();
    formData.append("name", name);
    formData.append("username", username);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("image", image);
    await axios
      .post(`http://127.0.0.1:8000/api/tourist/${id}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        if (res.data.success === true) {
          console.log(res.data);

          swal("Success", res.data.message, "success");
          history.push("/profile");
        } else {
          setData({ ...data, error_list: res.data.errors });
          console.log(res.data.errors);
        }
      });
  };
  return (

    <Container>
      <h1 className="text-center">Edit Profile</h1>
      <Row>
        <Col sm={4} className="mt-3">
        <img
            src={"http://127.0.0.1:8000/" + data.image}
            alt="profile pic"
            class="img-fluid w-50"
          />
        </Col>
        <Col sm={8}>
          <Form onSubmit={UpdateSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control
                type="text"
                onChange={(e) => setName(e.target.value)}
                defaultValue={data.name}
                name="name"
                placeholder="Enter Name"
              />
              {/* <span class="text-danger">{updateProfile.error_list[0]}</span> */}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicUName">
              <Form.Control
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                defaultValue={data.username}
                name="username"
                placeholder="Enter User Name"
              />
              {/* <span class="text-danger">{updateProfile.error_list[1]}</span> */}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                defaultValue={data.email}
                name="email"
                placeholder="Enter email"
              />
              {/* <span class="text-danger">{updateProfile.error_list[2]}</span> */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="text"
                onChange={(e) => setPhone(e.target.value)}
                defaultValue={data.phone}
                name="phone"
                placeholder="phone"
              />
              {/* <span class="text-danger">{updateProfile.error_list[3]}</span> */}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="text"
                onChange={(e) => setAddress(e.target.value)}
                defaultValue={data.address}
                name="address"
                placeholder="address"
              />
              {/* <span class="text-danger">{updateProfile.error_list[3]}</span> */}
            </Form.Group>
            <div className="form-controls">
              <input
                type="file"
                name="image"
                defaultValue={data.image}
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
            {/* <Form.Group controlId="formFile" className="mb-3">
                <Form.Control name="image" type="file" onChange={(e)=>setUpdateProfile(e.target.files[0])} />
              </Form.Group> */}

            <div class="d-grid gap-2 d-block">
              <button class="btn btn-success" type="submit">
                Update Profile
              </button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Edit;
