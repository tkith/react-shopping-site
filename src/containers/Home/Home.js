import React from 'react';
// Bootstrap
import { Container } from 'react-bootstrap';
// Components
import HomePage from '../../components/Home/Home';

const Home = () => {
    return (
        <Container className="mt-5">
            <HomePage />
        </Container>
    );
}

export default Home;