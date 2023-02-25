import axios from 'axios';
import React, { useState } from 'react'
import { useFormInputValidation } from "react-form-input-validation";
import { Navigate, useNavigate } from 'react-router-dom';

export default function ForgotPassword() {

    // var [email,setEmail] = useState("")
    // var handleSubmit = (e) => {

    //     e.preventDefault();
    //     const data = {
    //         emailData:email
    //     }

    //     axios.post('',data).then(
    //         res => {
    //             console.log(res)
    //         }
    //     ).catch(
    //         err => {
    //             console.log(err)
    //         }
    //     )
    // }
    var navigate = useNavigate();
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

    //var { setSessionStorage } = Helper();
    var forgetPassword = async (event) =>
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
          .post("http://localhost:7070/FP/users/changepassword", {
            email: fields.email,
            password: fields.password
          })
          .then(function (response) {
            //.push("/login")
            window.alert("Password chnaged successfully")
            navigate("/login");
          })
          .catch(function (error) {
            console.log(error);
          });   
      }
    };

    return (
            <div>
                <div className="container">
    <div className="row justify-content-center">
        <div className="col-sm-8 col-md-6 col-lg-4">
            <div className="card mt-5">
                <div className="card-header text-center">
                    <h4>Forgot password</h4>
                </div>
                <div className="card-body">
                    <form onSubmit={forgetPassword}>
                        <div className="form-group">
                            <label for="email">Email:</label> 
                            <input type="text" className="form-control" id="email" name="email" onBlur={form.handleBlurEvent}
                                            onChange={form.handleChangeEvent}
                                            value={fields.email}/>
                        </div>
                        <div className="form-group">
                            <label for="password">New Password:</label> 
                            <input type="password" className="form-control" id="password" name="password" onBlur={form.handleBlurEvent}
                                    onChange={form.handleChangeEvent}
                                    value={fields.password}/>
                        </div>
                        <div>
                        <center>
                            <button type='submit' className="btn btn-primary btn-block my-3">Submit</button>
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