import React from 'react';
// Bootstrap
import { Row, Col, Nav, Container } from 'react-bootstrap';
// CSS
import './ProductInformations.css';

const ProductDetailedInfos = () => {

    return (
        <Container>
            <Row className="mt-5 justify-content-center">
                <Nav className="w-100" justify variant="tabs" defaultActiveKey="">
                    <Nav.Item>
                        <Nav.Link>Description</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link>Additional Information</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link>Reviews</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Row>
            <Row>
                Test
            </Row>
        </Container>
    );
};

export default ProductDetailedInfos;