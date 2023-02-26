import React from 'react';
import { useState,useNavigate } from "react";
import { Link } from "react-router-dom";
//import HandleStorage from "./HandleStorage";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useFormInputValidation } from "react-form-input-validation";
import axios from 'axios';
import Helper from './Helper';
export default function Login(props) {

    // var navigate =  useNavigate();
    const [fields, errors, form] = useFormInputValidation(
        {
          email: "",
          password: "",
        },
        {
          email: "required|email",
          password: "required",
        }
      );

    var loginFunc = (e) =>{
      //debugger;
      const isValid = form.validate(e);
      props.login(fields,isValid);
    }
    return ( <div>
                <div className="container">
    <div className="row justify-content-center">
        <div className="col-sm-8 col-md-6 col-lg-4">
            <div className="card mt-5">
                <div className="card-header text-center">
                    <h4>Login</h4>
                </div>
                <div className="card-body">
                    <form onSubmit={(e)=>{
                     // debugger;
                     e.preventDefault();
                        loginFunc(e);
                        // navigate("/");
                    }}>
                        <div className="form-group">
                            <label for="username">UserName:</label> 
                            <input type="text" className="form-control" id="email" name="email" 
                                    onBlur={form.handleBlurEvent}
                                    onChange={form.handleChangeEvent}
                                    value={fields.email}/>
                        </div>
                        <div className="form-group mt-2">
                            <label for="password">Password:</label>
                            <input type="password" className="form-control" id="password" name="password"
                                    onBlur={form.handleBlurEvent}
                                    onChange={form.handleChangeEvent}
                                    value={fields.password}/>
                        </div>
                        <div className="form-group mt-3">
                        <Link to={"/forgotPassword"}>Forgot password</Link>
                        </div>
                        
                        <div>
                        <center>
                            <button type="submit" className="btn btn-primary btn-block my-3">Sign In</button>
                        </center>
                        </div>
                    </form>
                    <div className="text-center mt-3">
                        Don't have an account?<Link to={"/register"}>Sign Up</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
            </div>
            );

        }