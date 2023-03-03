import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useFormInputValidation } from "react-form-input-validation";

export default function SearchTrainForm(){

    const navigate = useNavigate();
    const [fromStationName, setFromStationName] = useState("");
    const [toStationName, setToStationName] = useState("");

    var postData = () => {
         
    }

    return (
        <div>
            <div className="signup-form" onSubmit={postData}>
    <form action="/examples/actions/confirmation.php" method="post">
        <div clasName="text-center">
        <h2>Search trains</h2>
        </div>
        
        <div className="form-group">
        <input type="text" className="form-control" name="fromStationName" value={fromStationName} onChange={(e) => setFromStationName(e.target.value)} placeholder="From Station" required="required"/>
        </div>
        <div className="form-group">
        <input type="text" className="form-control" name="toStationName" value={toStationName} onChange={(e) => setToStationName(e.target.value)} placeholder="To Station" required="required"/>
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