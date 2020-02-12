import React from 'react';
// Bootstrap
import { Container } from 'react-bootstrap';
// Custom components
import ProductInformations from '../../components/ProductInformations/ProductInformations';

const ProductDetails = () => {
    return (
        <Container fluid style={{border: "1px solid black"}} className="mt-5">
            <ProductInformations />
        </Container>
    );
}

export default ProductDetails;