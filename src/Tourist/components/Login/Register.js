import React,{ useState,useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import {useHistory} from "react-router-dom";
import swal from 'sweetalert';

// import Header from "../Header";
import axios from "axios";
const Register = () => {
    // const [redirect,setRedirect]= useState(false);
    const history=useHistory();
    useEffect(()=>{
      if(localStorage.getItem("token"))
      {
        history.push('/')
      }
    },[]);
    
    const [register, setRegister] = useState({
      name:'',
      username:'',
      email:'',
      password:'',
      error_list:[],
     
    });
    
    const handleInput = (e) =>{
      e.persist();
      setRegister({...register,[e.target.name]:e.target.value});
    }
    const registerSubmit= (e)=> {
      e.preventDefault();
      const data={
        name:register.name,
        username:register.username,
        email:register.email,
        password: register.password,
      }   
      console.log(data);     
        // setRedirect(true);
        axios.post('http://127.0.0.1:8000/api/register',data).then(res=>{
          console.log(res.data);
         if (res.data.success===true) {
           console.log(res.data)
          
           swal("Registered!",res.data.message,"success");
           history.push('/login');
         }
         else 
         {
          setRegister({...register,error_list:res.data.errors});
          console.log(res.data.errors)
         }
        });
  }
    // if(redirect){
    //   return <Redirect to="/login"/>;
    // }
    

  return (
    <>
      <div className="container">
        <div className="row text-center">
          <div className="col-sm-12">
            <h1>Sign-Up</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-sm-12">
            <Form onSubmit={registerSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control type="text" onChange={handleInput} value={register.name} name="name" placeholder="Enter Name" />
                <span class="text-danger">{register.error_list[0]}</span>
                
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicUName">
                <Form.Control type="text" onChange={handleInput} value={register.username} name="username" placeholder="Enter User Name" />
                <span class="text-danger">{register.error_list[1]}</span>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" onChange={handleInput} value={register.email} name="email" placeholder="Enter email" />
                <span class="text-danger">{register.error_list[2]}</span>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" onChange={handleInput} value={register.password} name="password" placeholder="Password" />
                <span class="text-danger">{register.error_list[3]}</span>
              </Form.Group>
              <Button variant="primary" type="submit">
                Sign Up
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
