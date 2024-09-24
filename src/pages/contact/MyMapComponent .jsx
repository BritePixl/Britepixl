import React from 'react';


const MyMapComponent = () => {  
  return (
    <div className='map_container'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d380.18484022501025!2d55.20507073360905!3d24.96787914190374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f73ca68175a3d%3A0x727c940ba796ce04!2sDubai%20Investment%20Park%20-%202%20-%20Dubai%20Investments%20Park%20-%20Dubai!5e0!3m2!1sen!2sae!4v1724400300495!5m2!1sen!2sae"  style={{"border":"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>  
  );  
};  

export default MyMapComponent;