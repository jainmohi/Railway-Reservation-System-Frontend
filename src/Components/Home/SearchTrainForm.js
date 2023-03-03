import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useFormInputValidation } from "react-form-input-validation";
import axios from "axios";
import Helper from "../Helper";

export default function SearchTrainForm(){

    const navigate = useNavigate();
    const {isLoggedIn,getSessionStorage} = Helper();  
    const [fields, errors, form] = useFormInputValidation(
        {
            fromStationName: "",
            toStationName: "",
        },
        {
            fromStationName: "required",
            toStationName: "required"
        }
      );
    
      var postData = async (event)=>{
        //debugger;
       //var navigate = useNavigate();
      const isValid = await form.validate(event);
      if(isLoggedIn()){
        
        if (isValid) {
            axios.post("http://localhost:7070/FP/users/getTrainsByStations", {
              fromStation: fields.fromStationName,
              toStation: fields.toStationName
              })
              .then(function (response) {
                console.log(response);
                navigate("/trainsList",{state:response.data})
              })
              .catch(function (error) {
                console.log(error);
              });   
        };
        }
        else{
            window.alert("You need to login to search trains")
            navigate("/login")
          }
        
      }
      

    return (
        <div>
            <div className="signup-form" onSubmit={postData}>
    <form action="/examples/actions/confirmation.php" method="post">
        <div clasName="text-center">
        <h2>Search trains</h2>
        </div>
        
        <div className="form-group">
        <input type="text" className="form-control" name="fromStationName" 
                                    onBlur={form.handleBlurEvent}
                                    onChange={form.handleChangeEvent}
                                    value={fields.fromStationName} placeholder="From Station" required="required"/>
                            <label className="error">
                                {errors.fromStationName? errors.fromStationName: ""}
                            </label>
        </div>
        <div className="form-group">
        <input type="text" className="form-control" name="toStationName"
                                    onBlur={form.handleBlurEvent}
                                    onChange={form.handleChangeEvent}
                                    value={fields.toStationName} placeholder="To Station" required="required"/>
        </div>
        <div className="form-group">
			<div className="row">
            {/* <div className="col"><input type="date" className="form-control" name="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Date" required="required"/></div>
            <div className="col"><input type="text" className="form-control" name="classType" value={classType} onChange={(e) => setClassType(e.target.value)} placeholder="Class" required="required"/></div> */}
			</div>        	
        </div>
		{/* <div className="form-group">
            <input type="password" className="form-control" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required="required"/>
        </div> */}
		{/* <div className="form-group">
            <input type="password" className="form-control" name="confirm_password" placeholder="Confirm Password" required="required"/>
        </div>        
        <div className="form-group">
			<label className="form-check-label"><input type="checkbox" required="required"/> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
		</div> */}
		<div className="form-group">
            <button type="submit" className="btn btn-primary btn-lg btn-block">Search</button>
            <div className="text-center mt-2"><Link to="/login">Sign Up here</Link></div>
        </div>
    </form>
</div>

            </div>
    )
}