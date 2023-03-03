import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useFormInputValidation } from "react-form-input-validation";
import AdminNavButtons from "./AdminNavButtons";
import axios from "axios";

export default function UpdateTrain(){

    const { state } = useLocation();
    const [fields, errors, form] = useFormInputValidation(
        {
            trainId : state.train_code,
            trainName: state.trainName,
            startTime: state.startTime,
            endTime: state.endTime,
            startStation:state.startStation,
            endStation:state.endStation,
            distance:state.distance,
        },
        {
            trainId: "required",
            trainName: "required",
            startTime: "required",
            endTime: "required",
            startStation:"required",
            endStation:"required",
            distance:"required"
          
        }
      );
    
      const onSubmit = async (event) => {
        const isValid = await form.validate(event);
        if (isValid) {
          axios
            .post("http://localhost:7070/FP/admin/updatetrain", {
                train_code:fields.trainId,
                trainName: fields.trainName,
                startTime: fields.startTime,
                endTime: fields.endTime,
                startStation:fields.startStation,
                endStation:fields.endStation,
                distance:fields.distance
              
            })
            .then(function (response) {
             
              console.log(response);  
              window.alert("train added successfully");
              // navigate("/adminDashboard");
            })
            .catch(function (error) {
              console.log(error);
            });   
        }
      };

    return (
        <>
    <AdminNavButtons/>
    <div className="container col-10">
    <div className="row justify-content-center">
        <div className="col-sm-8 col-md-6 col-lg-4">
            <div className="card mt-5  shadow-lg">
                <div className="card-header text-center">
                    <h4>Update Train Data</h4>
                </div>
                <div className="card-body">
                    <form className="myForm"
            noValidate 
            autoComplete="off"
            onSubmit={onSubmit}>

                    
                    <div className="form-group col">
                    <label htmlFor="trainId">Train Id:</label>
                    <input type="text" className="form-control" id="trainId" name="trainId" readOnly={true} value={fields.trainId}
                    onChange={form.handleChangeEvent}
                    onBlur={form.handleBlurEvent}
                    data-async
                    />
                            <label className="error">
                            {errors.trainId ? errors.trainId : ""}
                        </label>
                    </div>

                    <div className="form-group col">
                    <label htmlFor="firstName">Train Name:</label>
                    <input type="text" className="form-control" id="trainName" name="trainName" value={fields.trainName}
                    onChange={form.handleChangeEvent}
                    onBlur={form.handleBlurEvent}
                    data-async
                    />
                            <label className="error">
                            {errors.trainName ? errors.trainName : ""}
                        </label>
                        
                        <div className="form-group col">
                            <label htmlFor="startTime">start Time:</label>
                            <input type="time" className="form-control" id="startTime" name="startTime" value={fields.startTime}
                onChange={form.handleChangeEvent}
                onBlur={form.handleBlurEvent}
                data-async/>
                <label className="error">
                {errors.startTime ? errors.startTime : ""}
              </label> 
                        </div>
                      
                    </div>
                    <div className="form-group col">
                            <label htmlFor="endTime">end Time:</label>
                            <input type="time" className="form-control" id="endTime" name="endTime" value={fields.endTime}
                onChange={form.handleChangeEvent}
                onBlur={form.handleBlurEvent}
                data-async/>
                <label className="error">
                {errors.endTime ? errors.endTime : ""}
              </label>
                        </div>
                    
                <div className="form-group col">
                    <label htmlFor="startStation">Start Station</label>
                    <input type="text" className="form-control" id="startStation" name="startStation" value={fields.startStation}
                onChange={form.handleChangeEvent}
                onBlur={form.handleBlurEvent}
                data-async/>
                <label className="error">
                {errors.startStation ? errors.startStation : ""}
              </label> 
                        </div>

              <div className="form-group col">
                  <label htmlFor="endStation">End Station:</label>
                  <input type="text" className="form-control" id="endStation" name="endStation" value={fields.endStation}
                onChange={form.handleChangeEvent}
                onBlur={form.handleBlurEvent}
                data-async/>
                <label className="error">
                {errors.endStation ? errors.endStation : ""}
              </label> 
                        </div>

              <div className="form-group col">
              <label htmlFor="distance">distance</label>
              <input type="number" className="form-control" id="distance" name="distance" value={fields.distance}
                onChange={form.handleChangeEvent}
                onBlur={form.handleBlurEvent}
                data-async/>
                <label className="error">
                {errors.distance ? errors.distance : ""}
              </label> 
                        </div>       
                        
                       
              
                        <div>
                        <center>
                            <button type="submit" className="btn btn-primary btn-block my-3">Update</button>
                        </center>
                        </div>
                    </form>
                   
                </div>
            </div>
        </div>
    </div>
</div>    
      
    </>


    );
}