"use client"

import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function ComponentsNavbar() {
  return (
    <Navbar expand="lg" className="bg-blue" fixed="top">
      <Container>
        <Navbar.Brand href="/" className="me-5">
          <Image src="/images/brand/logo.svg" alt="logo" width={100} height={46} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Pilotos" id="basic-nav-dropdown" className="me-2">
              <NavDropdown.Item href="/pilots/request-atc">Solicitar Cobertura ATC</NavDropdown.Item>
              <NavDropdown.Item href="https://vatsur.org/adminCenter/main.php" target="_blank">Entrenamiento</NavDropdown.Item>
              <NavDropdown.Item href="https://www.simbrief.com/home/" target="_blank">SimBrief</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Controladores" id="basic-nav-dropdown" className="me-2">
              <NavDropdown.Item href="/controllers/roster">Roster</NavDropdown.Item>
              <NavDropdown.Item href="/controllers/euroscope">Euroscope</NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.2">Reservas</NavDropdown.Item> */}
              <NavDropdown.Item href="https://argentina.vatsur.org/web/consola/">Entrenamiento</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Operaciones" id="basic-nav-dropdown" className="me-2">
              <NavDropdown.Item href="/operations/documents">Documentos</NavDropdown.Item>
              <NavDropdown.Item href="https://ais.anac.gob.ar/aip" target="_blank">Cartas de Navegación</NavDropdown.Item>
              <NavDropdown.Item href="https://www.smn.gob.ar/metar" target="_blank">METAR</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="División" id="basic-nav-dropdown" className="me-2">
              <NavDropdown.Item href="/division/first-steps">¡Unite!</NavDropdown.Item>
              <NavDropdown.Item href="/division/feedback">Feedback</NavDropdown.Item>
              <NavDropdown.Item href="/division/staff">Staff</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav className="justify-content-end flex-row">
            <NavDropdown.Item href="https://discord.vatsur.org/" target="_blank">
              <Image src="/images/icons/discord.svg" alt="logo" width={30} height={30} className="m-2" />
            </NavDropdown.Item>
          <NavDropdown.Item href="https://instagram.com/vatsim.ar" target="_blank">
            <Image src="/images/icons/instagram.svg" alt="logo" width={30} height={30} className="m-2" />
          </NavDropdown.Item>
          <NavDropdown.Item href="https://chat.whatsapp.com/CsqWsf97rrt7LCQmiGWMSL" target="_blank">
            <Image src="/images/icons/whatsapp.svg" alt="logo" width={30} height={30} className="m-2" />
          </NavDropdown.Item>
            {/* @TBD */}
            {/* <Nav.Link href="#home">Idioma</Nav.Link> */}
            {/* <Nav.Link href="#link">Login</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}