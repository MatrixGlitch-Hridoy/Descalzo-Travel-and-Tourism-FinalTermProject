import React,{useState,useEffect} from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "../Login/Login";
import Home from "../Pages/Home";
import Register from "../Login/Register";
import ForgotPassword from "../Pages/ForgotPassword";
import Profile from "../Pages/Profile";
import ResetPassword from "../Pages/ResetPassword";
import Protected from "../Pages/Protected";
import Auth from "../Login/Auth";
import Edit from "../Pages/Edit";
import Rooms from "../Pages/Rooms";
import ViewSingleRoom from "../Pages/ViewSingleRoom";
import BookHotel from "../Pages/BookHotel";
import MyBooking from "../Pages/MyBooking";

const Header = () => {
//   const [user, setUser] = useState({});
//   useEffect(() => {
//     loadUser();
//   }, []);


// const loadUser = async (e) => {
//   let result = await fetch(`http://127.0.0.1:8000/api/tourist`,{
//       method:'GET'
//   });
  
//   result = await result.json();
//   console.log(result.data);
//   setUser(result.data);
  
// }
  return (
    <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/forgot" component={ForgotPassword} />
          {/* <Route exact path="/rooms/:id" component={Rooms} /> */}

          <Route  path="/rooms/">  
              <Route exact path="/rooms/:id" component={Rooms} />
              <Route exact path="/rooms/view-room/:id" component={ViewSingleRoom} />
              <Route exact path="/rooms/view-room/booking/:id" component={BookHotel} />
          </Route>

          {/* <Route exact path="view-room/:id" component={ViewSingleRoom} /> */}
          <Route exact path="/my-bookings" component={MyBooking} />
          <Protected exact path="/profile" com={Profile}/>
          <Protected exact path="/Edit" com={Edit}/>
          {/* <Route   exact
          path="/profile"
        //  name="Dashboard"
          component={props => <Auth {...props} Component={Profile} />}
        /> */}
          {/* <Protected exact path="/reset-password" com={ResetPassword} /> */}
          {/* <Route exact path="/profile" component={Profile} /> */}
          <Route  component={ResetPassword} />
        </Switch>
      </div>
    </Router>
  );
};

export default Header;
