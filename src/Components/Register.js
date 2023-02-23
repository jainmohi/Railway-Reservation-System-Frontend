import React from "react";
import { useFormInputValidation } from "react-form-input-validation";
import { useHistory, useNavigate } from "react-router-dom";
import axios from "axios";
//import HandleStorage from "./HandleStorage";
function Registration()
{
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [userName,setUserName] = useState("");
//   const [email, setEmail] = useState("");
    //   const [password, setPassword] = useState("");
    //   const [contactNumber, setContactNumber] = useState("");
var history//();
var navigate = useNavigate();
  const [fields, errors, form] = useFormInputValidation(
    {
      firstName: "",
      lastname: "",
      email: "",
      password: "",
      phone: "",
      role:"",
    },
    {
      firstName: "required",
      lastname: "required",
      email: "required|email",
      password: "required",
      phone: "required|numeric|digits_between:10,12",
      role: "required"
    }
  );

  const onSubmit = async (event) => {
      const isValid = await form.validate(event);
      if (isValid) {
        axios
          .post("http://localhost:7070/FP/users/registration", {
              firstName: fields.firstName,
              lastName: fields.lastname,
            email: fields.email,
            password: fields.password,
            phone: fields.phone,
            role: fields.role
          })
          .then(function (response) {
            //.push("/login")
            console.log(response);  
            window.alert("Successfully registered for "+response.data.firstName)
            navigate("/login");
          })
          .catch(function (error) {
            console.log(error);
          });   
      }
    };

  var submitForm = () =>{

  }
    return(
    <>
    <div className="container">
    <div className="row justify-content-center">
        <div className="col-sm-8 col-md-6 col-lg-4">
            <div className="card mt-5">
                <div className="card-header text-center">
                    <h4>Registration</h4>
                </div>
                <div className="card-body">
                    <form className="myForm"
            noValidate
            autoComplete="off"
            onSubmit={onSubmit}>
                    <div className="row">
                    <div className="form-group col">
                            <label htmlFor="firstName">FirstName:</label>
                            <input type="text" className="form-control" id="firstName" name="firstName" value={fields.firstName}
                onChange={form.handleChangeEvent}
                onBlur={form.handleBlurEvent}
                data-async
                />
                            <label className="error">
                            {errors.firstName ? errors.firstName : ""}
                        </label>
                        </div>
                        <div className="form-group col">
                            <label htmlFor="lastname">LastName:</label>
                            <input type="text" className="form-control" id="lastname" name="lastname" value={fields.lastname}
                onChange={form.handleChangeEvent}
                onBlur={form.handleBlurEvent}
                data-async/>
                        </div>
                        <label className="error">
                {errors.lastname ? errors.lastname : ""}
              </label> 
                    </div>
                        {/* <div className="form-group">
                            <label for="username">UserName:</label>
                            <input type="text" className="form-control" id="username" name="username" value={userName} onChange={(e) => setUserName(e.target.value)}/>
                        </div> */}
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="text" className="form-control" id="email" name="email" onBlur={form.handleBlurEvent}
                  onChange={form.handleChangeEvent}
                  value={fields.email}/>
                        </div>
                        <label className="error">{errors.email ? errors.email : ""}</label>
                        <div className="form-group">
                            <label htmlFor="phone">PhoneNumber:</label>
                            <input type="tel" className="form-control" id="phone" name="phone" onBlur={form.handleBlurEvent}
                  onChange={form.handleChangeEvent}
                  value={fields.phone}/>
                        </div>
                        <label className="error">
                {errors.phone ? errors.phone : ""}
              </label>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" className="form-control" id="password" name="password" onBlur={form.handleBlurEvent}
                  onChange={form.handleChangeEvent}
                  value={fields.password}/>
                        </div>
                        <label className="error">
                {errors.password ? errors.password : ""}
              </label>
              <div onChange={form.handleChangeEvent} className="form-group">
                        <label htmlFor="role">Role:</label><br/>
                        
                        <input type="radio" className="mx-2" id="user" name="role" onBlur={form.handleBlurEvent} value="USER"/>
                        <label htmlFor="user" className="mx-2">User</label>
                        {/* <input type="radio" className="mx-2" id="admin" name="role" onBlur={form.handleBlurEvent} value="ADMIN"/>
                        <label htmlFor="admin" className="mx-2">Admin</label> */}
                        </div>
                        <label className="error">
                {errors.role ? errors.role : ""}
              </label>
                        <div>
                        <center>
                            <button type="submit" className="btn btn-primary btn-block my-3">Register</button>
                        </center>
                        </div>
                    </form>
                    <div className="text-center mt-3">
                        Already have an account? <a href="#">Sign Up</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
            </>
            );
}

export default Registration;

