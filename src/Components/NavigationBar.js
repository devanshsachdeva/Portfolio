import React, { useState } from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'

const NavigationBar = () => {
    return (
        <>
            <Navbar bg="transparent backdrop-filter backdrop-blur sticky-top z-40 w-full" variant="dark" expand="lg" >
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt="Logo | No Internet"
                            src={require ('../assets/Home/logo.png')}
                            width="100"
                            height="70"
                            className="d-inline-block align-center"
                        />{' '}
                        Devansh Sachdeva
                    </Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                    

                </Container>
            </Navbar>
        </>
    );
}

export default NavigationBar;
