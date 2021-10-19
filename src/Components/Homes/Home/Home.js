import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Appoinment from '../Appoinment/Appoinment';
import Services from '../Services/Services';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <Services></Services>
            <Appoinment></Appoinment>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;