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
  

  
  function Helper() {
    return {
      setSessionStorage,
      getSessionStorage,
      isLoggedIn,
      clearStorage,
    };
  }
  
  export default Helper;