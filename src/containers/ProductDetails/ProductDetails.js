import React from 'react';
// Bootstrap
import { Container } from 'react-bootstrap';
// Custom components
import ProductInformations from '../../components/ProductInformations/ProductInformations';
import ProductDetailedInfo from '../../components/ProductInformations/ProductDetailedInfo';

const ProductDetails = () => {
    return (
        <Container className="mt-5">
            <ProductInformations />
            <ProductDetailedInfo />
        </Container>
    );
}

export default ProductDetails;