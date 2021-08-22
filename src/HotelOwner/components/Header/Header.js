import React from "react";
import { NavLink,Button } from "react-bootstrap";
import { Link,useHistory } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

const Header = () => {

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
      
      </> 
    );
  }
  else{
    AuthButtons=(
      <>
      {/* <Link class="btn btn-warning me-2" to="/">Log Out</Link> */}
      
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
             
              <li className="nav-item">
                <Button type="button" onClick={logoutSubmit} className="btn btn-danger">Logout</Button>
              </li>
          </ul>
          
          {/* <Link class="btn btn-danger">Logout</Link> */}
      </>
 
    );
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" href="#">
            <h3>Descalzo</h3>
          </NavLink>

          {AuthButtons}
          
         
        </div>
      </nav>
    </div>
  );
};

export default Header;
