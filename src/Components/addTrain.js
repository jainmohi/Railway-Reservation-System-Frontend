import React from 'react';
import { useState } from "react";
//import { Link, useNavigate } from "react-router-dom";
//import HandleStorage from "./HandleStorage";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useFormInputValidation } from "react-form-input-validation";
//import axios from 'axios';
//import Helper from './Helper';
import "../index.css" 
export default function AddTrain() {

    const [fields, errors, form] = useFormInputValidation(
        {
          trainCode: "",
          trainName: "",
          startTime: "",
          endTime: "",
          startStationCode: "",
          endStationCode:"",
        },
        {
          trainCode: "required",
          trainName: "required",
          startTime: "required",
          endTime: "required",
          startStationCode: "required",
          endStationCode: "required"
        }
      );

    return ( 

    <div>
        <div className="container">
<div className="row justify-content-center">
<div className="col-sm-8 col-md-6 col-lg-4">
    <div className="card mt-5">
        <div className="card-header text-center">
            <h4>Add Train</h4>
        </div>
        <div className="card-body">
            <form>
                <div className="form-group">
                    <label for="trainCode">Train Code:</label> 
                    <input type="text" className="form-control" id="trainCode" name="trainCode" />
                </div>
                <label className="error">
                {errors.trainCode ? errors.trainCode : ""}
                </label>

                <div className="form-group mt-2">
                    <label for="trainName">Train Name:</label>
                    <input type="text" className="form-control" id="trainName" name="trainName" />
                </div>
                <label className="error">
                {errors.trainName ? errors.trainName : ""}
                </label>

                <div className="form-group mt-2">
                    <label for="startTime">Start Time:</label>
                    <input type="time" className="form-control" id="startTime" name="startTime" />
                </div>
                <label className="error">
                {errors.startTime ? errors.startTime : ""}
                </label>

                <div className="form-group mt-2">
                    <label for="endTime">End Time:</label>
                    <input type="time" className="form-control" id="endTime" name="endTime" />
                </div>
                <label className="error">
                {errors.endTime ? errors.endTime : ""}
                </label>

                <div className="form-group mt-2">
                    <label for="startStationCode">Start Station Code:</label>
                    <input type="text" className="form-control" id="startStationCode" name="startStationCode" />
                </div>
                <label className="error">
                {errors.startStationCode ? errors.startStationCode : ""}
                </label>

                <div className="form-group mt-2">
                    <label for="endStationCode">End Station Code:</label>
                    <input type="text" className="form-control" id="endStationCode" name="endStationCode" />
                </div>
                <label className="error">
                {errors.endStationCode ? errors.endStationCode : ""}
                </label>

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