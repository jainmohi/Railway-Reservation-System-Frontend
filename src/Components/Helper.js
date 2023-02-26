import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function setSessionStorage(key, value) {
    sessionStorage.setItem(key, value);
  }

  function getSessionStorage(key) {
    return sessionStorage.getItem(key);
  }
  
  function isLoggedIn() {
    var isUserLoggedIn = getSessionStorage("isLoggedIn");
    if (isUserLoggedIn != null) {
      return isUserLoggedIn;
    } else {
      return false;
    }
  }
  
  function clearStorage() {
    sessionStorage.clear();
  }

  var login = (fields,isValid) =>
    {
      //debugger;
     //var navigate = useNavigate();
    //const isValid = await form.validate(event);
      if (isValid) {
        axios.post("http://localhost:7070/FP/users/login", {
            email: fields.email,
            password: fields.password
          })
          .then(function (response) {
            //.push("/login")
            if(fields.email==response.data.email && fields.password==response.data.password)
             { 
                setSessionStorage("userName", response.data.firstName);
                setSessionStorage("user", response.data);
                setSessionStorage("isLoggedIn",true);
                setSessionStorage("token", "1234");
                window.alert("Logged in as "+response.data.firstName);
                 //navigate("/");
                 console.log(response);
                 window.location.reload(true); 
             }
             else{
                window.alert("Credentials do not match");
             }
            console.log(response);  
          })
          .catch(function (error) {
            console.log(error);
          });   
      }
    };


  function Helper() {
    return {
      setSessionStorage,
      getSessionStorage,
      isLoggedIn,
      clearStorage,
      login,
    };
  }
  
  export default Helper;