import React from 'react';
import Testimonials from '../../../Testimonials/Testimonials';
import Banner from '../../Banner/Banner';
import DoctorAtHome from '../../DoctorAtHome/DoctorAtHome';
import InfoCards from '../../InfoCard/InfoCards';
import HomeServices from '../../ServiceArea/HomeServices';


const Home = () => {
    return (
        <div className='mt-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <HomeServices></HomeServices>
            <DoctorAtHome></DoctorAtHome>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;