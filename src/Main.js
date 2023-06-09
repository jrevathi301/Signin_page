import React, { useState } from 'react';
import './Main.css';
const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform sign-in logic here using email and password
    console.log('Sign-in submitted');
  };

  const handleForgotPasswordClick = () => {
    setShowForgotPassword(true);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    // Perform password reset logic here using email
    console.log('Password reset requested');
  };

  return (
    <>
    <div className='container'>
      <header className='header'>
         <div className='name'>Vajra</div>
         <div className='home'>Home</div>
         <div className='num'>+91 9745795468</div>
      </header>
      <div className='content'>
           <h2 id='fea'>Feature</h2>
           <div id='digitize'>
            <img src='https://th.bing.com/th/id/OIP.r7N_PNC_Rs3EOOVxLJhuBgAAAA?pid=ImgDet&w=194&h=194&c=7&dpr=1.1'></img>
            <h3>Digitize </h3>
            <h4>A Bird eye view of the entire Biomedical Operations.</h4>
           </div>
           <div id='track'>
           <img src='https://th.bing.com/th/id/OIP.kiN3DxbED2SESCbYmKYUXgHaHa?pid=ImgDet&w=202&h=202&c=7&dpr=1.1'></img>
            <h3>Track</h3>
            <h4>Track the product life cycle and service history.</h4>
           </div>
           <div id='biomedical'>
           <img src='https://th.bing.com/th/id/OIP.ulXHJWPz0OCY5XIDZKlE5QHaHa?pid=ImgDet&w=202&h=202&c=7&dpr=1.1'></img>
            <h3>Biomedical Budget</h3>
            <h4>Regulate and save budget through analysed data and informed</h4>
           </div>
      </div>
      <div className='signinpage'>
      <h1>Sign In</h1>
      <hr></hr>
      <br></br>
      <h2>Sign in your account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label id='email'>Email id</label><br></br>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label id='pwd'>Password</label><br></br>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        {showForgotPassword ? (
          <div>
            <p>Enter your email to reset your password:</p>
            <input type="password" value={email} onChange={handleEmailChange} />
            <button type="submit" onClick={handleResetPassword}>Reset Password</button>
          </div>
        ) : (
          <div>
            <p onClick={handleForgotPasswordClick}>Forgot Password?</p>
            <button type="submit">Sign In</button>
            
          </div>
        )}
      </form>
      </div>
      <div>
         <div id='down'>Download our app</div>
         <div id='downicon'><img src='https://th.bing.com/th/id/OIP.kBttZVcjBz_xUFPrbfvLuAHaHa?w=180&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7'></img></div>
         <div id='appicon'> <img src='https://th.bing.com/th/id/OIP.YCnKSjT1JiLVdu4bAqpBAAHaE8?w=240&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7'></img></div>
      </div>
      <footer className='footer'>
            <div id='fname'>vajra </div>
            <div id='copyrights'>© 2020 VAJRA, All Rights Reserved</div>
            <div id='terms'>Terms & conditions | FAQ’s</div>
      </footer>
    </div>
    </>
  );
};

export default SignIn;
