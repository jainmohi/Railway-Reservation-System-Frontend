import React, { useState } from 'react'
import { BrowserRouter as Router, Route,Link } from 'react-router-dom'
import SideBar from './SideBar';
import Helper from './Helper'
import Login from './Login';
import AdminNavButtons from './AdminNavButtons';
export default function AdminDashboard(props){

    const [isloggedIn,setIsLoggedIn] = useState(props.isLoggedIn)
    
    return (
        <AdminNavButtons/>
  )

}