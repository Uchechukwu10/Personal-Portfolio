import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

const Footer = () => {
  return (
    <div>
        <footer className='footer'>
            <Container>
                <Row className='align-item-center'>
                    <Col sm={6}>
                        <img src={logo} alt='logo' />
                    </Col>
                    <Col sm={6} className='text-center text-sm-end'>
                        <div className='social-icon'>
                            <a href='https://www.linkedin.com/in/uchechukwu10'><img src={navIcon1} /></a>
                            <a href='https://www.facebook.com/profile.php?id=100076420238767'><img src={navIcon2} /></a>
                            <a href='https://www.instagram.com/maazi_uchay/'><img src={navIcon3} /></a>
                        </div>
                        <p>CopyRight 2022. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    </div>
  )
}

export default Footer