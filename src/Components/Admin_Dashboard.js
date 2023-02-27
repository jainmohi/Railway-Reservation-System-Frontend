import React, { useState } from 'react'
import { BrowserRouter as Router, Route,Link } from 'react-router-dom'

import Helper from './Helper'
import Login from './Login';
export default function AdminDashboard(props){

    const [isloggedIn,setIsLoggedIn] = useState(props.isLoggedIn)
    
    return (
        <div className="mx-0">
    <div className="row" id="admin_row">
      <div className="col col-sm-4 col-md-4 col-lg-4 col-xl-2">
      <div class="sidebar d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" >
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      {/* <svg class="bi pe-none me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg> */}
      <span class="fs-4">Sidebar</span>
    </a>
    <hr/>
    <ul class="nav nav-pills flex-column mb-auto">
      <li className="nav-item mx-2">
      <Link to={"/addTrain"}>Add Train</Link>
      </li>
      
      <li>
      <li className="nav-item mx-2">
            <Link to={"/manageTrain"}>Manage Train</Link>
          </li>
      </li>
      <li className="nav-item mx-2">
      <Link to={"/addStation"}>Add Station</Link>
      </li>
      <li className="nav-item mx-2">
      <Link to={"/manageTrain"}>Manage Station</Link>
      </li>
    </ul>
    <hr/>
    <div class="dropdown">
     
      <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
        <li><a class="dropdown-item" href="#">New project...</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><hr class="dropdown-divider"/></li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
      </div>
      </div>
    </div>
  )

}