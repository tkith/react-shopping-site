import React from 'react';
// Bootstrap
import { Container, Carousel, Image } from 'react-bootstrap';
// Assets
import Image1 from '../../assets/img/home1.jpg';
import Image2 from '../../assets/img/home2.jpg';
import Image3 from '../../assets/img/home3.jpg';

const Home = () => {
    return (
        <Container className="mt-5">
            <Carousel>
                <Carousel.Item>
                    <Image className="d-block w-100" rounded src={Image1} alt="Electronics" />
                </Carousel.Item>
                
                <Carousel.Item>
                    <Image className="d-block w-100" rounded src={Image2} alt="Health & Beauty" />
                </Carousel.Item>

                <Carousel.Item>
                    <Image className="d-block w-100" rounded src={Image3} alt="Clothing" />
                </Carousel.Item>
            </Carousel>
        </Container>
    );
}

export default Home;