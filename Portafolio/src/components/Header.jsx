
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../css/Header.css";

function Header() {
  return (
    <Navbar expand="md" className="sidebar">
      <Navbar.Brand href="#inicio" className="nombre">
        <div>
          Matias Sanchez
          <p className="profesion">Programador</p>
        </div>
      </Navbar.Brand>

      <Navbar.Toggle
        aria-controls="menu-header"
        className="boton-hamburguesa"
      />

      <Navbar.Collapse id="menu-header">
        <Nav className="sidebar-nav flex-column">
          <Nav.Link href="#home">
            <i className="bi bi-house-door"></i>
            Inicio
          </Nav.Link>

          <Nav.Link href="#SobreMi">
            <i className="bi bi-person"></i>
            Sobre mí
          </Nav.Link>

          <Nav.Link href="#Contacto">
            <i className="bi bi-envelope"></i>
            Contacto
          </Nav.Link>

          <Nav.Link href="#Contacto" className="BotonHeader">
            Trabajemos juntos
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
