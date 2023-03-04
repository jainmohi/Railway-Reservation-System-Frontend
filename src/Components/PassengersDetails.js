
import React, { useState } from "react";

function PassengerDetailsForm() {
  
  const [passengers, setPassengers] = useState([{ name: "", gender: "", age: "" }]);

  const handleAddPassenger = () => {
    setPassengers([...passengers, { name: "", gender: "", age: "" }]);
  };

  const handlePassengerChange = (event, index) => {
    event.preventDefault();
    const { name, value } = event.target;
    const updatedPassengers = [...passengers];
    updatedPassengers[index][name] = value;
    setPassengers(updatedPassengers);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(passengers);
    // Do something with the passenger data, e.g. send it to a server
  };

  return (
    <>
    {/* <form onSubmit={handleSubmit}>
      {passengers.map((passenger, index) => (
        <div key={index}>
          <h2>Passenger #{index + 1}</h2>
          <label htmlFor={`name-${index}`}>Full Name:</label>
          <input type="text" id={`name-${index}`} name="name" value={passenger.name} onChange={(event) => handlePassengerChange(event, index)} />

          <label htmlFor={`gender-${index}`}>Gender:</label>
          <input type="text" id={`gender-${index}`} name="gender" value={passenger.gender} onChange={(event) => handlePassengerChange(event, index)} />

          <label htmlFor={`dob-${index}`}>Date of Birth:</label>
          <input type="text" id={`dob-${index}`} name="dob" value={passenger.dob} onChange={(event) => handlePassengerChange(event, index)} />

          <label htmlFor={`nationality-${index}`}>Nationality:</label>
          <input type="text" id={`nationality-${index}`} name="nationality" value={passenger.nationality} onChange={(event) => handlePassengerChange(event, index)} />

          <label htmlFor={`passport-${index}`}>Passport Number:</label>
          <input type="text" id={`passport-${index}`} name="passport" value={passenger.passport} onChange={(event) => handlePassengerChange(event, index)} />

          <label htmlFor={`contact-${index}`}>Contact Number:</label>
          <input type="text" id={`contact-${index}`} name="contact" value={passenger.contact} onChange={(event) => handlePassengerChange(event, index)} />
        </div>
      ))}

      <button type="button" onClick={handleAddPassenger}>
        Add Passenger
      </button>

      <button type="submit">Submit</button>
    </form> */}
    
    <form className="mx-5" onSubmit={handleSubmit}>
    {passengers.map((passenger, index) => (
      <div key={index} className=" container-fluid mb-3">
        <h4>Passenger {index + 1}</h4>
        <div>
      <div class="row border rounded">
      <div class="form-group col-md-4">
        <label Htmlfor={`name-${index}`}>Full Name</label>
        <input type="text" class="form-control" id="name" name="name" placeholder="Enter full name" value={passenger.name} onChange={(event) => handlePassengerChange(event, index)}/>
      </div>
      <div class="form-group col-md-4">
        <label htmlFor={`dob-${index}`}>Age</label>
        <input type="number" class="form-control" id="age" name="age" placeholder="Enter age" min="6" value={passenger.age} onChange={(event) => handlePassengerChange(event, index)}/>
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
                        
                        <input type="radio" className="mx-2" id="male" name="gender"  value="Male"/>
                        <label htmlFor="male" className="mx-2">Male</label>
                        <input type="radio" className="mx-2" id="female" name="gender" value="Female"/>
                        <label htmlFor="female" className="mx-2">Female</label>
                        <input type="radio" className="mx-2" id="other" name="gender" value="Other"/>
                        <label htmlFor="other" className="mx-2">Other</label>
                        </div>
                        {/* <label className="error">
                        {errors.gender ? errors.gender : ""}
                        </label> */}
                <div></div>
      </div>
    </div>
    </div>
    </div>
  </div>
  ))}
  <button type="button" className="btn btn-primary my-2" onClick={handleAddPassenger}>
        Add Passenger
      </button><br/>
  <button type="submit" class="btn btn-primary">Submit</button>
  </form>
    </>
  );
};

export default PassengerDetailsForm;
