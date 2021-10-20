import { height } from '@mui/system';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import FooterLogo from "../../../images/logo_footer.png";
import './Footer.css'

const Footer = () => {
    return (
        <div className="bg-dark">
            <div className="container p-4">
                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-4 pt-4">
                    <div className=" mx-auto d-block">
                        <NavLink as={Link} to="/" >
                            <img
                                src={FooterLogo}
                                width="150"
                                height="40"
                                className="d-inline-block "
                                alt=""
                            />
                        </NavLink>
                        <p className="text-opacity-50 text-light p-2"><small>© Denta - 2025</small></p>
                    </div>
                    <div className="text-light mt-3 ">
                        <small className=" text-left">About Us</small><br />
                        <small className="m-0">Read our blog</small><br />
                        <small className="m-0">Ambulance Service</small><br />
                        <small className="m-0">Online Appointment</small><br />
                    </div>
                    <div className="text-light mt-3">
                        <small className="m-0">Get help</small><br />
                        <small className="m-0">Read FAQ's</small><br />
                        <small className="m-0">View all clients</small><br />
                        <small className="m-0">Policy & terms</small><br />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Footer;