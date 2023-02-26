import React ,{useEffect,useState}from 'react';
import { BrowserRouter as Router, Routes ,Route, useNavigate} from 'react-router-dom'
import Home from './Home/Home'
import Login from './Login'
import Header from './Header'
import Registration from './Register';
import About from './About';
import Footer from './Footer';
import ForgotPassword from './forgotPassword';
import PassengerDetails from './passengerDetails';
import Helper from './Helper';
import AddTrain from './addTrain';
import ManageTrain from './manageTrain';
import AddStation from './addStation';

export default function Dashboard(){


    var { isLoggedIn,clearStorage,getSessionStorage,login } = Helper();
    // var navigate = useNavigate();
    var [uName, setUName]  = useState("Guest");

    useEffect(()=>{
        if(isLoggedIn())
        {
            var loggedInUserName = getSessionStorage("userName");
            setUName(loggedInUserName);
        }
    }, []);

    var UpdateHeader=(userName)=>{
        setUName(userName);
    }

    var signOut = ()=>{
        setUName("Guest");
        clearStorage();
        // navigate("/");
    }

    var signIn =()=>{
        // navigate("/login");
    }
    return (
        <div>
            <Router>
                <div className="home_div">
                <Header signOut={signOut} uName={uName}/> 
                    <Routes>
                    
                        <Route exact path="/" element={<Home/>}/>
                        <Route exact path="/login" element={<Login login={login}/>}/>
                        {/* <Route exact path="/login" element={Login}/> */}

                        <Route exact path="/register" element={<Registration/>}/>
                            {/* <Route element={<PrivateRoute/>}>
                                <Route path='/admin/dashboard' element={<Dashboard/>}/>
                            </Route> */}
                        <Route exact path="/forgotPassword" element={<ForgotPassword/>}/>
                        <Route exact path="/passengerDetails" element={<PassengerDetails/>}/>
                        <Route exact path="/addTrain" element={<AddTrain/>}/>
                        <Route exact path="/manageTrain" element={<ManageTrain/>}/>
                        <Route exact path="/addStation" element={<AddStation/>}/>
                    </Routes>
                    </div>
                    <Routes>
                        <Route exact path="/about" element={<About/>}/>
                    </Routes>
             <Footer/>
            </Router>
        </div>
    );
}