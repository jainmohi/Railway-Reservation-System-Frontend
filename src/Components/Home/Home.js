import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import SearchTrainForm from './SearchTrainForm';
import train from '../../images/train.png';
export default function Home() {

    //const [contactNumber, setContactNumber] = useState("");

    

    return (

            <div className="Hero-Section" style={{ }}>
            <img src={train} alt="My Image" width="100%" height="600px" />
            </div>
    )
}