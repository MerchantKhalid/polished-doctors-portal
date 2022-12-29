import React from 'react';

const TestimonialsCard = ({items}) => {
    const {person,quote,icon,location}= items;
    return (
        <div className="card shadow-xl p-5">
            <h2>{quote}</h2>
            <div className='flex items-center mt-5'>
                <img className='w-24 rounded-full' src={icon} alt='' ></img>
                 
                 <div className='ml-2'>
                    <p className='font-bold'>{person}</p>
                    <p className='font-bold'>{location}</p>
                 </div>
            </div>
  
  
        </div>
    );
};

export default TestimonialsCard;