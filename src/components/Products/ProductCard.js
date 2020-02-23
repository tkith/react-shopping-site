import React from 'react';
// Bootstrap
import { Container, Row, Image } from 'react-bootstrap';
// CSS
import './Products.css';

const ProductCard = ({img, name, price}) => {
    return (
        <Container>
            <Row>
                <Image width="100%" src={img} rounded />
            </Row>

            <Row className="mt-3 product-name">
                {name}
            </Row>
            
            <Row className="product-price">
                {price}€
            </Row>
        </Container>
    );
}

export default ProductCard;