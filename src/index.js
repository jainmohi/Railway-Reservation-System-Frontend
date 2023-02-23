import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes ,Route} from 'react-router-dom'
import Home from './Components/Home/Home';
import Login from './Components/Login'
import Header from './Components/Header'
import Registration from './Components/Register';
import About from './Components/About';
import Footer from './Components/Footer';
import ForgotPassword from './Components/forgotPassword';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <div className="home_div">
      <Header></Header>      
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


    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
