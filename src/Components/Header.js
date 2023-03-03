import { useState } from "react";
import { Link } from "react-router-dom";
//import '../assets/common.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Helper from "./Helper";
//import Home from "./Home";
//import Login from "./Login";
//import Register from "./Register";
//import Footer from "./Footer";
function Header(props)
{ 

    var {getSessionStorage} = Helper();
    
    // var ShowButtons = ()=>{
    //     if(true)
    //     {
    //       return <button onClick={props.SignOut}>Log out</button>
    //     }
    //     else
    //     {
    //        return <button onClick={props.SignIn}>Log In</button>
    //     }
    // }
    var showButtons = () =>{
      // debugger;
      console.log(props.isLoggedIn());
      //console.log(getSessionStorage("user").role);
        if(props.isLoggedIn()){
           return <>
           
                    <li className="nav-item mx-2 text-primary"><Link to="/" onClick={props.signOut}><button class="btn btn-primary">Log out</button></Link></li>
                    <li className="nav-item mx-2 text-primary" >Welcome {props.uName}</li>
                  </>
        }
        else{
           return <>
                  <li className="nav-item mx-2">
                    <Link to={"/login"}>Login</Link>
                  </li>
                  <li className="nav-item mx-2">
                    <Link to={"/register"}>Register</Link>
                  </li>
                  <li className="nav-item mx-2 text-primary" >Welcome {props.uName}</li>
                </>
        }
    }
    return (
    <>
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <a className="navbar-brand" href="#">Railway Reservation System</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active mx-2 ">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="nav-item active mx-2 ">
            <Link to={"/searchTrains"}>SearchTrains</Link>
          </li>
          {/* <li className="nav-item mx-2">
            <Link to={"/admin"}>Admin</Link>
          </li> */}
          <li className="nav-item mx-2">
            <Link to={"/about"}>About Us</Link>
          </li>
          {/* <li className="nav-item mx-2">
            <Link to={"/passengerDetails"}>PassengerDetails</Link>
          </li> */}
          {/* <li className="nav-item mx-2">
            <Link to={"/addTrain"}>Add Train</Link>
          </li>
          <li className="nav-item mx-2">
            <Link to={"/manageTrain"}>Manage Train</Link>
          </li>
          <li className="nav-item mx-2">
            <Link to={"/addStation"}>Add Station</Link>
          </li> */}
          {/* <li className="nav-item mx-2">
            <Link to={"/login"}>Login</Link>
          </li>
          <li className="nav-item mx-2">
            <Link to={"/register"}>Register</Link>
          </li> */}
          {showButtons()}
        </ul>
      </div>
    </nav>
    { }


    </div>
    </>
    )

}
export default Header;
