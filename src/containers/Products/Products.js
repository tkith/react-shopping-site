import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../../components/Banner/Banner';
import Categories from '../../components/Categories/Categories';
import Products from '../../components/Products/Products';

const Home = () => {
    return (
        <Container className="mt-5">
            <Banner />
            <Categories />
            <Products />
        </Container>
    );
}

export default Home;