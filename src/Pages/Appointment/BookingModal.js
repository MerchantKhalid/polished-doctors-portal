
import { format } from 'date-fns';
import React from 'react';


const BookingModal = ({ treatment,setTreatment,selectedDate }) => {
    const { name,slots } =treatment;
    const date= format(selectedDate,'PP')

    const handleBooking = event =>{
        event.preventDefault()
        const form= event.target
        const email= form.email.value
        const name= form.name.value
        const slot= form.slot.value
        const phone= form.phone.value

        const booking={
            appointmentDate:date,
            email,
            patientName:name,
            slot,
            phone
        }
        console.log(booking)
        setTreatment(null)

    }
    
   
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Booking for: {name } </h3>
                    <form onSubmit={handleBooking} className='mt-10 grid grid-cols-1 gap-3'>
                        <input name="date" type="text" disabled value={date} className="input input-bordered w-full" />
                        <select name="slot" className='select select-bordered w-full'>
                            {
                                slots.map((s,i)=><option
                                key={i}
                                 value={s}
                                 >{s}</option>)
                            }
                        </select>
                        <input name="email" type="email" placeholder="Your Email" className="input input-bordered w-full" required />
                        <input name="name" type="text" placeholder="Your Name" className="input input-bordered w-full" required />
                        <input name="phone" type="number" placeholder="Phone Number" className="input input-bordered w-full" required />
                      
                        <input className='input input-bordered w-full cursor-pointer bg-accent text-white' type='submit' value='Submit'></input>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;