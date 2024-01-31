// SignUp.jsx

import React, { useState } from 'react';
import './SignUp.css'; // Include your CSS file here
import { useNavigate } from 'react-router-dom';
import logo4 from'../assets/admin.mp4'

const SignUp = () => {
  const [email, setEmail] = useState(''); // Fix here: use useState correctly
  const [password, setPassword] = useState(''); // Add state for password
  const navigate = useNavigate();

  const submit = () => {
    alert("Sign up Completed");
    if (email.includes('@admin.com')) {
      navigate('/Adminlogin');
    } else {
      navigate('/role');
    }
  };

  return (
    <div className="container flex">
      <div className="facebook-page flex">
      <video className='videoTag' autoPlay loop muted>
                     <source src={logo4} style={{height:400,width:200}}  type='video/mp4' />
               </video>
        <form>
          <input
            type="email"
            value={email}
            placeholder="Email or phone number"
            onChange={(e) => setEmail(e.target.value)} // Fix here: set email state
            required
          />
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)} // Add onChange for password
            required
          />
          <div className="link">
            <button onClick={submit} type="button" className="login">Login</button>
            <a href="#" className="forgot">Forgot password?</a>
          </div>
          <hr />
          <div className="button">
            <a href="#">Create new account</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
