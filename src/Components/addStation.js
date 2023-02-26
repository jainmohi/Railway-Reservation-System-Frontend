import React from 'react';
import { useState } from "react";
//import { Link, useNavigate } from "react-router-dom";
//import HandleStorage from "./HandleStorage";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useFormInputValidation } from "react-form-input-validation";
//import axios from 'axios';
//import Helper from './Helper';
export default function AddStation() {

    const [fields, errors, form] = useFormInputValidation(
        {
          stationCode: "",
          stationName: "",
        },
        {
          stationCode: "required",
          stationName: "required",
        }
      );

    return ( <div>
        <div className="container">
        <div className="row justify-content-center">
        <div className="col-sm-8 col-md-6 col-lg-4">
        <div className="card mt-5">
        <div className="card-header text-center">
            <h4>Add Station</h4>
        </div>
        <div className="card-body">
            <form>
                <div className="form-group">
                    <label for="stationCode">Station Code:</label> 
                    <input type="text" className="form-control" id="stationCode" name="stationCode" />
                </div>
                <label className="error">
                {errors.stationCode ? errors.stationCode : ""}
                </label>

                <div className="form-group mt-2">
                    <label for="stationName">Station Name:</label>
                    <input type="text" className="form-control" id="stationName" name="stationName" />
                </div>
                <label className="error">
                {errors.stationName ? errors.stationName : ""}
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