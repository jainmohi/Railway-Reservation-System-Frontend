import React from 'react';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//import HandleStorage from "./HandleStorage";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useFormInputValidation } from "react-form-input-validation";
import axios from 'axios';
import Helper from './Helper';
export default function Login() {
    var navigate =  useNavigate();
   // var {setSessionStorage} =  HandleStorage();
    // var [credentials, setCredentials] = useState({uname: "", password: ""});
    // var [message, setMessage] = useState("");

    // var HandleChange =(args)=>{
    //     var copyOfCredentials = {...credentials};
    //     copyOfCredentials[args.target.id] = args.target.value;
    //     setCredentials(copyOfCredentials); 
    // }
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

    var { setSessionStorage } = Helper();
    var Login = async (event) =>
    {
            //Check the credentials by giving XHR Call
            //Validate the user credentials 
            //As of now we are going to hard code and check
            


            //-----------------------------------------------------------
            //--------------------Hard Coded Credential Check
            //-----------------------------------------------------------
            //    if(credentials.uname == "mahesh@test.com" && 
            //     credentials.password == "mahesh123")
            //     {


            //         setSessionStorage(credentials.uname);
            //         setMessage("");
            //         debugger;
            //         props.UpdateHeader(credentials.uname);
            //         history.push("/secure"); // u can get the url to navigate 
            //                                  // from protected route itself
            //                                  // and props can be used to 
            //                                  // resolve the route
            //     }
            //     else
            //     {
            //         setCredentials({uname: "", password: ""});
            //         setMessage("Invalid UserName / Password..Try Again");
            //     }
            //-----------------------------------------------------------
            //--------------------Credential Check End Here
            //-----------------------------------------------------------

    const isValid = await form.validate(event);
      if (isValid) {
        axios
          .post("http://localhost:7070/FP/users/login", {
            email: fields.email,
            password: fields.password
          })
          .then(function (response) {
            //.push("/login")
            if(fields.email==response.data.email && fields.password==response.data.password)
             { 
                setSessionStorage("userName", response.data.firstName);
                setSessionStorage("token", "1234");
                window.alert("Logged in as "+response.data.firstName);
                 navigate("/");
                 console.log(response); 
             }
             else{
                window.alert("Credentials do not match");
             }
            console.log(response);  
          })
          .catch(function (error) {
            console.log(error);
          });   
      }
    };


    return ( <div>
                <div className="container">
    <div className="row justify-content-center">
        <div className="col-sm-8 col-md-6 col-lg-4">
            <div className="card mt-5">
                <div className="card-header text-center">
                    <h4>Login</h4>
                </div>
                <div className="card-body">
                    <form onSubmit={Login}>
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