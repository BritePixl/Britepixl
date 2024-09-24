import React from 'react'
import loading from '../assets/icons/loading.png'
import './comps.css'
const Splash = () => {
  return (
    <div className='splash_container mid' style={{zIndex: '10000'}}>
      <img className='loading_indicator' src={loading} alt='loading' />
    </div>
  )
}

export default Splash
