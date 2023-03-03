import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export default function TrainsList(){

    const navigate = useNavigate();
  const {state} = useLocation();
  // const [classes,setClasses] = useState([]);
  var id = state.trainData.train_code;
  var classes = state.classState;
  console.log(state)

//   const checkSeatAvailability = (idToCheckStatus) => {
//     axios.get(`http://localhost:7070/FP/admin/getTrain/${idToCheckStatus}`).then(response => {
//       console.log(response.data);
//       var trainId = response.data.train_code
//       var trainData = response.data
//       axios.get(`http://localhost:7070/FP/admin/getClassesByTrain/${trainId}`)
//                   .then((response) => {
//                   console.log(response.data)
//                    navigate("/trainsList",{state:{trainData:trainData,classState:response.data}})
//                   })
//                   .catch((error) => {
//                       console.log(error);
//                   });
//       //  navigate("/getAllTrains/trainData",{state:{trainData:response.data,classState: classes}})
//       // Do something with the response, e.g. update state
//       // const newTrains = trains.filter(item => item.id !== idToUpdate);
//       // setTrains(newTrains);
//       // window.alert("Train with code"+idToUpdate+"deleted successfully");
//     })
//     .catch(error => console.error(error));
//   }
    return(
        <>
            <div className="jumbotron">
        <h1 className="display-4"><center>Patients List</center></h1>
        <hr className="my-4" />
        <h1></h1></div>
                    {/* {classState.map((item)=>{ */}
                         return(
                            <div className="container" /*key={item.userId.id}*/>
                            <div className="row d-flex justify-content-center align-items-center ">
                              <div className="col col-xl-10">
                                <div className="card mb-5" style={{ borderRadius: "15px" }}>
                                  <div className="card-body p-4">
                                  <p className="small mb-0 text-bg-light p-3 "style={{ borderRadius: "10px" }}>
                                    <h3 className="mb-3">Name : </h3>
                    </p>
                                    <hr/>
                                    <div className="d-flex justify-content-start align-items-center">
                                      <p className="mb-0 text-uppercase">
                                        <i className="fas fa-cog me-2" />{" "}
                                        <span className="text-muted small">Gender :</span>&nbsp;
                                        <strong></strong>
                                      </p>
                                      <span className="mx-2">|</span>
                                      <p className="mb-0 text-uppercase">
                                        <i className="fas fa-cog me-2" />{" "}
                                        <span className="text-muted small">Age : </span>&nbsp;
                                        <strong></strong>
                                      </p>
                                      <span className="mx-2">|</span>
                                      <p className="small mb-0">
                                        <i className="far fa-star fa-lg" /> Location :&nbsp;
                                        <strong></strong>
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
                                      <div className="form-group" style={{ textAlign: "right" }}><button type="button"  onClick={()=>{
                                                            //     axios
                                                            // .get(`http://localhost:8080/admin/deletePatient/${item.id}`)
                                                            // .then((response) => {
                                                            //     console.log(response.data);
                                                                
                                                            //     alert(`${item.userId.fullName} was deleted`);
                                                            //     document.location.reload();
                                                            // })
                                                            // .catch((error) => {
                                                            //     console.log(error);
                                                            // });
                                                            }} className="btn btn-danger">
                                        Delete
                                      </button></div>
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