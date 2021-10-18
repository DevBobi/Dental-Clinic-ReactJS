import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import logo from '../../../images/logo.png';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='nav py-4' sticky="top">
                <Container>
                    <Navbar.Brand as={Link} to="/home">
                        <img
                            src={logo}
                            width="120"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                        </Nav>
                        <Nav>

                            {
                                user.email ?
                                    <Button onClick={logOut} variant="danger" className="  rounded-pill px-4 fw-bolder">Sign Out</Button>
                                    :
                                    <Link to="/signin">
                                        <Button variant="info" className="mx-2 rounded-pill px-4 fw-bolder">Sign In</Button>
                                    </Link>
                            }
                            :
                            {
                                user?.email && user?.photoURL ? <img width="40px" className="rounded-circle ms-3 user" src={user.photoURL} alt="" /> : <span className="displayName">{user.displayName}</span>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;