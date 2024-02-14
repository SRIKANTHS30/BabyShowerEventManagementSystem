import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import "../components/Login.css";



const Login = () => {
 
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:8081/api/v1/auth/authenticate', loginFormData);
      
      // Log the response to the console for debugging
      console.log('Login response:', response);
      // Assuming the response contains a user object with an email property
      
      
      if (loginFormData.email.includes('@admin.com')) {
        // If the email contains '@admin.com', navigate to the admin dashboard
        localStorage.setItem("role",JSON.stringify({role : "admin"}))
        navigate('/Adminlogin');
      } else {
        // Otherwise, navigate to the user dashboard
        localStorage.setItem("role",JSON.stringify({role : "user"}))
        navigate('/Userlogin');
      }
    } catch (error) {
      alert("Login failed");
      // Handle login error
    }
  };

  return (
    <>
      <div>
        <h2 className='h2'>Login Page</h2>
        <form className='form'>
          <div>
            <label className='label'>Email:</label>
            <input className='input'
              type="text"
              name="email"
              value={loginFormData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label className='label'>Password:</label>
            <input className='input'
              type="password"
              name="password"
              value={loginFormData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <button className="button4" type="submit" onClick={handleLoginSubmit}>Login</button>
          </div>
        </form>

        <p className='p'>Don't have an account? 
          <Link to="/signup">  Sign up here</Link>
        </p>
      </div>
    </>
  );
};

export default Login;
