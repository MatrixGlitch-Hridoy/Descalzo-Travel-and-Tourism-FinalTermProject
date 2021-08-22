import React,{useState} from 'react';
import { Form, Button } from "react-bootstrap";
import { useHistory} from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";
const ForgotPassword = () => {
  const history = useHistory();
  const [forgotInput, setForgot] = useState({
    email: "",
  });

  const handleInput = (e) => {
    e.persist();
    setForgot({ ...forgotInput, [e.target.name]: e.target.value });
  };
  const forgotSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: forgotInput.email,
    };
  
  axios.post("http://127.0.0.1:8000/api/forgot-password",data).then((res) => {
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
        setForgot({ ...forgotInput, error_list: res.data.errors });
        console.log(res.data.errors);
      }
    });
  }
    return (
        <div>
            <div className="container">
        <div className="row text-center">
          <div className="col-sm-12">
            <h1>Forgot Password</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-sm-12">
            <Form onSubmit={forgotSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  onChange={handleInput}
                  value={forgotInput.email}
                  name="email"
                  placeholder="Enter email"
                />
              </Form.Group>
              <Button type="submit" variant="primary">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
        </div>
    );
};

export default ForgotPassword;