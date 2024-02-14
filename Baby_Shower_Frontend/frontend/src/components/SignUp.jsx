import React, { useState } from 'react';
import axios from 'axios';
import '../components/SignUp.css';

const Signup = () => {
  const [signupFormData, setSignupFormData] = useState({
    name: '',  // Change 'userName' to 'name'
    email: '',
    password: '',
    confirmPassword: '',
    role:'',
  });

  const handleInputChange = (e) => {
    setSignupFormData({ ...signupFormData, [e.target.name]: e.target.value });
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8081/api/v1/auth/register', signupFormData);
      localStorage.setItem("role",JSON.stringify({role : "user"}))
      alert("SignUp");
      // Handle successful signup, e.g., redirect to another page
    } catch (error) {
      console.error(error);
      // Handle signup error
    }
  };

  return (
    <div>
      <h2 className='h2'>Signup Page</h2>
      <form className='form1' onSubmit={handleSignupSubmit}>
        <div>
          <label className='label'>User Name:</label>
          <input className='input'
            type="text"
            name="name"  // Change 'userName' to 'name'
            value={signupFormData.name}  // Update to 'signupFormData.name'
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label className='label'>Email:</label>
          <input className='input'
            type="text"
            name="email"
            value={signupFormData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label className='label'>Password:</label>
          <input className='input'
            type="password"
            name="password"
            value={signupFormData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label className='label'>Confirm Password:</label>
          <input className='input'
            type="password"
            name="confirmPassword"
            value={signupFormData.confirmPassword}
            onChange={handleInputChange}
            required
          />
          <label className='label'>Role:</label>
          <input className='input'
            type="text"
            name="role"
            value={signupFormData.role}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <button className="button4" type="submit">Signup</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
