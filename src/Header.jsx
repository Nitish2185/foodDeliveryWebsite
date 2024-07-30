import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="mainContainer">
            <div className="container">
            <h1 id="heading">Order your <br />favourite food here</h1>
            <p id="para">Choose from a diverse menu featuring a delectable
                 array of the dishes crafted with the finest <br />
                  ingredients and culinary expertise.Our mission is 
                  to satisfy your cravings and elevate your <br />
                   dinning experience,one delicious meal at a time.</p>
          <Link to='/'>  <button className="view-menu"> View Menu</button></Link>
            </div>
        </div>
  )
}

export default Header
