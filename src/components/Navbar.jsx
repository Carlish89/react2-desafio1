import React from 'react'
import { Navbar, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <>
            <Navbar bg="danger" variant="dark">
                <Container className="justify-content-between">
                    <div>
                    <Link to="/" className="text-white ms-3 text-decoration-none">
                    <i class="fa-solid fa-house mx-2"></i>Home
                    </Link>
                    <Link to="/contacto" className="text-white ms-3 text-decoration-none">
                    <i class="fa-solid fa-book mx-2"></i>Contacto
                    </Link>
                    </div>                    
                    <Navbar.Brand><i class="fa-solid fa-cake-candles mx-2"></i>Happy Cake</Navbar.Brand>
                </Container>
            </Navbar>

        </>
    );
}