import axios from "axios";
import React from "react";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavButtons from "./AdminNavButtons";
import Helper from './Helper';

export default function GetAllUsers(){

  const { isLoggedIn,getSessionStorage } = Helper();
  const [users, setUsers] = useState([]);
  var navigate = useNavigate();
  useEffect(() => {
    axios.get('http://localhost:7070/FP/admin/getuser')
      .then(response =>{
        setUsers(response.data)
        console.log(response.data)
        }
         )
      .catch(error => console.error(error));
  }, []);

    const deleteTrain = (idToDelete) => {
    //   axios.delete(`http://localhost:7070/FP/admin/deletetrain/${idToDelete}`).then(response => {
    //     console.log(response.data);
    //     // Do something with the response, e.g. update state
    //     const newUsers = users.filter(item => item.id !== idToDelete);
    //     setTrains([...newUsers]);
    //     // setTrains(newTrains);

    //     window.alert("User with code "+idToDelete+" deleted successfully");
    //   })
    //   .catch(error => console.error(error));
    }

    if(isLoggedIn && getSessionStorage("isAdmin") == "true")
    return (
      <>
      <AdminNavButtons/>
      <div className="container background ml-5">
      <h2 className="text-center mt-4 mb-4 px-3 py-3">All Users</h2>
      </div>
        <table className="container text-center table table-hover shadow-lg ml-5">
        <thead>
          <tr>
            <th scope="col">User Id</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email Id</th>
            <th scope="col">Phone</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {users.map(item =>(
          <tr key={item.user_id}>
            <th scope="row">{item.user_id}</th>
            {/* <td></td> */}
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            {/* <td><button className="btn btn-success" onClick={()=>{updateTrain(item.train_code)}}>Edit</button></td> */}
            {/* <td><button className="btn btn-danger" onClick={()=>deleteTrain(item.user_id)}>Delete</button></td> */}
          </tr>
          ))}
    {/* <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr> */}
  </tbody>
  </table>
  </>
    )
    else
      navigate("/");
}