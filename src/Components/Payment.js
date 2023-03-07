import React from 'react';
import { useState } from "react";
//import { Link, useNavigate } from "react-router-dom";
//import HandleStorage from "./HandleStorage";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useFormInputValidation } from "react-form-input-validation";
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Helper from './Helper';
export default function Payment() {

    const [paymentType,setPaymentType] = useState("");
    const { state } = useLocation();
    console.log(state);
    const {getSessionStorage,setSessionStorage} = Helper();
    const user = JSON.parse(getSessionStorage("user"));
    const navigate = useNavigate();

    function handleChange(event) {
        const selectedValue = event.target.value;
        console.log(`Selected value: ${selectedValue}`);
        setPaymentType(selectedValue);
        console.log(paymentType);
        
      }

      const submitPayment = () =>{
        alert("Payment initiated");
        const data = {
                trainId:state.trainId,
                userId:user.user_id,
                classType:state.classType,
                temparoryPassengerdetails:state.passengerList,
                paymentMethod:paymentType
                }

                console.log(data);

                axios
                .post("http://localhost:7070/FP/users/bookticket",data)
                .then(function (response) {
                  //.push("/login")
                  console.log(response);
                  setSessionStorage("ticketDetails",JSON.stringify(response.data));  
                  setSessionStorage("isTicketGenerated",true);
                  navigate("/ticket",{state:{noOfPassengers:state.passengerList.length}});
                })
                .catch(function (error) {
                  console.log(error);
                });   
      }
    return ( <div>
        <div className="container">
        <div className="row justify-content-center">
        <div className="col-sm-8 col-md-6 col-lg-4">
        <div className="card mt-5 shadow">
        <div className="card-header text-center shadow">
            <h4>Payments</h4>
        </div>
        <div className="card-body">
            <form>
                <div className="mb-3">
                <u>Amount Payable:</u>&nbsp;&nbsp;<span><strong>{state.fareAmount} rs.</strong></span>
                </div>
                <div className="form-group">
                    <label for="name">Name:</label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>{user.firstName+" "+user.lastName}</b>
        
                            {/* onBlur={form.handleBlurEvent}
                            onChange={form.handleChangeEvent}
                            value={fields.email} */}
                </div>
                {/* <label className="error">
                {errors.name ? errors.name : ""}
                </label> */}

                <div className="form-group mt-2">
                    <label for="email">Payment Type:</label>
                    <select className="rounded border-1 mx-2" id="paymentType" name="paymentType" value={paymentType} onChange={handleChange} >
                         {/* <option value="">Select an option</option>  */}
                        <option value="Net Banking">Net Banking</option>
                        <option value="Credit Card">Credit Card</option>
                        <option value="Debit Card">Debit Card</option>
                        <option value="Upi">UPI</option>
                    </select>
                            {/* onBlur={form.handleBlurEvent}
                            onChange={form.handleChangeEvent}
                            value={fields.password} */}
                </div>
                {/* <label className="error">
                {errors.email ? errors.email : ""}
                </label> */}
            
                {/* <label className="error">
                {errors.date ? errors.date : ""}
                </label> */}

                {/* <label className="error">
                {errors.date ? errors.date : ""}
                </label> */}

                <div>
                <center>
                    <button type="button" className="btn btn-primary btn-block my-3" onClick={submitPayment}>Payment Gateway</button>
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