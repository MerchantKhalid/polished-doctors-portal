import React from 'react';
import chair from '../../assets/images/chair.png'
import bg from '../../assets/images/bg.png' 
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div style={{background:`url(${bg})`}} className="hero bg-base-200 mb-16">
  <div className="hero-content flex-col lg:flex-row-reverse pr-2">
    <img src={chair} className="sm:w-full md:w-full lg:w-1/2 rounded-lg shadow-2xl" alt='' />
    <div className='pl-2' >
    <h1 className="sm:text-1xl lg:text-3xl font-bold">Your New Smile Starts Here</h1>
      <p className="py-6">In dental treatment units, valves and pressure regulators from KENDRION are used to switch air and water with some hydrogen peroxide. Proportional valves, on the other hand, are particularly well suited to precisely control or regulate the flow of air and water in the dentist element. Particular attention is paid to the choice of material</p>
       <PrimaryButton className=''>Get Started</PrimaryButton>
    </div>
  </div>
</div>
    );
};

export default Banner;