import React from 'react';
import './Sign.css'


    
function Sign() {
    
  return (
    <div className='bg-img'>
      <div className="content">
        <header>Login</header>
        <form action="#">
          <div className="field">
            <span className="fa fa-user"></span>
            <input type="email" required placeholder='Enter Email'/>
          </div>
          <div className="field space">
            <span className="fa fa-lock"></span>
            <input type="password" className='pass-key' required placeholder='Password'/>
            <span className="show">SHOW</span>
          </div>
          <div className="pass">
            <a href="#">Forgot Password? Get Lost.</a>
          </div>
          <div className="field">
            <input type="submit" value="LOGIN"/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Sign