import React from 'react';
// Bootstrap
import { Container, Row, Col, Image } from 'react-bootstrap';
// Material UI
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
// CSS
import './Footer.css';
// Assets
import VisaIcon from '../../assets/icon/Payment/Light/1.png';
import MastercardIcon from '../../assets/icon/Payment/Light/2.png';
import PaypalIcon from '../../assets/icon/Payment/Light/5.png';
import AmericanExpressIcon from '../../assets/icon/Payment/Light/22.png';

const Footer = () => {
    return (
        <Container fluid className="mt-5">
            <Row id="main_footer">
                {/* Logo/Site name */}
                <Col md={4}>
                    <Row className="justify-content-center"><h2>SHaing</h2></Row>
                </Col>

                {/* Informations */}
                <Col md={4}>
                    <Row className="justify-content-md-center">© 2019 By Haing</Row>
                    <Row className="justify-content-md-center"><a href="https://dribbble.com/imshuvo97">Design from Afsar Hossen</a></Row>
                </Col>

                {/* Payment methods */}
                <Col md={4}>
                    <Row>
                        <Col xs={5} md={3}>
                            <Row className="justify-content-center">
                                <Image className="payment-img" src={VisaIcon} />
                            </Row>
                        </Col>
                        <Col xs={5} md={3}>
                            <Row className="justify-content-center">
                                <Image className="payment-img" src={MastercardIcon} />
                            </Row>
                        </Col>
                        <Col xs={5} md={3}>
                            <Row className="justify-content-center">
                                <Image className="payment-img" src={PaypalIcon} />
                            </Row>
                        </Col>
                        <Col xs={5} md={3}>
                            <Row className="justify-content-center">
                                <Image className="payment-img" src={AmericanExpressIcon} />
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
            
            {/* Social network */}
            <Row className="m-4 justify-content-center">
                <Col xs={1}>
                    <Row className="justify-content-center">
                        <InstagramIcon />
                    </Row>
                </Col>

                <Col xs={1}>
                    <Row className="justify-content-center">
                        <FacebookIcon />
                    </Row>
                </Col>
                <Col xs={1}>
                    <Row className="justify-content-center">
                        <TwitterIcon />
                    </Row>
                </Col>
                <Col xs={1}>
                    <Row className="justify-content-center">
                        <LinkedInIcon />
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;