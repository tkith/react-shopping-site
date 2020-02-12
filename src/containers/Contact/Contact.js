import React from 'react';
// Bootstrap
import { Container } from 'react-bootstrap';
// Components
import ContactComp from '../../components/Contact/Contact';

const Contact = () => {
    return (
        <Container className="mt-5">
            <ContactComp />
        </Container>
    )
}

export default Contact;