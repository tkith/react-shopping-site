import React from 'react';
// Bootstrap
import { Container, Row, Col, Pagination } from 'react-bootstrap';
// Custom components
import ProductCard from './ProductCard';
// Assets
import Photo from '../../assets/img/headphone1.jpg';

const Products = () => {
    return (
        <Container className="mt-4 ml-3">
            <Row className="mt-3">
                <Col>
                    <ProductCard img={Photo} name="Black headphone" price="499"/>
                </Col>
                <Col>
                    <ProductCard img={Photo} name="Black headphone" price="499"/>
                </Col>
                <Col>
                    <ProductCard img={Photo} name="Black headphone" price="499"/>
                </Col>
                <Col>
                    <ProductCard img={Photo} name="Black headphone" price="499"/>
                </Col>
            </Row>

            <Row className="mt-3">
                <Col>
                    <ProductCard img={Photo} name="Black headphone" price="499"/>
                </Col>
                <Col>
                    <ProductCard img={Photo} name="Black headphone" price="499"/>
                </Col>
                <Col>
                    <ProductCard img={Photo} name="Black headphone" price="499"/>
                </Col>
                <Col>
                    <ProductCard img={Photo} name="Black headphone" price="499"/>
                </Col>
            </Row>

            <Row className="mt-3">
                <Col>
                    <ProductCard img={Photo} name="Black headphone" price="499"/>
                </Col>
                <Col>
                    <ProductCard img={Photo} name="Black headphone" price="499"/>
                </Col>
                <Col>
                    <ProductCard img={Photo} name="Black headphone" price="499"/>
                </Col>
                <Col>
                    <ProductCard img={Photo} name="Black headphone" price="499"/>
                </Col>
            </Row>

            <Row className="mt-4">
                <Pagination className="ml-auto mr-auto">
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item active>{1}</Pagination.Item>
                    <Pagination.Item>{2}</Pagination.Item>
                    <Pagination.Item>{3}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>
            </Row>
        </Container>
    );
}

export default Products;