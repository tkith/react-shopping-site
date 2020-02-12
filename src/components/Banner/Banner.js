import React from 'react';
import { Container, Image } from 'react-bootstrap';
// Assets
import BannerImg from '../../assets/img/banner.png';

const Banner = () => {
    return (
        <Container className="mt-4 mb-5">
            <Image src={BannerImg} fluid></Image>
        </Container>
    );
}

export default Banner;