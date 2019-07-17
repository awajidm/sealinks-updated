import React, { } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Footer.css';


const Footer = () => {
    return (
        <React.Fragment>
            <footer className="site-footer">
                <Container>
                    <Row>
                        <Col sm={12} md={6} lg={3}>
                            <section className="widgetSection">
                                <h2>Contact Info</h2>
                                <p>Phone: +92-3049992228</p>
                                <p>Email: info@sealinks.pk</p>
                                <p>Address: 20,Ijaz Plaza, Canal Bank Rd, Ghazi Pul Muslimabad Tajpura, Lahore, Punjab</p>
                            </section>
                        </Col>
                        <Col sm={12} md={6} lg={3}>
                            <section className="widgetSection">
                                <h2>Destinations</h2>
                                <ul>
                                    <li>Nepal</li>
                                    <li>India</li>
                                    <li>Tibet</li>
                                    <li>Maldives</li>
                                </ul>
                            </section>
                        </Col>
                        <Col sm={12} md={6} lg={3}>
                            <section className="widgetSection">
                                <h2>Activities</h2>
                                <ul>
                                    <li>Road Cycling</li>
                                    <li>Cultural Tours</li>
                                    <li>Peak Climbing</li>
                                    <li>Jungle Safari</li>
                                </ul>
                            </section>
                        </Col>
                        <Col sm={12} md={6} lg={3}>
                            <section className="widgetSection">
                                <h2>Trip Types</h2>
                                <ul className="menu">
                                    <li>Nature Walk</li>
                                    <li>Child-friendly</li>
                                    <li>Dog-friendly</li>
                                    <li>Cultural</li>
                                </ul>
                            </section>
                        </Col>
                    </Row>
                    <div className="FootText">© Copyright 2019 Sea Links Powered by Holacia</div>
                </Container>
            </footer>
        </React.Fragment>

    );
};
export default Footer;