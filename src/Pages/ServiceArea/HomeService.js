import React from 'react';

const HomeService = ({service}) => {
    const {title,desc,icon}=service
    return (
        <div className="card bg-base-100 shadow-xl">
        <figure><img className='mt-2' src={icon} alt="treatment" /></figure>
        <div className="card-body">
          <h2 className="font-bold text-2xl text-center text-primary">{title}</h2>
          <p>{desc}</p>
          
        </div>
      </div>
    );
};

export default HomeService;