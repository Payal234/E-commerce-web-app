import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png';
import linkedin_icon from '../Assets/linkedin_logo.jpg'
import github_icon from '../Assets/github_logo.jpg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Product</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
            <a href="" ><img src={instagram_icon} alt="" /></a>
        </div>
        <div className="footer-icons-container">
            <a href=""><img src={linkedin_icon} alt="" /></a>
        </div>
        <div className='footer-icons-container'>
          <a href=""><img src={github_icon} alt="" /></a>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer