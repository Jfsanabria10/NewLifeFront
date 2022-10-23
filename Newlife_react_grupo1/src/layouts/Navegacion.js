import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { cerrarSersion } from '../connections/usuarioAcciones';

function Navegacion() {

  const conectado= useSelector(estado=>estado.conectado)
  const usuario= useSelector(estado=>estado.usuario)
  const enviarAccion= useDispatch();

  return (
    <Navbar bg="dark" variant='dark' expand="lg">         
      <Container>
        <Navbar.Brand as={NavLink} to={"/"}>NewLife</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {conectado &&
              <Nav.Link as={NavLink} to={"/crearcita"}>Crear cita</Nav.Link>            
            }
          </Nav>
          <Nav className="ms-auto">
            {!conectado ? (
              <React.Fragment>
                <Nav.Link as={NavLink} to={"/signup"}>Registrarse</Nav.Link>            
                <Nav.Link as={NavLink} to={"/signin"}>Iniciar sesion</Nav.Link>     
              </React.Fragment>
            ) : (     
              <NavDropdown title={usuario.sub} id="basic-nav-dropdown">
                <NavDropdown.Item as={NavLink} to={"/miscitas"} className="text-dark">Mis citas</NavDropdown.Item>                
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={()=>enviarAccion(cerrarSersion())}>Cerrar sesion</NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export {Navegacion}