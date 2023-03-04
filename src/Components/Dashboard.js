import React ,{useEffect,useState}from 'react';
import { BrowserRouter as Router, Routes ,Route, useNavigate} from 'react-router-dom'
import Home from './Home/Home'
import Login from './Login'
import Header from './Header'
import Registration from './Register';
import About from './About';
import Footer from './Footer';
import ForgotPassword from './forgotPassword';
import Helper from './Helper';
import AddTrain from './addTrain';
import ManageTrain from './manageTrain';
// import ManageStation from './manageStation';
// import AddStation from './addStation';
import AdminDashboard from './Admin_Dashboard';
import axios from 'axios';
import Payment from './Payment';
import GetAllTrains from './getAllTrains';
import ProtectedRoute from './ProtectedRoute';
import UpdateTrain from './updateTrain';
import GetAllUsers from './getAllUsers';
import SearchTrainForm from './Home/SearchTrainForm';
import TrainData from './TrainData';
import MyComponent from './PassengersDetails';
import TrainsList from './seeSearchedTrains';
import PassengerDetails from './passengerDetails';
export default function Dashboard(){

    var { isLoggedIn,clearStorage,getSessionStorage,setSessionStorage} = Helper();
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

    return (
        <div>
            <Router>
                 
                <Header signOut={signOut} uName={uName} isLoggedIn={isLoggedIn}/> 
                <div className="home_div mb-4" >
                {/* <div style={{ backgroundImage:`url(${train})`,backgroundRepeat:"no-repeat" }}></div> */}
                    <Routes>
                    
                        <Route exact path="/" element={<Home/>}/>
                        <Route exact path="/login" element={<Login UpdateHeader={UpdateHeader}/>}/>
                        {/* <Route exact path="/login" element={Login}/> */}

                        <Route exact path="/register" element={<Registration/>}/>
                            {/* <Route element={<PrivateRoute/>}>
                                <Route path='/admin/dashboard' element={<Dashboard/>}/>
                            </Route> */}
                        <Route exact path="/forgotPassword" element={<ForgotPassword/>}/>
                        {/* <Route exact path="/manageStation" element={<ManageStation/>}/> */}
                        <Route exact path="/adminDashboard" element={<AdminDashboard isLoggedIn={isLoggedIn}/>}/>
                        <Route exact path="/passengerDetails" element={<PassengerDetails/>}/>
                        <Route exact path="/addTrain" element={<AddTrain/>}/>
                        <Route exact path="/manageTrain" element={<ManageTrain/>}/>
                        {/* <Route exact path="/addStation" element={<AddStation/>}/> */}
                        <Route exact path="/payments" element={<Payment/>}/>
                        <Route exact path="/getAllTrains" element={<GetAllTrains/>}/>
                        <Route exact path="/updateTrain" element={<UpdateTrain/>}/>
                        <Route exact path="/getAllUsers" element={<GetAllUsers/>}/>
                        <Route exact path="/searchTrains" element={<SearchTrainForm/>}/>
                        <Route exact path="/getAllTrains/trainData" element={<TrainData/>}/>
                        <Route exact path="/passengersDetails" element={<MyComponent/>}/>
                        <Route exact path="/trainsList" element={<TrainsList/>}/>
                        {/* <ProtectedRoute exact path="/admin/getAllTrains" isLoggedIn={isLoggedIn} element={<GetAllTrains/>} /> */}
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