import React from "react";
import axios from "axios";

export default function TrainData(){


    var getTrainData = (item) =>
        {
                 
            axios.get(`http://localhost:8080/admin/getTrainData/${item.id}`)
                    .then((response) => {
                        console.log(response.data);
                        
                        alert(`${item.userId.fullName} was deleted`);
                        document.location.reload();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
        }

    return(
        <>
            <div className="jumbotron">
        <h1 className="display-4"><center>Train Data</center></h1>
        <hr className="my-4" />
        <h1>{/*{message}*/}</h1></div>
                    {/* {patientList.map((item)=>{ */}
                         return(
                            <div className="container" >
                            <div className="row d-flex justify-content-center align-items-center ">
                              <div className="col col-xl-10">
                                <div className="card mb-5" style={{ borderRadius: "0px" }}>
                                  <div className="card-body p-4">
                                  <p className="small mb-0 text-bg-light p-3 "style={{ borderRadius: "0px" }}>
                                    <h3 className="mb-3">Name : {/*{item.userId.fullName}*/}</h3>
                    </p>
                                    <hr/>
                                    <div className="d-flex justify-content-start align-items-center">
                                      <p className="mb-0 text-uppercase">
                                        <i className="fas fa-cog me-2" />{" "}
                                        <span className="text-muted small">Gender :</span>&nbsp;
                                        <strong>{/*{item.userId.gender}*/}</strong>
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
                                        <strong>{/*{item.userId.cityId.city}*/}</strong>
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