import React from "react";
import '../components/Role.css';
import admin from '../assets/Admin.jpg';
import user from '../assets/User.jpg';;
import { Link } from "react-router-dom";
import Navbar from "./Nav";
// import Navbar from "../components/Navbar";

function Role() {
    return (
        <>
       
        <div className="role">
            
            <div className="role-card">
                <Link className='r' to='/signup'>
                <img src={admin} alt="Admin" />
                <br></br>
                <br></br>
                <h2 >Admin</h2>
                </Link>
            </div>
            <div className="role-card">
                <Link className='r' to='/login'>
                <img src={user} alt="User" />
                    <br></br>
                    <br></br>
                <h2>User</h2>
                </Link>
            </div>
        </div>
        </>
    );
}

export default Role;