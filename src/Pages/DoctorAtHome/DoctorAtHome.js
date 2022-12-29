import React from 'react';
import doctor from '../../assets/images/doctor.png'
import bg from '../../assets/images/appointment.png' 
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton';

const DoctorAtHome = () => {
    return (
        <div className="hero rounded-lg" style={{background:`url(${bg})`}}>
  <div className="hero-content flex-col lg:flex-row">
    <img src={doctor} className="hidden md:block lg:max-w-lg mt-[-105px] rounded-lg" alt='doctor'/>
    <div className='rounded-lg sm:p-5'>
      <h1 className="text-2xl text-primary font-bold">Appointment</h1>
      <h1 className="text-3xl text-white font-bold">Make an appointment today</h1>
      <p className="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <PrimaryButton>Appointment</PrimaryButton>
    </div>
  </div>
</div>
    );
};

export default DoctorAtHome;