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

export default function Dashboard(){


    var { isLoggedIn,clearStorage,getSessionStorage } = Helper();
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
                <Header signIn={signIn} signOut={signOut}/>      
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route exact path="/login" element={<Login/>}/>
                        <Route exact path="/register" element={<Registration/>}/>
                            {/* <Route element={<PrivateRoute/>}>
                                <Route path='/admin/dashboard' element={<Dashboard/>}/>
                            </Route> */}
                        <Route exact path="/forgotPassword" element={<ForgotPassword/>}/>
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