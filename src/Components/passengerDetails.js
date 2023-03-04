import React from 'react';
import { useState } from "react";
//import { Link, useNavigate } from "react-router-dom";
//import HandleStorage from "./HandleStorage";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useFormInputValidation } from "react-form-input-validation";
//import axios from 'axios';
//import Helper from './Helper';
export default function PassengerDetails() {

    const [fields, errors, form] = useFormInputValidation(
        {
          name: "",
          age: "",
          gender: "",
        },
        {
          name: "required",
          age: "required",
          gender: "required",
        }
      );


    return ( <div>
        <div className="container">
<div className="row justify-content-center">
<div className="col-sm-8 col-md-6 col-lg-4">
    <div className="card mt-5">
        <div className="card-header text-center">
            <h4>Passenger Details</h4>
        </div>
        <div className="card-body">
            <form>
                <div className="form-group">
                    <label for="name">Name:</label> 
                    <input type="text" className="form-control" id="name" name="name" />
                            {/* onBlur={form.handleBlurEvent}
                            onChange={form.handleChangeEvent}
                            value={fields.email} */}
                </div>
                <label className="error">
                {errors.name ? errors.name : ""}
                </label>
                <div className="form-group mt-2">
                    <label for="age">Age:</label>
                    <input type="number" className="form-control" id="age" name="age" />
                            {/* onBlur={form.handleBlurEvent}
                            onChange={form.handleChangeEvent}
                            value={fields.password} */}
                </div>
                <label className="error">
                {errors.password ? errors.password : ""}
                </label>
                <div className="form-group">
                        <label htmlFor="gender">Gender:</label><br/>
                        
                        <input type="radio" className="mx-2" id="male" name="gender"  value="Male"/>
                        <label htmlFor="male" className="mx-2">Male</label>
                        <input type="radio" className="mx-2" id="female" name="gender" value="Female"/>
                        <label htmlFor="female" className="mx-2">Female</label>
                        <input type="radio" className="mx-2" id="other" name="gender" value="Other"/>
                        <label htmlFor="other" className="mx-2">Other</label>
                        </div>
                        <label className="error">
                        {errors.gender ? errors.gender : ""}
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