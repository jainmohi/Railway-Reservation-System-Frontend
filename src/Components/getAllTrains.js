import axios from "axios";
import React from "react";
import { useState,useEffect } from "react";
import Helper from './Helper';

export default function GetAllTrains(){

  const { isLoggedIn } = Helper();
  const [trains, setTrains] = useState([]);

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
      axios.delete("http://localhost:7070/FP/admin/deleteTrain/${idToDelete}").then(response => {
        console.log(response.data);
        // Do something with the response, e.g. update state
        const newTrains = trains.filter(item => item.id !== idToDelete);
        setTrains(newTrains);

        window.alert("Train with code"+idToDelete+"deleted successfully");
      })
      .catch(error => console.error(error));
    }
    
    const updateTrain = (idToUpdate) => {
      axios.get("http://localhost:7070/FP/admin/updateTrain/${idToUpdate}").then(response => {
        console.log(response.data);
        // Do something with the response, e.g. update state
        const newTrains = trains.filter(item => item.id !== idToUpdate);
        setTrains(newTrains);
        window.alert("Train with code"+idToUpdate+"deleted successfully");
      })
      .catch(error => console.error(error));
    }

    
    
    return (
        <table class="table">
        <thead>
          <tr>
            <th scope="col">Train_code</th>
            <th scope="col">Train Name</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
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
    )
}