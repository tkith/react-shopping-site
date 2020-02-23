import React from 'react';
// Bootstrap
import { Container, Row, Col, Pagination } from 'react-bootstrap';
// Custom components
import ProductCard from './ProductCard';
// Assets
import Photo from '../../assets/img/headphone1.jpg';

const Products = () => {
    return (
        <Container className="mt-4">
            <Row className="mt-3">
                <Col className="m-1">
                    <Row>
                        <ProductCard img={Photo} name="Black headphone" price="499"/>
                    </Row>
                </Col>

                <Col className="m-1">
                    <Row>
                        <ProductCard img={Photo} name="Black headphone" price="499"/>
                    </Row>
                </Col>

                <Col className="m-1">
                    <Row>
                        <ProductCard img={Photo} name="Black headphone" price="499"/>
                    </Row>
                </Col>

                <Col className="m-1">
                    <Row>
                        <ProductCard img={Photo} name="Black headphone" price="499"/>
                    </Row>
                </Col>
            </Row>

            <Row className="mt-3">
                <Col className="m-1">
                    <Row>
                        <ProductCard img={Photo} name="Black headphone" price="499"/>
                    </Row>
                </Col>

                <Col className="m-1">
                    <Row>
                        <ProductCard img={Photo} name="Black headphone" price="499"/>
                    </Row>
                </Col>

                <Col className="m-1">
                    <Row>
                        <ProductCard img={Photo} name="Black headphone" price="499"/>
                    </Row>
                </Col>

                <Col className="m-1">
                    <Row>
                        <ProductCard img={Photo} name="Black headphone" price="499"/>
                    </Row>
                </Col>
            </Row>

            <Row className="mt-3">
                <Col className="m-1">
                    <Row>
                        <ProductCard img={Photo} name="Black headphone" price="499"/>
                    </Row>
                </Col>

                <Col className="m-1">
                    <Row>
                        <ProductCard img={Photo} name="Black headphone" price="499"/>
                    </Row>
                </Col>

                <Col className="m-1">
                    <Row>
                        <ProductCard img={Photo} name="Black headphone" price="499"/>
                    </Row>
                </Col>

                <Col className="m-1">
                    <Row>
                        <ProductCard img={Photo} name="Black headphone" price="499"/>
                    </Row>
                </Col>
            </Row>

            <Row className="mt-4 justify-content-center">
                <Pagination>
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