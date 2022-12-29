import React from 'react';

import Tilt from 'react-vanilla-tilt'


const InfoCard = ({card}) => {
    const {title,description,icon,bgClass}=card;
    return (
        <Tilt className={`card card-side shadow-xl cursor-pointer ${bgClass} p-3 text-white`} options={{ scale:2, max: 35,perspective:1000, }} style={{ height: 200, width: 300 }}>
            
            <figure><img src={icon} alt="icon" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
    
         </div>
   
        </Tilt>
    );
};

export default InfoCard;