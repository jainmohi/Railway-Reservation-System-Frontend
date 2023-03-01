import React from 'react';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//import HandleStorage from "./HandleStorage";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useFormInputValidation } from "react-form-input-validation";
import axios from 'axios';
import Helper from './Helper';
import "../index.css" ;



export default function AddTrain() {
    var navigate = useNavigate();
    const [fields, errors, form] = useFormInputValidation(
        {
         
            trainName: "",
            startTime: "",
          endTime: "",
          
        },
        {
          
            trainName: "required",
            startTime: "required",
          endTime: "required"
          
        }
      );
      const onSubmit = async (event) => {
        const isValid = await form.validate(event);
        if (isValid) {
          axios
            .post("http://localhost:7070/FP/admin/addtrain", {
                trainName: fields.trainName,
                startTime: fields.startTime,
                endTime: fields.endTime,
              
            })
            .then(function (response) {
             
              console.log(response);  
              window.alert("train added successfully");
              navigate("/adminDashboard");
            })
            .catch(function (error) {
              console.log(error);
            });   
        }
      };

    return ( 
      

    <div className="row">
        
      <div className="col-4">
       <ul class="nav nav-pills flex-column mb-auto">
      <li className="nav-item mx-2">
      <Link class="btn btn-primary" to={"/addTrain"}>Add Train</Link>
      </li>
      
      <li>
      <li className="nav-item mx-2">
            <Link class="btn btn-primary" to={"/manageTrain"}>Manage Train</Link>
          </li>
      </li>
      <li className="nav-item mx-2">
      <Link class="btn btn-primary" to={"/addStation"}>Add Station</Link>
      </li>
      <li className="nav-item mx-2">
      <Link class="btn btn-primary" to={"/manageTrain"}>Manage Station</Link>
      </li>
      </ul>
      </div>
    <div className="container col-10">
    <div className="row justify-content-center">
        <div className="col-sm-8 col-md-6 col-lg-4">
            <div className="card mt-5">
                <div className="card-header text-center">
                    <h4>Add Train</h4>
                </div>
                <div className="card-body">
                    <form className="myForm"
            noValidate 
            autoComplete="off"
            onSubmit={onSubmit}>
                    <div className="row">
                    <div className="form-group col">
                            <label htmlFor="firstName">Train Name:</label>
                            <input type="text" className="form-control" id="trainName" name="trainName" value={fields.trainName}
                onChange={form.handleChangeEvent}
                onBlur={form.handleBlurEvent}
                data-async
                />
                            <label className="error">
                            {errors.trainName ? errors.trainName : ""}
                        </label>
                        </div>
                        <div className="form-group col">
                            <label htmlFor="lastname">start Time:</label>
                            <input type="time" className="form-control" id="startTime" name="startTime" value={fields.startTime}
                onChange={form.handleChangeEvent}
                onBlur={form.handleBlurEvent}
                data-async/>
                <label className="error">
                {errors.startTime ? errors.startTime : ""}
              </label> 
                        </div>
                        
                    </div>
                    <div className="form-group col">
                            <label htmlFor="lastname">end Time:</label>
                            <input type="time" className="form-control" id="endTime" name="endTime" value={fields.endTime}
                onChange={form.handleChangeEvent}
                onBlur={form.handleBlurEvent}
                data-async/>
                <label className="error">
                {errors.endTime ? errors.endTime : ""}
              </label>
                        </div>
                         
                    
                        
                        
                       
              
                        <div>
                        <center>
                            <button type="submit" className="btn btn-primary btn-block my-3">ADD</button>
                        </center>
                        </div>
                    </form>
                   
                </div>
            </div>
        </div>
    </div>
</div>    
      
    </div>

    );
}