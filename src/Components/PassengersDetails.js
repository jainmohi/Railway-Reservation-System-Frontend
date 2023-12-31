
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Helper from "./Helper";

function PassengerDetailsForm() {

  const [passengers, setPassengers] = useState([{ passengerName: "", gender: "", age: "" }]);
  const [error,setError] = useState("");
  const { state } = useLocation();
  const {getSessionStorage} = Helper();
  console.log(state);
  const navigate = useNavigate();

  const handleAddPassenger = () => {
    if(passengers.length<5)
      setPassengers([...passengers, { passengerName: "", gender: "", age: "" }]);
    else
      setError("You can add upto 5 passengers only")
  };

  const handleDeletePassenger = () =>{
    setPassengers([{ passengerName: "", gender: "", age: "" }]);
    setError("");
  }

  const handlePassengerChange = (event, index) => {
    event.preventDefault();
    const { name, value } = event.target;
    const updatedPassengers = [...passengers];
    updatedPassengers[index][name] = value;
    setPassengers(updatedPassengers);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {noOfPassenger:passengers.length,trainId:state.trainId,classType:state.classType};

    axios.post("http://localhost:7070/FP/users/bookingamount",data)
            .then(function (response) {
              console.log(response);
              navigate("/payments",{state:{...state,passengerList:passengers,fareAmount:response.data}});
              // navigate("/adminDashboard");
            })
            .catch(function (error) {
              console.log(error);
            });   
        // navigate("/payments",{state:{...state,passengerList:passengers}});
    // Do something with the passenger data, e.g. send it to a server

  };

  return (
    <>
    <h3 className="text-center">Passengers Details</h3>
    <form className="mx-5" onSubmit={handleSubmit}>
    {passengers.map((passenger, index) => (
      <div key={index} className="container-fluid mb-3">
        
        <h4>Passenger {index + 1}</h4>
        <div>
      <div class="row border border-1 border-light rounded shadow-sm">
      <div class="form-group col-md-4">
        <label Htmlfor={`passengerName-${index}`}>Full Name</label>
        <input type="text" class="form-control" id="passengerName" name="passengerName" placeholder="Enter full name" value={passenger.passengerName} onChange={(event) => handlePassengerChange(event, index)} required="required"/>
      </div>
      <div class="form-group col-md-4">
        <label htmlFor={`dob-${index}`}>Age</label>
        <input type="number" class="form-control" id="age" name="age" placeholder="Enter age" min="6" value={passenger.age} onChange={(event) => handlePassengerChange(event, index)} required="required"/>
      </div>
    <div class="row">
    <div class="form-group col-md-4">
        {/* <label htmlFor={`gender-${index}`}>Gender</label>
        <select class="form-control" id="gender" name="gender">
          <option value="">Choose...</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select> */}
        <div className="form-group">
                        <label htmlFor="gender">Gender:</label><br/>
                        
                        <input type="radio" className="mx-2" id="male" name="gender"  value="Male" onChange={(event) => handlePassengerChange(event, index)} required/>
                        <label htmlFor="male" className="mx-2">Male</label>
                        <input type="radio" className="mx-2" id="female" name="gender" value="Female" onChange={(event) => handlePassengerChange(event, index)}/>
                        <label htmlFor="female" className="mx-2">Female</label>
                        <input type="radio" className="mx-2" id="other" name="gender" value="Other" onChange={(event) => handlePassengerChange(event, index)}/>
                        <label htmlFor="other" className="mx-2">Other</label>
                        </div>
                        {/* <label className="error">
                        {errors.gender ? errors.gender : ""}
                        </label> */}
      </div>
    </div>
    </div>
    </div>
  </div>
  ))}
  <strong className="text-danger">{error}</strong><br/>
  <button type="button" className="btn btn-primary my-2" onClick={()=>{handleAddPassenger()}}>
        Add Passenger
      </button>
      <button type="button" className="btn btn-primary mx-3 my-2" onClick={()=>{handleDeletePassenger()}}>
        Reset
      </button><br/>
      <br/>
  <button type="submit" class="btn btn-primary">Submit</button>
  </form>
    </>
  );
};

export default PassengerDetailsForm;
