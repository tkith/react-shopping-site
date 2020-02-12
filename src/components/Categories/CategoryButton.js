import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// CSS
import './Categories.css';

const CategoryButton = ({icon, title}) => {
    return (
        <Col>
            <Container>
                <Row className="category-btn">
                    <Col sm={6} md={6} lg={1} xl={3} className="mt-auto mb-auto">
                        {icon}
                    </Col>
                    <Col sm={6} md={6} lg={11} xl={9} className="mt-auto mb-auto">
                        {title}
                    </Col>
                </Row>
            </Container>
        </Col>
    );
}

export default CategoryButton;