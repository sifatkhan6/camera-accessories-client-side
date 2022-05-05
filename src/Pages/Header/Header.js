import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
                <Container className='sticky-top'>
                    <Navbar.Brand as={Link} to="/">Camera Accessories</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                            {
                                user ?
                                    <Nav.Link as={Link} to="/manageinventory">Manage Inventory</Nav.Link>
                                    :
                                    <Nav.Link as={Link} to=""></Nav.Link>
                            }
                        </Nav>
                        <Nav>
                            {
                                user ?
                                    <Nav.Link as={Link} to="/additems">Add Items</Nav.Link>
                                    :
                                    <Nav.Link as={Link} to=""></Nav.Link>
                            }


                            {
                                user ?
                                    <Nav.Link as={Link} to="/myitems">My Items</Nav.Link>
                                    :
                                    <Nav.Link as={Link} to=""></Nav.Link>
                            }

                            {
                                user ?
                                    <Nav.Link onClick={handleSignOut}>Sign Out</Nav.Link>
                                    :
                                    <Nav.Link as={Link} to="/login">
                                        Login
                                    </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;