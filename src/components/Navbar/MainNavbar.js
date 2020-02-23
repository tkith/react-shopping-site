import React from 'react';
// Bootstrap
import { Container, Navbar, Nav, Button, Row, Col } from 'react-bootstrap';
// Material UI
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
// import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
// CSS
import './MainNavbar.css';

const MainNavbar = () => {
    return (
        <Container id="main_navbar">
            <Row>
                <Navbar collapseOnSelect expand="lg">
                    <Col md={0}>
                        <Row className="justify-content-md-center"><Navbar.Toggle aria-controls="basic-navbar-nav" /></Row>
                    </Col>
                    
                    <Col md={8}>
                        <Row className="justify-content-md-center"><h3>SHaing</h3></Row>
                    </Col>

                    <Col md={12}>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Col md={8}>
                                <Row className="justify-content-between">
                                    <Nav>
                                        <Nav.Link href="/" className="">Home</Nav.Link>
                                        <Nav.Link href="/products" className="">Products</Nav.Link>
                                        <Nav.Link className="">Help</Nav.Link>
                                        <Nav.Link href="/contact" className="">Contact</Nav.Link>
                                    </Nav>
                                </Row>
                            </Col>
                            
                            <Col md={8}>
                                <Row className="justify-content-center">
                                    <Button variant="link" className="navbar-btn"><FavoriteBorderOutlinedIcon /></Button>
                                    <Button variant="link" className="navbar-btn"><ShoppingCartOutlinedIcon /></Button>
                                    <Button variant="link" className="navbar-btn"><PersonOutlineOutlinedIcon /></Button>
                                </Row>
                            </Col>
                        </Navbar.Collapse>
                    </Col>
                </Navbar>
            </Row>
        </Container>
    );
}

export default MainNavbar;