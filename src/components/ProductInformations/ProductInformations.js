import React from 'react';
// Bootstrap
import { Container, Row, Col, Image, Button, InputGroup, FormControl } from 'react-bootstrap';
// CSS
import './ProductInformations.css';
// Assets
import Headphone from '../../assets/img/headphone1.jpg';

const ProductInformations = () => {
    return (
        <Container fluid style={{margin:"auto", border: "1px solid black"}} className="mt-4">
            <Row>
                { ProductThumbnails() }
                

                { ProductPicture() }
                

                { ProductShortInfo() }
            </Row>
        </Container>
    );
}

const ProductThumbnails = () => {
    return (
        <Col md={1}>
            <Row>
                <Image className="product-thumbnail" src={Headphone} thumbnail />
            </Row>
            <Row>
                <Image className="mt-2 product-thumbnail" src={Headphone} thumbnail />
            </Row>
            <Row>
                <Image className="mt-2 product-thumbnail" src={Headphone} thumbnail />
            </Row>
            <Row>
                <Image className="mt-2 product-thumbnail" src={Headphone} thumbnail />
            </Row>
        </Col>
    );
}

const ProductPicture = () => {
    return (
        <Col md={4}>
            <Image id="product_picture" src={Headphone} rounded />
        </Col>
    );
}

const ProductShortInfo = () => {
    return (
        <Col md={4}>
            <Row>
                5 Customer Reviews
            </Row>
            <Row className="mt-2">
                <h3 id="product_detail_name">Black headphone</h3>
            </Row>
            <Row className="mt-3 mb-3">
                <b>199€</b>
            </Row>
            <Row>
                <span id="product_detail_text">A great headphone with noise reduction, very comfy to wear and high shock resistance.</span>
            </Row>
            <Row className="mt-5">
                <h5><b>Color</b></h5>
            </Row>
            <Row className="mt-3">
                Black
            </Row>
            <Row className="mt-4">
                <Col>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <Button variant="secondary">-</Button>
                        </InputGroup.Prepend>
                        <FormControl
                            id="product_qty"
                            value="1"
                            aria-describedby="product-qty" 
                        />
                        <InputGroup.Append>
                            <Button variant="secondary">+</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Col>
                <Col>
                    <Button variant="secondary">Add to cart</Button>
                </Col>
            </Row>
        </Col>
    );
}

export default ProductInformations;