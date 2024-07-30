import React from 'react';
import './Footer.css'
import { assets } from './assets/assets';

const Footer = () => {
  return (<>
    <div className='footer-app-container'>
        <div className="app-download">
            <h1 id="text2">For Better Experience Download <br />RiDER App</h1>
            <div className="footer-image-container">\
                <img src={assets.app_store} id="download-image" />
                <img src={assets.play_store} alt="" id="download-image" />
            </div>
        </div>     
    </div>
    <div className="about-container">
      <div className="about-details">
        <h1 id="companyName">RiDER</h1><br />
        <p id="details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quae <br />
         illo fugiat voluptas quisquam tempore pariatur dolore dicta dolores, harum <br />
          doloribus assumenda, beatae eaque sequi, ea saepe quibusdam non ipsa facilis. <br />
           Quidem, expedita itaque tempora minima officia tenetur debitis. Repellendus?</p>
      </div>
      <div className="about-company">
        <h1 id='company'>COMPANY</h1>
        <ul className="list-items">
          <li id='lists'>Home</li>
          <li id='lists'>About us</li>
          <li id='lists'>Deliver</li>
          <li id='lists'>Privacy Policy</li>
        </ul>
      </div>
      <div className="about-contact">
        <p className="touch">GET IN TOUCH</p>
        <h2 className="contacts">Phone :</h2>
        <p id="number">+91-8423599961 <br />+91-9118846517</p>
        <h2 className="contacts">E-mail :</h2>
        <p id="number">nns.nitish2185@gmail.com</p>
      </div>
    </div>
    </>
  )
}

export default Footer
