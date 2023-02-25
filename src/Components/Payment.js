import React from 'react';
import { useState } from "react";
//import { Link, useNavigate } from "react-router-dom";
//import HandleStorage from "./HandleStorage";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useFormInputValidation } from "react-form-input-validation";
//import axios from 'axios';
//import Helper from './Helper';
export default function Payment() {


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
                    <label for="email">Email:</label>
                    <input type="email" className="form-control" id="email" name="email" />
                            {/* onBlur={form.handleBlurEvent}
                            onChange={form.handleChangeEvent}
                            value={fields.password} */}
                </div>
                <label className="error">
                {errors.email ? errors.email : ""}
                </label>
                
                <div className="form-group mt-2">
                    <label for="date">Date Of Birth:</label>
                    <input type="date" className="form-control" id="date" name="date" />
                            {/* onBlur={form.handleBlurEvent}
                            onChange={form.handleChangeEvent}
                            value={fields.password} */}
                </div>
                <label className="error">
                {errors.date ? errors.date : ""}
                </label>

                <div className="form-group mt-2">
                    <label for="credit">Credit Card:</label>
                    <input type="number" className="form-control" id="credit" name="credit" />
                            {/* onBlur={form.handleBlurEvent}
                            onChange={form.handleChangeEvent}
                            value={fields.password} */}
                </div>
                <label className="error">
                {errors.date ? errors.date : ""}
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