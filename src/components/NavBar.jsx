import { React, useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

const NavBar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
      }  

      window.addEventListener("scroll", onScroll);

      return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }


  return (
    <div>
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
            <Navbar.Brand href="#home">
                <img src={logo} alt='logo' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" >
                <span className='navbar-toggler-icon'></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={ () => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={ () => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={ () => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
                <div className='social-icon'>
                    <a href="https://www.linkedin.com/in/uchechukwu10" ><img src={navIcon1} alt='linkedin' /></a>
                    <a href="https://www.facebook.com/profile.php?id=100076420238767" ><img src={navIcon2} alt='facebook' /></a>
                    <a href="https://www.instagram.com/maazi_uchay/" ><img src={navIcon3} alt='instagram' /></a>
                </div>
                <button className="btn" ><span><a href='#connect'>Let's Connect</a></span></button>
            </span>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
  )
}

export default NavBar