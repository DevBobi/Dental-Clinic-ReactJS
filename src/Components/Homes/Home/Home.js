import React from 'react';
import { Route } from 'react-router';
import AboutUs from '../AboutUs/AboutUs';
import Appoinment from '../Appoinment/Appoinment';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner ></TopBanner>
            <Services></Services>
            <AboutUs></AboutUs>
            <Doctors></Doctors>
            <Appoinment path="/appoinment"></Appoinment>
        </div>
    );
};

export default Home;