import React from 'react';
// Bootstrap
import { Row, Col, Image, Button, InputGroup, FormControl } from 'react-bootstrap';
// CSS
import './ProductInformations.css';
// Assets
import Headphone from '../../assets/img/headphone1.jpg';

const ProductInformations = () => {
    return (
        <Row>
            { ProductThumbnails() }
            

            { ProductPicture() }
            

            { ProductShortInfo() }
        </Row>
    );
}

const ProductThumbnails = () => {
    return (
        <Col className="align-self-center" xs={3} md={2}>
            <Row className="justify-content-center">
                <Image className="product-thumbnail" src={Headphone} thumbnail />
                <Image className="product-thumbnail" src={Headphone} thumbnail />
                <Image className="product-thumbnail" src={Headphone} thumbnail />
                <Image className="product-thumbnail" src={Headphone} thumbnail />
            </Row>
        </Col>
    );
}

const ProductPicture = () => {
    return (
        <Col className="align-self-center" xs={8} md={5}>
            <Row className="justify-content-center">
                <Image id="product_picture" src={Headphone} rounded />
            </Row>
        </Col>
    );
}

const ProductShortInfo = () => {
    return (
        <Col className="align-self-center ml-4" xs={12} md={4}>
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

            <Row className="mt-4">
                <h5><b>Color</b></h5>
            </Row>

            <Row className="mt-3">
                <Button>Black</Button>
            </Row>
            
            <Row className="mt-4">
                <Col xs={5} md={5}>
                    <Row>
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
                    </Row>
                </Col>
                
                <Col>
                    <Row>
                        <Button variant="secondary">Add to cart</Button>
                    </Row>
                </Col>
            </Row>
        </Col>
    );
}

export default ProductInformations;