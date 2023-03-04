import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export default function TrainsList(){

  const navigate = useNavigate();
  const {state} = useLocation();
  // const [classes,setClasses] = useState([]);
  // var id = state.trainData.train_code;
  // var classes = state.classState;
  console.log(state)
  var trainsList = [...state];

    if(state)
    return(
        <>
            <div className="jumbotron">
        <h1 className="display-4"><center>Trains List</center></h1>
        <hr className="my-4" />
        <h1></h1></div>
                     {trainsList.map((item)=>{ 
                         return(
                            <div className="container" /*key={item.userId.id}*/>
                            <div className="row d-flex justify-content-center align-items-center ">
                              <div className="col col-xl-10">
                                <div className="card mb-5" style={{ borderRadius: "10px" }}>
                                  <div className="card-body p-4">
                                  <p className="small mb-0 text-bg-light p-3 "style={{ borderRadius: "0px" }}>
                                    <h3 className="mb-3">Name : {item.train.trainName}</h3>
                                    <mohit className="mb-3">Start time: <strong>{item.train.startTime}</strong></mohit>&nbsp;&nbsp;&nbsp;
                                    <mohit className="mb-3">End time: <strong>{item.train.endTime}</strong></mohit>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; || &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <mohit className="mb-3">Start Station: <strong>{item.train.startStation}</strong></mohit>&nbsp;&nbsp;&nbsp;
                                    <mohit className="mb-3">End time: <strong>{item.train.endStation}</strong></mohit><br/>
                    </p>          
                                    <hr/>
                                    <strong>Seat Availability</strong>
                                    <div className="d-flex justify-content-start align-items-center">
                                      <p className="mb-0 text-uppercase">
                                        <i className="fas fa-cog me-2" />{" "}
                                        <div className="text-muted small">{item.trainclasslist[0].classType}</div>&nbsp;
                                        <strong>{item.trainclasslist[0].seatAvailable}</strong>
                                      </p>
                                      <span className="mx-2">|</span>
                                      <p className="mb-0 text-uppercase">
                                        <i className="fas fa-cog me-2" />{" "}
                                        <div className="text-muted small">{item.trainclasslist[1].classType}</div>&nbsp;
                                        <strong>{item.trainclasslist[1].seatAvailable}</strong>
                                      </p>
                                      <span className="mx-2">|</span>
                                      <p className="mb-0 text-uppercase">
                                        <i className="far fa-cog me-2" />{" "}
                                        <div className="text-muted small">{item.trainclasslist[2].classType}</div>&nbsp;
                                        <strong>{item.trainclasslist[2].seatAvailable}</strong>
                                      </p>
                                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      <div className="form-group" style={{ textAlign: "right" }}><button type="button"  onClick={()=>{navigate("/passengersDetails");}} className="btn btn-success btn-block">Book Tickets</button></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>  
                                )
                   })}         
        </>
    );
}