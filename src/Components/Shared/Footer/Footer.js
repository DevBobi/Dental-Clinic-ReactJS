import React from 'react';
import FooterLogo from "../../../images/logo_footer.png";

const Footer = () => {
    return (
        <div className="bg-dark">
            <div className="container p-4">
                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-4">
                    <div className="col">
                        <img width="150px" src={FooterLogo} alt="" />
                    </div>
                    <div className="col text-light mt-3">
                        <small className="m-0">About Us</small><br />
                        <small className="m-0">Read our blog</small><br />
                        <small className="m-0">Ambulance Service</small><br />
                        <small className="m-0">Online Appointment</small><br />
                    </div>
                    <div className="col text-light mt-3">
                        <small className="m-0">Get help</small><br />
                        <small className="m-0">Read FAQ's</small><br />
                        <small className="m-0">View all clients</small><br />
                        <small className="m-0">Policy & terms</small><br />
                    </div>
                </div>
                <div className="row d-flex align-items-center">
                    <div className="col-lg-8 col-md-6 col-sm-12">
                        <small className="text-light">copyright &copy; reserved onion Food</small>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default Footer;