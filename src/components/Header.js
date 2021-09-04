import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header style={{height:'10vh'}}>
            <Navbar bg="danger" variant='dark' expand="lg" collapseOnSelect>
                <Container>
                    <Link to="/Pokedex">
                        <Navbar.Brand>Pokemon Deck</Navbar.Brand>
                    </Link>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;