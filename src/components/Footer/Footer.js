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
        <Container fluid className="mt-5" id="footer">
            <Row id="main_footer">
                <Col className="mt-auto mb-auto"><h4>SHaing</h4></Col>
                <Col className="mt-auto mb-auto">
                    <Row className="ml-auto mr-auto">
                        <Col>© 2019 By Haing</Col>
                    </Row>
                    <Row className="ml-auto mr-auto">
                        <Col><a href="https://dribbble.com/imshuvo97">Design from Afsar Hossen</a></Col>
                    </Row>
                </Col>
                <Col>
                    <Row className="ml-auto mr-auto">
                        <Col lg={3}><Image src={VisaIcon} /></Col>
                        <Col lg={3}><Image src={MastercardIcon} /></Col>
                        <Col lg={3}><Image src={PaypalIcon} /></Col>
                        <Col lg={3}><Image src={AmericanExpressIcon} /></Col>
                    </Row>
                </Col>
            </Row>
            <Container className="mt-4">
                <Row id="social_network_footer">
                    <Col><InstagramIcon /></Col>
                    <Col><FacebookIcon /></Col>
                    <Col><TwitterIcon /></Col>
                    <Col><LinkedInIcon /></Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Footer;