import React from 'react'
import './partners.css'
import logo1 from './partners/1.jpg'
import logo2 from './partners/2.jpg'
import logo3 from './partners/3.jpg'
import logo4 from './partners/4.jpg'
import logo5 from './partners/5.jpg'
import logo6 from './partners/6.jpg'
import logo7 from './partners/7.jpg'
import logo8 from './partners/8.jpg'
import logo9 from './partners/9.jpg'
const Partners = () => {
  return (
    <div className='partners_container'>
        <div className="partners_info_section">
            <h2 className='mt'>OUR CLIENTS & PARTNERSHIPS</h2>
        </div>
        <div className="logos">
            <div className="logo_items">
                <img src={logo1} />
                <img src={logo2} />
                <img src={logo3} />
                <img src={logo4} />
                <img src={logo5} />
                <img src={logo6} />
                <img src={logo7} />
                <img src={logo8} />
                <img src={logo9} />

            </div>
            <div className="logo_items">
                <img src={logo1} />
                <img src={logo2} />
                <img src={logo3} />
                <img src={logo4} />
                <img src={logo5} />
                <img src={logo6} />
                <img src={logo7} />
                <img src={logo8} />
                <img src={logo9} />
            </div>
            <div className="logo_items">
                <img src={logo1} />
                <img src={logo2} />
                <img src={logo3} />
                <img src={logo4} />
                <img src={logo5} />
                <img src={logo6} />
                <img src={logo7} />
                <img src={logo8} />
                <img src={logo9} />
            </div>
            <div className="logo_items">
                <img src={logo1} />
                <img src={logo2} />
                <img src={logo3} />
                <img src={logo4} />
                <img src={logo5} />
                <img src={logo6} />
                <img src={logo7} />
                <img src={logo8} />
                <img src={logo9} />
            </div>
        </div>
    </div>
  )
}

export default Partners