import React from 'react';

const AppointmentOptionsCard = ({service,setTreatment}) => {
    const{name,slots}= service;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
                <h2 className="card-title text-secondary">{name}</h2>
                <p>{slots.length? slots[0] : <small className='text-red-500'>No appointments available</small>}</p>
                <p>{slots.length} {slots.length>1 ? 'spaces' :'space'} available</p>
                
                <div className="card-actions">
                   {
                    slots.length===0 ? <label htmlFor="booking-modal" disabled className="btn btn-primary text-white">Book Now</label>
                    :
                    <label htmlFor="booking-modal" onClick={()=>setTreatment(service)} className="btn btn-primary text-white">Book Now</label>
                    
                   }
                </div>
            </div>
        </div>
    );
};

export default AppointmentOptionsCard;