import React, { useState } from 'react'
import './LoginPopUp.css'
import { assets } from './assets/assets';
const LoginPopUp = ({setShowLogin}) => {
    const [currState,setCurrState]=useState("Login");
  return (
    <div className='login-popup'>
        <form action="" className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currState==="Login"?<></>:<input type="text"     placeholder='Your Name'  required/>}              
                <input type="email"    placeholder='Your E-mail' required />
                <input type="password" placeholder='Enter Password' required/>
            </div>
            <button id='btn'>{currState==="Sign Up"?"Create Account":"Login"}</button>
            <div className="login-popup-condition">
            <input type="checkbox" required/>
            <p>By continuing, I agree to the terms of use and privacy policy</p>
            </div>
            {currState==="Login"?
            <p id='click'>Create a new account?<span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>:
            <p id='click'>Already have an account?<span onClick={()=>setCurrState("Login")}>Login here</span></p>}
        </form>
    </div>
  )
}

export default LoginPopUp
