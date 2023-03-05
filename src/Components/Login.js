import React from 'react';
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
//import HandleStorage from "./HandleStorage";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useFormInputValidation } from "react-form-input-validation";
import axios from 'axios';
import Helper from './Helper';
export default function Login(props) {

     var navigate =  useNavigate();
     var {getSessionStorage,setSessionStorage,isLoggedIn} = Helper();
    const [fields, errors, form] = useFormInputValidation(
        {
          email: "",
          password: "",
        },
        {
          email: "required|email",
          password: "required"
        }
      );

    var signIn = async (event)=>{
        //debugger;
       //var navigate = useNavigate();
      const isValid = await form.validate(event);

        if (isValid) {
          axios.post("http://localhost:7070/FP/users/login", {
              email: fields.email,
              password: fields.password
            })
            .then(function (response) {
              //.push("/login")
              console.log(response.data);
              if(fields.email==response.data.email && fields.password==response.data.password)
               { 
                  const user = response.data;
                  console.log(user)
                  setSessionStorage("userName", response.data.firstName);
                  setSessionStorage("user", JSON.stringify(user));
                  getSessionStorage("user");
                  setSessionStorage("isLoggedIn",true);
                  setSessionStorage("token", "1234");
                  props.UpdateHeader(response.data.firstName);
                  if(response.data.role == "ADMIN")
                  {
                    //debugger;
                      setSessionStorage("isAdmin",true);
                      navigate("/adminDashboard");
                  }
                  else{
                    setSessionStorage("isAdmin",false);
                    navigate("/searchTrains");
                  }
                      
                  //window.alert("Logged in as "+response.data.firstName);
                   //navigate("/");
                   console.log(response);
                   //window.location.reload(true); 
               }
               else{
                  window.alert("Credentials do not match");
               }
              console.log(response);  
            })
            .catch(function (error) {
              console.log(error);
            });   
        
      };
      }
      
      if(!isLoggedIn())
    return ( 
      
      <div>
                <div className="container">
    <div className="row justify-content-center">
        <div className="col-sm-8 col-md-6 col-lg-4">
            <div className="card mt-5 shadow w-100">
                <div className="card-header text-center">
                    <h4>Login</h4>
                </div>
                <div className="card-body">
                    <form onSubmit={signIn}>
                        {/* // if(getSessionStorage("isAdmin"))
                        //     navigate("/adminDashboard");
                        // else{
                        //     navigate("/");
      }
                        // navigate("/");
                    // }
                // } */}
                        <div className="form-group">
                            <label for="username">UserName:</label> 
                            <input type="text" className="form-control" id="email" name="email" 
                                    onBlur={form.handleBlurEvent}
                                    onChange={form.handleChangeEvent}
                                    value={fields.email}/>
                            <label className="error">
                                {errors.email? errors.email: ""}
                            </label>
                        </div>
                        <div className="form-group mt-2">
                            <label for="password">Password:</label>
                            <input type="password" className="form-control" id="password" name="password"
                                    onBlur={form.handleBlurEvent}
                                    onChange={form.handleChangeEvent}
                                    value={fields.password}/>
                        <label className="error">
                                {errors.password? errors.password: ""}
                            </label>
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
            )

            else
                navigate("/");

        }