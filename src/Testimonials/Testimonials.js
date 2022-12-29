import React from 'react';
import quote from '../assets/icons/quote.svg'
import people1 from '../assets/images/people1.png';
import people2 from '../assets/images/people2.png';
import people3 from '../assets/images/people3.png';
import TestimonialsCard from './TestimonialsCard';
const Testimonials = () => {
    const reviewData=[
        {
            id:1,
            person:'Mohammad',
            quote:"This life is what you make it. No matter what, you're going to mess up sometimes, it's a universal truth. But the good part is you get to decide how you're going to mess it up.",
            location:'Lisbon',
            icon:people1,
        },
        {
            id:2,
            person:'Hasan',
            quote:"This life is what you make it. No matter what, you're going to mess up sometimes, it's a universal truth. But the good part is you get to decide how you're going to mess it up.",
            location:'Paris',
            icon:people2,
        },
        {
            id:3,
            person:'Khalid',
            quote:"This life is what you make it. No matter what, you're going to mess up sometimes, it's a universal truth. But the good part is you get to decide how you're going to mess it up.",
            location:'Sylhet',
            icon:people3,
        }
    ]
    return (
       <section className='my-24'>
        <div>
            <div className='flex justify-between'>
                <div>
                    <h2 className='text-primary text-xl'>Testimonials</h2>
                    <h2 className='text-xl lg:text-4xl'>What our patients says</h2>
                </div>
                <figure>
                    <img className='sm:18  w-48' src={quote} alt='quote'></img>
                </figure>
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    reviewData.map(items=><TestimonialsCard
                        key={items.id}
                        items={items}
                    >

                    </TestimonialsCard>)   
                }
            </div>
        </div>
       </section>
    );
};

export default Testimonials;