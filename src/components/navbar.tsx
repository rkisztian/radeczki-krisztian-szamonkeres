import React from "react";
import { Container, Nav } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';


export default class Navigacio extends React.Component {
 render(): React.ReactNode {
     return <div >
        <Navbar className="fejlec">
      <Container>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Főoldal </Nav.Link>
            <Nav.Link href="/tapasztalat">Tapasztalat </Nav.Link>
            <Nav.Link href="/idopont">Időpont </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     </div>
 }
}