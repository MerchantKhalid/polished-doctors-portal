import React from 'react';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const InfoCards = () => {
    const cardData=[
        {
            id:1,
            title:'Opening Hours',
            description:'Open From 8.00am to 5.00pm',
            bgClass:'bg-gradient-to-r from-primary to-secondary',
            icon:clock,
        },
        {
            id:2,
            title:'Our Location',
            description:'22 Rue Des Muguets,93200',
            bgClass:'bg-accent',
            icon:marker,
        },
        {
            id:3,
            title:'Contact Us',
            description:'Phone:+351920102458',
            bgClass:'bg-gradient-to-r from-primary to-secondary',
            icon:phone,
        },
    ]
    return (
        <div className='ml-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:ml-12 mb-16'>
           {
            cardData.map(card=><InfoCard
                key={card.id}
                card={card}
            ></InfoCard>)
           } 
        </div>
    );
};

export default InfoCards;