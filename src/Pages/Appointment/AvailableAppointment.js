import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import AppointmentOptionsCard from './AppointmentOptionsCard';
import BookingModal from './BookingModal';

const AvailableAppointment = ({ selectedDate }) => {
    // const [appointmentoptions, setAppointmentoptions] = useState([])
    const [treatment, setTreatment] = useState(null)
    const date= format(selectedDate,'PP')

    const {data:appointmentoptions=[],refetch,isLoading } = useQuery({
        queryKey: ['appointmentoptions',date],
        queryFn:async () => {
            const res= await fetch(`http://localhost:5000/appointmentoptions?date=${date}`);
            const data = await res.json();
            return data;
        } 

    });
    if(isLoading){
        return <Loading></Loading>
    }

    // useEffect(() => {
    //     fetch('http://localhost:5000/appointmentoptions')
    //         .then(res => res.json())
    //         .then(data => setAppointmentoptions(data))
    // }, [])

    return (
        <div className='my-6'>
            <p className='text-center text-primary font-bold'> You have selected  {format(selectedDate, 'PP')}</p>

            <div className='my-16'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        appointmentoptions.map(service => <AppointmentOptionsCard
                            key={service._id}
                            service={service}
                            setTreatment={setTreatment}
                        >

                        </AppointmentOptionsCard>)
                    }
                </div>
                {
                    treatment &&
                    <BookingModal treatment={treatment}
                        setTreatment={setTreatment}
                        selectedDate={selectedDate}
                        refetch={refetch}
                    ></BookingModal>

                }

            </div>

        </div>
    );
};

export default AvailableAppointment;