import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOptionsCard from './AppointmentOptionsCard';
import BookingModal from './BookingModal';

const AvailableAppointment = ({selectedDate}) => {
    const [options,setOptions]= useState([])
    const [treatment,setTreatment]= useState(null)

    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setOptions(data))
    },[])
    
    return (
        <div className='my-6'>
             <p className='text-center text-primary font-bold'> You have selected  {format(selectedDate, 'PP')}</p>

             <div className='my-16'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    options.map(service=><AppointmentOptionsCard
                        key={service._id}
                        service={service}
                        setTreatment ={setTreatment}
                    >

                    </AppointmentOptionsCard>)
                }
                </div>
                {
                 treatment &&
                   <BookingModal treatment={treatment}
                    setTreatment={setTreatment}
                    selectedDate={selectedDate}
                    ></BookingModal>
                   
                }
                
             </div>
             
        </div>
    );
};

export default AvailableAppointment;