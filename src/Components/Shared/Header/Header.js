import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css';
import logo from '../../../images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { FiLogOut } from "react-icons/fi";
import { FaSignInAlt } from "react-icons/fa";


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='nav py-4' sticky="top">
                <Container>
                    <NavLink as={Link}
                        to="/"
                    >
                        <img
                            src={logo}
                            width="150"
                            height="40"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </NavLink>
                    <Navbar.Brand as={Link} to="/home">

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="ms-auto">
                            <NavDropdown title="Menu" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.2">
                                    <NavLink as={Link}
                                        className=""
                                        to="/services"
                                        style={{ textDecoration: "none", color: "black" }}
                                        activeStyle={{
                                            fontWeight: "bolder",
                                            color: "goldenRod",
                                        }}
                                    >
                                        Services
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    <NavLink as={Link}
                                        className=""
                                        to="/about"
                                        style={{ textDecoration: "none", color: "black" }}
                                        activeStyle={{
                                            fontWeight: "bolder",
                                            color: "goldenRod",
                                        }}
                                    >
                                        About Us
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    <NavLink as={Link}
                                        className=""
                                        to="/appoinment"
                                        style={{ textDecoration: "none", color: "black" }}
                                        activeStyle={{
                                            fontWeight: "bolder",
                                            color: "goldenRod",
                                        }}
                                    >
                                        Appoinment
                                    </NavLink>
                                </NavDropdown.Item>

                            </NavDropdown>

                            {
                                user.email ?
                                    <Button onClick={logOut} variant="danger" className="  rounded-pill px-3 fw-bolder">Sign Out <FiLogOut /></Button>
                                    :
                                    <Link to="/signin">
                                        <Button variant="info" className="mx-2 rounded-pill px-3 fw-bolder">Sign In <FaSignInAlt /></Button>
                                    </Link>
                            }

                            {
                                user?.email && user?.photoURL ? <img width="40px" className="rounded-circle ms-3 user" src={user?.photoURL} alt="" /> : <span className="displayName">{user.displayName}</span>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;