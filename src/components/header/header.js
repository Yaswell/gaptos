import React from 'react'
import logo from '../../assets/img/icono.png';
import usa from '../../assets/img/estados-unidos.png'
import repDom from '../../assets/img/repDom.png';
import francia from '../../assets/img/francia.png';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGlobe} from '@fortawesome/free-solid-svg-icons'
import {Navbar, Nav,NavDropdown, Container, Button } from 'react-bootstrap';
const hearder = () => {
  return (
   
  <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="/"> <img width={'50px'}  src={logo} alt='logo' /> BarrioSOS</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="/">Inicio</Nav.Link>
        <Nav.Link href="/donaciones">Contribuye</Nav.Link>
        <NavDropdown title="Nosotros" id="basic-nav-dropdown">
          <NavDropdown.Item href="/nosotros">¿Quienes sómos?</NavDropdown.Item>
          <NavDropdown.Item href="/galeria">Galería</NavDropdown.Item>
          <NavDropdown.Item href="#">Proyectos finalizados</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/transparencia">Transparencia</NavDropdown.Item>
        </NavDropdown>
        <Button href="/donaciones">Donar</Button> 
        
        <NavDropdown title={<FontAwesomeIcon icon={faGlobe} />} id="basic-nav-dropdown">
          <NavDropdown.Item href='#'><img width={'20px'} src={repDom} alt='rep. dom.' /> Español </NavDropdown.Item>
          <NavDropdown.Item href='#'><img width={'20px'} src={francia} alt='francois' /> Francois </NavDropdown.Item>
          <NavDropdown.Item href="#"><img width={'20px'} src={usa} alt='USA' /> English</NavDropdown.Item>
        </NavDropdown>
        
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    
     

   
  )
}


export default hearder