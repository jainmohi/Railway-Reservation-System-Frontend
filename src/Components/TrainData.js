import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function TrainData(){

  const [noOfSeats,setnoOfSeats] = useState("");
  const {state} = useLocation();
  // const [classes,setClasses] = useState([]);
  var id = state.trainData.train_code;
  var classes = state.classState;
  console.log(state);
  
    return(
        <>
            <div className="jumbotron">
        <h1 className="display-4"><center>Train Data</center></h1>
        <hr className="my-4" />
        <h1>{/*{message}*/}</h1></div>
                    {/* {patientList.map((item)=>{ */}
                            <div className="container" >
                            <div className="row d-flex justify-content-center align-items-center ">
                              <div className="col col-xl-10">
                                <div className="card mb-5" style={{ borderRadius: "0px" }}>
                                  <div className="card-body p-4">
                                  <p className="small mb-0 text-bg-light p-3 "style={{ borderRadius: "0px" }}>
                                    <h3 className="mb-3"> {state.trainData.trainName}</h3>
                                    <mohit className="mb-3">Start time: <strong>{state.trainData.startTime}</strong></mohit>&nbsp;&nbsp;&nbsp;
                                    <mohit className="mb-3">End time: <strong>{state.trainData.endTime}</strong></mohit>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; || &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <mohit className="mb-3">Start Station: <strong>{state.trainData.startStation}</strong></mohit>&nbsp;&nbsp;&nbsp;
                                    <mohit className="mb-3">End Station: <strong>{state.trainData.endStation}</strong></mohit><br/>
         
                    </p> 
                                    <hr/>
                                    <strong>Seat Availability</strong><br/>
                                    <div className="d-flex justify-content-start align-items-center">
                                      {/* {state.classState.map(item => {
                                            {console.log(item)} */}
                                            <p className="mb-0 text-uppercase">
                                            <i className="fas fa-cog me-2" />{" "}
                                            <div className="text-muted small">{state.classState[0].classType}</div>&nbsp;
                                            <strong>{state.classState[0].seatAvailable}</strong>
                                            </p>
                                      {/* }
                                      )} */}
                                      
                                       <span className="mx-2">|</span>
                                       <p className="mb-0 text-uppercase">
                                         <i className="fas fa-cog me-2" />{" "}
                                         <div className="text-muted small">{state.classState[1].classType}</div>&nbsp;
                                         <strong>{state.classState[1].seatAvailable}</strong>
                                       </p>
                                       <span className="mx-2">|</span>
                                       <p className="mb-0 text-uppercase">
                                         <i className="fas fa-cog me-2" />{" "}
                                         <div className="text-muted small">{state.classState[2].classType}</div>&nbsp;
                                         <strong>{state.classState[2].seatAvailable}</strong>
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
                                
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>  
                                )
                    {/* })}         */}
        </>
    );
}