import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';

import Offcanvas from 'react-bootstrap/Offcanvas';
import './Navbar.css'
import logo from '../../images/starwarslogo.png'

export default function NavBar() {

  const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50){
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    })
  return (
   
    <nav className='nav1' id="nav">
     {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className={scrolled ? "scrolled": ""}>
          <Container fluid className='text-light'>
            
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-start flex-grow-1 pe-3 px-3 text-light">
                  <Nav.Link className='text-light' style={{marginRight:"20px"}} href="#home">Home</Nav.Link>
                  <Nav.Link className='text-light' style={{marginRight:"20px"}} href="#characters1">Characters</Nav.Link>
                  <Nav.Link className='text-light' style={{marginRight:"20px"}} href="#home">Planets</Nav.Link>
                  <Nav.Link className='text-light' style={{marginRight:"20px"}} href="#home">Species</Nav.Link>
                  
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <Navbar.Brand href="#home"><img src={logo} alt="" className='mainlogo'/></Navbar.Brand>
          </Container>
        </Navbar>
      ))}
    
    </nav>
  
  )
}
