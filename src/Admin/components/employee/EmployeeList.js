import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from 'jquery';
import { useState} from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import swal from 'sweetalert';

export default function EmployeeList() {
  const [loading,setLoading]=useState(true);
  const [employeelist,setEmoyeelist]=useState([]);
 const history =useHistory();
  $(document).ready(function () {
    $('#datatablesSimple').DataTable();
});

useEffect(() => {
  axios.get('http://127.0.0.1:8000/api/employee')
  .then(respnse =>{
      if(respnse.data.success===true){
        setEmoyeelist(respnse.data.users);
          // console.log(respnse.data);
         
      }
      setLoading(false);
  });
}, [employeelist]);

const deleteEmployee=(e,id)=>{
  const thisClicked=e.currentTarget;
  thisClicked.innerText="Deleting..";

  const url =  `http://127.0.0.1:8000/api/employee/destroy/${id}`;;

axios
.delete(url)
.then(res => {
  if(res.data.success===true){
    console.log(res.data);
      swal('Success',res.data.message,'success');
      thisClicked.closest("tr").remove();
      history.push('/employee/')
  }
  else{
      swal('Error!',res.data.error,'error');
      thisClicked.innerText="Delete";
      
  }
})

}
var htmlTable="";
if (loading) {
  return <h1>Loading Employee.......</h1>
}
else{
  htmlTable=employeelist.map((item)=>{
      return(
           <tr key={item.id} className="table-success">
           <td>{item.id}</td>
           <td>{item.category.title}</td>
           <td>{item.name}</td>
           <td>{item.account}</td>
           <td>{item.address}</td>
           <td>{item.email}</td>
           <td>{item.phone}</td>
           <td>{item.salary}</td>
           <td> <Link to={`employee/update/${item.id}`} className="btn btn-warning btn-sm">Edit</Link></td>
           <td> <button type="button" onClick={(e)=>deleteEmployee(e,item.id)} className="btn btn-danger btn-sm" >Delete</button></td>
           </tr>
      )
  });
}
  return (
    <div className="container px-4">
    <div className="card mt-4">
    <div className="card-header">
    <h3>Employee List</h3>
    
    <Link to="/employee/create" className="btn btn-info pull-right"><i className="fa fa-plus" />
      NewEmployee</Link>
  
    </div>
    <div className="card-body">
    <table id="datatablesSimple" className="table table-striped table-bordered table-sm row-border hover mb-5">
    <thead>
      <tr>
      <th>#Id</th>
      <th>Category</th>
      <th>Name</th>
      <th>Account</th>
      <th>Address</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Salary</th>
      <th>Edit</th>
      <th>Delete</th>
     
      </tr>
    </thead>
    <tbody>
    {htmlTable}
    </tbody>
    </table>

    </div>
  </div>

  </div>
  )
}

