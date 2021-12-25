import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import './Header.css'
const Header = () => {
    const { user } = useAuth();
    const { logOut, displayName } = useFirebase();
    return (
        <>
            <Navbar expand="lg" className="navbar" sticky="top">
                <Container>
                    <Link to="/home" className="links">
                        <Navbar.Brand>Kids Care</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="/home" className="links">
                                <Nav className="m-4">Home</Nav>
                            </Link>
                            <Link to="/services" className="links">
                                <Nav className="m-4">Services</Nav>
                            </Link>
                            <Link to="/ourdoctors" className="links">
                                <Nav className="m-4">Our doctors</Nav>
                            </Link>
                            <Link to="/aboutus" className="links">
                                <Nav className="m-4">About us</Nav>
                            </Link>
                            {user?.email ? <button className="logout-btn" onClick={logOut}><i className="fas fa-sign-in-alt"></i>Logout</button> : <Link to="login" className="links"><Nav className="m-4"><i className="fas fa-sign-in-alt"></i>Login</Nav></Link>}
                        </Nav>
                    </Navbar.Collapse>
                    <Nav className="user"><i className="fas fa-user"></i>{user.displayName || displayName}</Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;