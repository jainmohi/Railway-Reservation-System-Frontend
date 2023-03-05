import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export default function TrainsList(){

  const navigate = useNavigate();
  const {state} = useLocation();

  const [error,setError] = useState("");
  const [radioVal,setRadioVal] = useState("");
  console.log(state)
  var trainsList = [...state];

  const handleChange = (e) =>{
    setRadioVal(e.target.value);
    console.log(radioVal);
      setError("");
  }

  const checkAndForward = (trainId) =>{
    console.log(radioVal)
    if(radioVal!="")
      navigate("/passengersDetails",{state:{trainId:trainId,classType:radioVal}});
    else{
      setError("No class selected");
    }
      
  }
    if(state.length>0)
    {
    return(
        <>
            <div className="jumbotron shadow-sm">
        <h1 className="display-4"><center>Trains List</center></h1>
        <hr className="my-4" />
        <h1></h1></div>
                     {trainsList.map((item)=>{ 
                         return(
                            <div className="container" /*key={item.userId.id}*/>
                            <div className="row d-flex justify-content-center align-items-center">
                              <div className="col col-xl-10">
                                <div className="card mb-5 shadow" style={{ borderRadius: "10px" }}>
                                  <div className="card-body p-4">
                                  <p className="small mb-0 text-bg-light p-3 "style={{ borderRadius: "0px" }}>
                                    <h3 className="mb-3">Name : {item.train.trainName}</h3>
                                    <mohit className="mb-3">Start time: <strong>{item.train.startTime}</strong></mohit>&nbsp;&nbsp;&nbsp;
                                    <mohit className="mb-3">End time: <strong>{item.train.endTime}</strong></mohit>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; || &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <mohit className="mb-3">Start Station: <strong>{item.train.startStation}</strong></mohit>&nbsp;&nbsp;&nbsp;
                                    <mohit className="mb-3">End Station: <strong>{item.train.endStation}</strong></mohit><br/>
                    </p>          
                                    <hr/>
                                    <strong>Seat Availability And Fair per Seat</strong>
                                    <div className="d-flex justify-content-start align-items-center">
                                      <p className="mb-0 text-uppercase">
                                        <i className="fas fa-cog me-2" />{" "}
                                        <div className="text-muted small">{item.trainclasslist[0].classType}</div>&nbsp;
                                        <strong>{item.trainclasslist[0].seatAvailable}</strong>
                                        <div>
                                        <strong>{item.trainclasslist[0].fair} rs.</strong>
                                        </div>
                                      </p>
                                      <span className="mx-2">|</span>
                                      <p className="mb-0 text-uppercase">
                                        <i className="fas fa-cog me-2" />{" "}
                                        <div className="text-muted small">{item.trainclasslist[1].classType}</div>&nbsp;
                                        <strong>{item.trainclasslist[1].seatAvailable}</strong>
                                        <div>
                                        <strong>{item.trainclasslist[1].fair} rs.</strong>
                                        </div>
                                      </p>
                                      <span className="mx-2">|</span>
                                      <p className="mb-0 text-uppercase">
                                        <i className="far fa-cog me-2" />{" "}
                                        <div className="text-muted small">{item.trainclasslist[2].classType}</div>&nbsp;
                                        <strong>{item.trainclasslist[2].seatAvailable}</strong>
                                        <div>
                                        <strong>{item.trainclasslist[2].fair} rs.</strong>
                                        </div>
                                      </p>
                                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      
                                      
                          <div className="form-group" style={{ textAlign: "right" }}>
                            <div class="row border rounded pt-2 shadow-sm">
                            
              
                            <div class="form-group">
                              {/* <label htmlFor="gender">Gender:</label><br/> */}
                              
                            
                              <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value={item.trainclasslist[0].classType} onChange={(e)=>{handleChange(e)}}/>
                                <label class="form-check-label" for="inlineRadio1">{item.trainclasslist[0].classType}</label>
                              </div>
                              <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value={item.trainclasslist[1].classType} onChange={(e)=>{handleChange(e)}}/>
                                <label class="form-check-label" for="inlineRadio2">{item.trainclasslist[1].classType}</label>
                              </div>
                              <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value={item.trainclasslist[2].classType} onChange={(e)=>{handleChange(e)}} />
                                <label class="form-check-label" for="inlineRadio3">{item.trainclasslist[2].classType}</label>
                              </div>
                              </div>
            </div>
            <strong>{ error }</strong>
                                      </div>
                                      <div className="form-group mx-4" style={{ textAlign: "right" }}>
                                        <button type="button"  onClick={()=>{checkAndForward(item.train.train_code)}} className="btn btn-success btn-block">Book Tickets</button>
                                      </div>
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
        else{
          return(
            <div className="jumbotron shadow-sm my-5 mx-5">
              <h1 className=""><center>Currently No Trains Running for these Stations</center></h1>
              <hr className="my-4" />
            </div>
            )
        }
}