import axios from 'axios';
import React, { useState } from 'react'
import { useFormInputValidation } from "react-form-input-validation";
import { Navigate, useNavigate } from 'react-router-dom';

export default function ForgotPassword() {

    var [otp,setOtp] = useState();
    const [error,setError] = useState("");
    var [isOtpVerified,setIsOtpVerified] = useState(false);
    //const [counter, setCounter] = useState(59);


    var navigate = useNavigate();
    const [fields, errors, form] = useFormInputValidation(
        {
          email: "",
          otp:"",
          password: "",
          cnfPassword: ""
        },
        {
          email: "required|email",
          otp:"required",
          password: "required",
          cnfPassword: "required"
        }
      );

    //var { setSessionStorage } = Helper();
    var forgetPassword = async (event) =>
    {
      event.preventDefault();
    const isValid = await form.validate(event);
      if (isValid) {
        if(fields.password === fields.cnfPassword)
        {
          axios
          .post("http://localhost:7070/FP/resetPassword", {
            email: fields.email,
            password: fields.password
          })
          .then(function (response) {
            console.log(response.data)
            navigate("/login");
          })
          .catch(function (error) {
            console.log(error);
          });   
        }
        else
          window.alert("password and confirm password do not match")
      }
    };

    var handleClick = async (event) =>{
      event.preventDefault();
      const isValid = await form.validate(event);
      if (isValid) {
        axios
          .post("http://localhost:7070/FP/sendotp", {
            email: fields.email,
          })
          .then(function (response) {
            //.push("/login")
            console.log(response.data.otp);
            setOtp(response.data.otp);
          })
          .catch(function (error) {
            console.log(error);
          });   
      }
    }

   
    // var otpTimeout = setTimeout(() => {
    //   setOtp();
    //   //window.alert("otp time exceeded")
    //   //console.log("otp time exceeded")
    //   }, 25000);

    
    var verifyOtp = (e) =>{
      e.preventDefault();
      if(otp == fields.otp)
      {
        setIsOtpVerified(true);
        //clearTimeout(otpTimeout);
      }
      else{
        setIsOtpVerified(false);
        window.alert("Incorrect otp");
      }
    }

    // useEffect(() => {
    //   const timer =
    //   counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    //   return () => clearInterval(timer);
    // }, [counter]);

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
                    <form>
                        <div className="form-group">
                            <label for="email">Email:</label> 
                            <input type="text" className="form-control" id="email" name="email" onBlur={form.handleBlurEvent}
                                            onChange={form.handleChangeEvent}
                                            value={fields.email}/>
                            <button className="btn btn-primary btn-block my-3" onClick={handleClick}>Send Otp</button>
                        </div>
                        { otp && (
                            <div className="form-group">
                            <label for="otp">Enter Otp:</label> 
                            <input type="text" className="form-control" id="otp" name="otp" onBlur={form.handleBlurEvent}
                                    onChange={form.handleChangeEvent}
                                    value={fields.otp}/>
                            <div>{error}</div>
                              <button className="btn btn-primary btn-block my-3" onClick={verifyOtp}>Verify Otp</button>
                            </div> )}
                            {/* <button className="btn btn-primary btn-block my-3" onClick={verifyOtp()}>Verify Otp</button> */}
                            
                          { isOtpVerified && (
                          <>
                              <div className="form-group">
                              <label for="password">Enter password:</label> 
                              <input type="text" className="form-control" id="password" name="password" onBlur={form.handleBlurEvent}
                                              onChange={form.handleChangeEvent}
                                              value={fields.password}/>
                              {/* <button className="btn btn-primary btn-block my-3" onClick={handleClick}>Send Otp</button> */}
                              </div>
                              <div className="form-group">
                              <label for="cnfPassword">Confirm password:</label> 
                              <input type="text" className="form-control" id="cnfPassword" name="cnfPassword" onBlur={form.handleBlurEvent}
                                              onChange={form.handleChangeEvent}
                                              value={fields.cnfPassword}/>
                              {/* <button className="btn btn-primary btn-block my-3" onClick={handleClick}>Send Otp</button> */}
                              </div>
                              <div>
                              <center>
                                  <button onClick={forgetPassword} className="btn btn-primary btn-block my-3">Submit</button>
                              </center>
                              </div>
                          </>
                          )}

                        
                    </form>
                </div>
            </div>
        </div>
    </div>
  </div>
</div>
    );
}