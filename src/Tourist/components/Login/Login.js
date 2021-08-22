import React, { useState,useEffect } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { Link,useHistory} from "react-router-dom";
import swal from "sweetalert";

const Login = () => {
  const history = useHistory();
  useEffect(()=>{
    if(localStorage.getItem("token"))
    {
      history.push('/')
    }
  },[]);
 
  const [loginInput, setLogin] = useState({
    email: "",
    password: "",
    error_list: [],
  });

  const handleInput = (e) => {
    e.persist();
    setLogin({ ...loginInput, [e.target.name]: e.target.value });
  };
  const loginSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: loginInput.email,
      password: loginInput.password,
    };
    axios.post("http://127.0.0.1:8000/api/login", data).then((res) => {
      console.log(res.data);

      if (res.data.success === true) {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("id", res.data.user.id);

        swal("Success", res.data.message, "success");
        history.push("/profile");
      } 
      else if(res.data.success === false)
      {
        swal("Opps!", res.data.message, "warning");
      }
      else {
        setLogin({ ...loginInput, error_list: res.data.errors });
        console.log(res.data.errors);
      }
    });
  };
  return (
    <>
      <div className="container">
        <div className="row text-center">
          <div className="col-sm-12">
            <h1>Login</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-sm-12">
            <Form onSubmit={loginSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  onChange={handleInput}
                  value={loginInput.email}
                  name="email"
                  placeholder="Enter email"
                />
                <span class="text-danger">{loginInput.error_list[0]}</span>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  onChange={handleInput}
                  value={loginInput.password}
                  name="password"
                  placeholder="Password"
                />
                <span class="text-danger">{loginInput.error_list[1]}</span>
              </Form.Group>
              <Button type="submit" variant="primary">
                Login
              </Button>
              <span>forgot password</span>
              <Link to="/forgot">Click Here</Link>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
