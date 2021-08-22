import React,{useState} from 'react';
import { Form, Button } from "react-bootstrap";
import { useHistory} from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";
const ResetPassword = () => {

  const history = useHistory();
  const [resetInput, setReset] = useState({
    token:"",
    email: "",
    password:"",
  });

  const handleInput = (e) => {
    e.persist();
    setReset({ ...resetInput, [e.target.name]: e.target.value });
  };
  const resetSubmit = (e) => {
    e.preventDefault();
    const data = {
      token: resetInput.token,
      email: resetInput.email,
      password: resetInput.password,
    };
  
  axios.post("http://127.0.0.1:8000/api/reset-password",data).then((res) => {
      console.log(res.data);
      if (res.data.success === true) {
        console.log(res.data);

        swal("Success", res.data.message, "success");
        history.push("/login");
      } 
      else if(res.data.success === false)
      {
        swal("Opps!", res.data.message, "warning");
      }
      else {
        setReset({ ...resetInput, error_list: res.data.errors });
        console.log(res.data.errors);
      }
    });
  }
    return (
        <div>
            <div className="container">
        <div className="row text-center">
          <div className="col-sm-12">
            <h1>Reset Password</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-sm-12">
            <Form onSubmit={resetSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control 
                type="text" 
                  onChange={handleInput}
                  value={resetInput.token}
                  name="token"
                 placeholder="Pin Code" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  onChange={handleInput}
                  value={resetInput.email}
                  name="email"
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="text"
                  onChange={handleInput}
                  value={resetInput.password}
                  name="password"
                  placeholder="New Password"
                />
              </Form.Group>
              <Button type="submit" variant="primary">
                Reset Password
              </Button>
            </Form>
          </div>
        </div>
      </div>
        </div>
    );
};

export default ResetPassword;