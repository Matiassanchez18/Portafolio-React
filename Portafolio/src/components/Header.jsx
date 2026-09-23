import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "../css/Header.css";

function Header() {
  return (
    <Navbar expand="lg" className="NavHeader p-3">
      <Navbar.Brand href="#home" className="nombre">
        <div>
          Matias Sanchez
          <p className="profesion" id="inicio">Programador</p>
        </div>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="navbar-nav" />

      <Navbar.Collapse id="navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="#home" className="active">
            Inicio
          </Nav.Link>

          <Nav.Link href="#SobreMi" className="mx-lg-4">
            Sobre mí
          </Nav.Link>

          <Nav.Link href="#Contacto">
            Contacto
          </Nav.Link>
        </Nav>

        <a className="BotonHeader btn btn-outline-primary" href="#Contacto">
          Trabajemos juntos
        </a>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;