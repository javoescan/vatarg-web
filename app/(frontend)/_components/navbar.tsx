"use client"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
      <Container>
        <Navbar.Brand href="#home">VATSIM Argentina</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Pilotos" id="basic-nav-dropdown">

              <NavDropdown.Item href="#action/3.1">Solicitar Cobertura ATC</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                SimBrief
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Entrenamiento</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Controladores" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Roster</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Reservas
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Entrenamiento</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Operaciones" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Documentos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Cartas de Acuerdo
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Cartas de Navegación</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Metar</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="División" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Feedback</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Staff
              </NavDropdown.Item>
            </NavDropdown>


            <Nav.Link href="#home">Idioma</Nav.Link>
            <Nav.Link href="#link">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}