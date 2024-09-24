import React from 'react'
import instagram from '../assets/icons/is.png';
import linkedin from '../assets/icons/in.png';
import whatsapp from '../assets/icons/wa.png';

const SocialMediaIcons = () => {
  return (
    <div className='social_meida_icons_comp'>
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
  )
}

export default SocialMediaIcons