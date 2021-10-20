import React from 'react';
import TopBanner from '../TopBanner/TopBanner';
import Services from '../Services/Services';
import AboutUs from '../AboutUs/AboutUs';
import Doctors from '../Doctors/Doctors';
import Appoinment from '../Appoinment/Appoinment';

const Home = () => {
    return (
        <div>
            <TopBanner ></TopBanner>
            <Services ></Services>
            <AboutUs></AboutUs>
            <Doctors></Doctors>
            <Appoinment></Appoinment>
        </div>
    );
};

export default Home;