import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Appoinment from '../Appoinment/Appoinment';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';
import TopBanner from '../TopBanner/TopBanner';
import { Route } from 'react-router-dom';

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