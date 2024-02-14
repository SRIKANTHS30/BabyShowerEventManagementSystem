import React from 'react';
import '../components/Login1.css';

const Login1 = () => {
  const handleLoginClick = () => {
    const loginForm = document.querySelector(".form-inner form.login");
    const loginText = document.querySelector(".title-text .login");
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
  };

  const handleSignupClick = () => {
    const loginForm = document.querySelector(".form-inner form.login");
    const loginText = document.querySelector(".title-text .login");
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
  };

  const handleSignupLinkClick = () => {
    handleSignupClick();
    return false;
  };

  return (
    <div className='pii'>
      <h1 className='admin'>Admin Login</h1>
      <div className="wrapper1">
        <div className="title-text">
          <div className="title login">Login Form</div>
        </div>
        <div className="form-container">
    
            <div className="slider-tab"></div>
          </div>
          <div className="form-inner">
            <form className="login">
              <div className="field">
                <input type="text" placeholder="Email Address" required />
              </div>
              <div className="field">
                <input type="password" placeholder="Password" required />
              </div>
              <div className="pass-link">
                <a href="#">Forgot password?</a>
              </div>
              <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Login" />
              </div>
            </form>
          </div>
        </div>
      </div>
   
  );
};

export default Login1;
