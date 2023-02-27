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
    {}
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
    {/* <script
      src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
      integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
      crossOrigin="anonymous"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
      integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
      crossOrigin="anonymous"
    ></script>
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
      integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
      crossOrigin="anonymous"
    ></script>
 */}


    </div>
    </>
    )

}
export default Header;
