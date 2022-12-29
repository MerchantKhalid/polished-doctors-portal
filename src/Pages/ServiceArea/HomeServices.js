import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import HomeService from './HomeService';

const HomeServices = () => {
    const serviceData=[
        {
            id:1,
            title:'Fluoride',
            icon:fluoride,
            desc:' Fluoride is a natural mineral that builds strong teeth and prevents cavities.'
        },
        {
            id:2,
            title:'Cavity',
            icon:cavity,
            desc:'Teeth are covered in a relatively thick layer of enamel, a protective coating.'
        },
        {
            id:3,
            title:'Whitenning',
            icon:whitening,
            desc:'If you have your teeth whitened you will first need to make 2 to 3 visit dental surgery.'
        },
    ]
    return (
       <div className='mt-8 mb-16'>
            <h2 className='text-2xl text-primary text-center'>Our Services</h2>
            <h3 className='text-3xl text-center'>Services We Provide</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
            {
                serviceData.map(service=><HomeService
                    key={service.id}
                    service={service}
                ></HomeService>)
            }
       </div>
       </div>
    );
};

export default HomeServices;