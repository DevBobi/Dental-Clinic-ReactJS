import React from 'react';
import { Carousel } from 'react-bootstrap';
import './TopBanner.css';
import banner1 from '../../../images/banner/banner1.png';
import banner2 from '../../../images/banner/banner2.png';
import banner3 from '../../../images/banner/banner3.png';

const TopBanner = () => {
    return (
        <div id="topbanner">
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className="carousel-text">
                            <h1>Welcome to Denta</h1>
                            <p>A promising dental clinic for your dental care</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <div className="carousel-text">
                            <h1>
                                Excellent Techniques For <br /> Healthy br Dental Condition</h1>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <div className="carousel-text">
                            <h1>
                                What Makes Us Better, <br /> Makes You Better</h1>

                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default TopBanner;