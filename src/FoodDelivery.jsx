import { useState } from "react";
import { assets } from "./assets/assets";
import './FoodDelivery.css'
import { Link } from "react-router-dom";
function FoodDelivery({setShowLogin}){
    const [menu,setMenu]=useState("Home");
    return(<>
        <div className="header">
            <div className="navbar">
         <Link to='/'>   <button id="logobtn">RiDER</button></Link>
                <ul className="listitem">
                 <Link to='/' id="linkkk">   <li onClick={()=>setMenu("Home")} className={menu=="Home"?"active":""}>Home</li></Link>
                 <Link to='/' id="linkkk">    <li onClick={()=>setMenu("Menu")} className={menu=="Menu"?"active":""}>Menu</li></Link>
                 <Link to='/footer' id="linkkk">    <li onClick={()=>setMenu("Mobile App")} className={menu=="Mobile App"?"active":""}>Mobile App</li></Link>
                 <Link to='/footer' id="linkkk">   <li onClick={()=>setMenu("Contact Us")} className={menu=="Contact Us"?"active":""}>Contact Us</li></Link>
                </ul>
                </div>
                <div id="navbar-right">
                    <img src={assets.search_icon} alt="" />
                <div id="icon-img">
                  <Link to='/cart'>  <img src={assets.basket_icon} alt=""/></Link>
                    <div className="dot"></div>
                </div>
                    <button id="signbtn" onClick={()=>setShowLogin(true)}>Sign in</button>                         
        </div>
        </div>
        
        
        </>
    )
}
export default FoodDelivery