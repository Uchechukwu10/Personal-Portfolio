import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import html from '../assets/img/html.png';
import css from '../assets/img/css.png';
import react from '../assets/img/react.png';
import javascript from '../assets/img/javascript.png';
import python from '../assets/img/python.png';
import flask from '../assets/img/flask.png';
import nodejs from '../assets/img/nodejs.png';
import mongodb from '../assets/img/mongodb.png';
import postgresql from '../assets/img/postgresql.png';
import colorSharp from '../assets/img/color-sharp.png';

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 6
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };

  return (
    <div>
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className='skill-bx'>
                            <h2>
                                Skills
                            </h2>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                <div className='item'>
                                    <img src={html} alt='html' />
                                    <h5>HTML</h5>
                                </div>
                                <div className='item'>
                                    <img src={css} alt='css' />
                                    <h5>CSS</h5>
                                </div>
                                <div className='item'>
                                    <img src={react} alt='react' />
                                    <h5>ReactJS</h5>
                                </div>
                                <div className='item'>
                                    <img src={javascript} alt='javascript' />
                                    <h5>Javascript</h5>
                                </div>
                                <div className='item'>
                                    <img src={python} alt='python' />
                                    <h5>Python</h5>
                                </div>
                                <div className='item'>
                                    <img src={nodejs} alt='nodejs' />
                                    <h5>NodeJS</h5>
                                </div>
                                <div className='item'>
                                    <img src={flask} alt='flask' />
                                    <h5>Flask</h5>
                                </div>
                                <div className='item'>
                                    <img src={mongodb} alt='mongodb' />
                                    <h5>MongoDB</h5>
                                </div>
                                <div className='item'>
                                    <img src={postgresql} alt='postgresql' />
                                    <h5>PostgreSQL</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-left' src={colorSharp} alt='purple-gradient'/>
        </section>
    </div>
  )
}

export default Skills