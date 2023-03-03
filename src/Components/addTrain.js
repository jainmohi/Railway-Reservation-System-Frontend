import React from 'react';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//import HandleStorage from "./HandleStorage";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useFormInputValidation } from "react-form-input-validation";
import axios from 'axios';
import Helper from './Helper';
import "../index.css" ;
import AdminNavButtons from './AdminNavButtons';



export default function AddTrain() {
    var navigate = useNavigate();
    const [fields, errors, form] = useFormInputValidation(
        {
         
            trainName: "",
            startTime: "",
            endTime: "",
            startStation:"",
            endStation:"",
            distance:""
        },
        {
          
            trainName: "required",
            startTime: "required",
          endTime: "required",
          startStation:"required",
            endStation:"required",
            distance:"required|numeric"
          
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
                startStation:fields.startStation,
                endStation:fields.endStation,
                distance:fields.distance
              
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
      
<>
    <AdminNavButtons/>
    <div className="container col-10">
    <div className="row justify-content-center">
        <div className="col-sm-8 col-md-6 col-lg-4">
            <div className="card mt-5  shadow-lg">
                <div className="card-header text-center">
                    <h4>Add Train</h4>
                </div>
                <div className="card-body">
                    <form className="myForm"
            noValidate 
            autoComplete="off"
            onSubmit={onSubmit}>
                    <div className='row'>
                      
                    </div>
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
                        
                        <div className="form-group col">
                            <label htmlFor="startTime">start Time:</label>
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
                            <label htmlFor="endTime">end Time:</label>
                            <input type="time" className="form-control" id="endTime" name="endTime" value={fields.endTime}
                onChange={form.handleChangeEvent}
                onBlur={form.handleBlurEvent}
                data-async/>
                <label className="error">
                {errors.endTime ? errors.endTime : ""}
              </label>
                        </div>
                    
                <div className="form-group col">
                    <label htmlFor="startStation">Start Station</label>
                    <input type="text" className="form-control" id="startStation" name="startStation" value={fields.startStation}
                onChange={form.handleChangeEvent}
                onBlur={form.handleBlurEvent}
                data-async/>
                <label className="error">
                {errors.startStation ? errors.startStation : ""}
              </label> 
                        </div>

              <div className="form-group col">
                  <label htmlFor="endStation">End Station:</label>
                  <input type="text" className="form-control" id="endStation" name="endStation" value={fields.endStation}
                onChange={form.handleChangeEvent}
                onBlur={form.handleBlurEvent}
                data-async/>
                <label className="error">
                {errors.endStation ? errors.endStation : ""}
              </label> 
                        </div>



              <div className="form-group col">
              <label htmlFor="distance">distance</label>
              <input type="text" className="form-control" id="distance" name="distance" value={fields.distance}
                onChange={form.handleChangeEvent}
                onBlur={form.handleBlurEvent}
                data-async/>
                <label className="error">
                {errors.distance ? errors.distance : ""}
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
      
    </>

    );
}