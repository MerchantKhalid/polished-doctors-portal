import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointment from './AvailableAppointment';
import BookingModal from './BookingModal';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    return (
        <header>
            <AppointmentBanner selectedDate={selectedDate}
             setSelectedDate={setSelectedDate}
            ></AppointmentBanner>
            <AvailableAppointment selectedDate={selectedDate}></AvailableAppointment>
            
        </header>
    );
};

export default Appointment;