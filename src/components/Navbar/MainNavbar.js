import React from 'react';
// Bootstrap
import { Container, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
// Material UI
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
// CSS
import './MainNavbar.css';

const MainNavbar = () => {
    return (
        <Container id="main_navbar" className="mt-2">
            <Navbar collapseOnSelect expand="lg">
                <Navbar.Brand className="ml-3">SHaing</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-between ml-auto mr-auto">
                        <Nav.Link href="/" className="mr-4">Home</Nav.Link>
                        <Nav.Link href="/products" className="mr-4">Products</Nav.Link>
                        <Nav.Link className="mr-4">Help</Nav.Link>
                        <Nav.Link href="/contact" className="mr-4">Contact</Nav.Link>
                    </Nav>
                    <Form className="justify-content-center ml-auto mr-auto" inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button size="sm" variant="outline-dark"><SearchOutlinedIcon /></Button>
                    </Form>
                    <Button variant="link" className="navbar-btn ml-2"><FavoriteBorderOutlinedIcon /></Button>
                    <Button variant="link" className="navbar-btn ml-2"><ShoppingCartOutlinedIcon /></Button>
                    <Button variant="link" className="navbar-btn ml-2"><PersonOutlineOutlinedIcon /></Button>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}

export default MainNavbar;