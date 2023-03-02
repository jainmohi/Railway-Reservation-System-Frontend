import axios from "axios";
import React from "react";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavButtons from "./AdminNavButtons";
import Helper from './Helper';

export default function GetAllTrains(){

  const { isLoggedIn } = Helper();
  const [trains, setTrains] = useState([]);
  var navigate = useNavigate();
  useEffect(() => {
    axios.get('http://localhost:7070/FP/admin/trainsList')
      .then(response =>{
        setTrains(response.data)
        console.log(response.data)
        }
         )
      .catch(error => console.error(error));
  }, []);

    const deleteTrain = (idToDelete) => {
      axios.delete(`http://localhost:7070/FP/admin/deletetrain/${idToDelete}`).then(response => {
        console.log(response.data);
        // Do something with the response, e.g. update state
        const newTrains = trains.filter(item => item.id !== idToDelete);
        setTrains([...newTrains]);
        // setTrains(newTrains);
        window.location.reload(true);
        window.alert("Train with code"+idToDelete+"deleted successfully");
      })
      .catch(error => console.error(error));
    }
    
    const updateTrain = (idToUpdate) => {
      axios.get(`http://localhost:7070/FP/admin/getTrain/${idToUpdate}`).then(response => {
        console.log(response.data);
        navigate("/updateTrain",{state:response.data})
        // Do something with the response, e.g. update state
        // const newTrains = trains.filter(item => item.id !== idToUpdate);
        // setTrains(newTrains);
        // window.alert("Train with code"+idToUpdate+"deleted successfully");
      })
      .catch(error => console.error(error));
    }

    return (
      <>
      <AdminNavButtons/>
      <div className="container background ml-5">
      <h2 className="text-center mt-4 mb-4 px-3 py-3">Trains List</h2>
      </div>
        {/* <h2 className="text-center mt-4 mb-4">Trains List</h2> */}
        <table className="container text-center table table-hover shadow-lg ml-5">
        <thead>
          <tr>
            <th scope="col">Train_code</th>
            <th scope="col">Train Name</th>
            <th scope="col">Start Time</th>
            <th scope="col">End Time</th>
            <th scope="col">Start Station</th>
            <th scope="col">End Station</th>
            <th scope="col">distance</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {trains.map(item =>(
          <tr key={item.train_code}>
            <th scope="row">{item.train_code}</th>
            {/* <td></td> */}
            <td>{item.trainName}</td>
            <td>{item.startTime}</td>
            <td>{item.endTime}</td>
            <td>{item.startStation}</td> 
            <td>{item.endStation}</td>
            <td>{item.distance} kms</td>
            <td><button className="btn btn-success" onClick={()=>{updateTrain(item.train_code)}}>Edit</button></td>
            <td><button className="btn btn-danger" onClick={()=>{deleteTrain(item.train_code)}}>Delete</button></td>
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
}