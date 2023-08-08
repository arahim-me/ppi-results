import React from 'react';
import Images from './../Data/Images/under-construction.jpg';
import './../Css/Construction.css';
function Constuction() {
    return ( 
        <div>
            <img className='construction' src={Images}></img>
        </div>
     );
}

export default Constuction;