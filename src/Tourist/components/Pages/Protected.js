import React,{useEffect} from 'react';
import {useHistory} from "react-router-dom";

const Protected = (props) => {
    let Com = props.com;
    const history=useHistory();
    useEffect(()=>{
      if(!localStorage.getItem("token"))
      {
        history.push('/login')
      }
    },[]);
    return (
        <div>
            <Com/>
        </div>
    );
};

export default Protected;