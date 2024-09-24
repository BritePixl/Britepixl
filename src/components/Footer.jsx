import React from 'react'
import logo from '../assets/icons/logo.png'
import { Link } from 'react-router-dom'
import instagram from '../assets/icons/is.png'
import linkedin from '../assets/icons/in.png'
import whatsapp from '../assets/icons/wa.png'
const Footer = () => {
  return (
    <footer>
      <div className="footer_card">
        <div>
          <img className='footer_logo' src={logo} alt='BritePixl logo' />
        </div>
        <div className='footer_links'>
          <Link className='link' to='/'>HOME</Link>
          <Link className='link' to='/about'>ABOUT</Link>
          <Link className='link' to='/projects'>PROJECTS</Link>
          <Link className='link' to='/contact'>CONTACT</Link>
        </div>
        <hr />
        <div className="footer_footer">
          <div className='to_left'>
            <p>© 2024 BritePixl. All rights reserved.</p>
          </div>
          <div className=''>
            <p><Link  to='/privacy'>Privacy Policy</Link> | BritePixl</p>
          </div>
          <div className='to_right'>
            <a className='social_media_icon' href="https://www.instagram.com/britepixl_uae" target="_blank">
              <img src={instagram} alt="" />
            </a>
            <a className='social_media_icon' href="https://linkedin.com/company/britepixl" target="_blank">
              <img src={linkedin} alt="" />
            </a>
            <a className='social_media_icon' href="https://whatsapp.com/channel/0029VagNvRp59Pwa1uM8la3Z" target="_blank">
              <img src={whatsapp} alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
