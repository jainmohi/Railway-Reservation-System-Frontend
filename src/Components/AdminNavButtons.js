import React from "react";
import {Link} from "react-router-dom";

export default function AdminNavButtons(){

    return (
        <div className="row text-center">
        <div className="col">
        <Link class="btn btn-primary" to={"/addTrain"}>Add Train</Link>
        </div>
        <div className="col">
        <Link class="btn btn-primary" to={"/getAllTrains"}>See all trains</Link>
        </div>
        <div className="col">
        <Link class="btn btn-primary" to={"/getAllUsers"}>See all Users</Link>
        </div>
        {/* <div className="col">
        <Link class="btn btn-primary" to={"/addTrain"}>Add Train</Link>
        </div> */}
        </div>
    );
}