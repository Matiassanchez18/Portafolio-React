import { Link } from "react-router-dom";
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
        <nav className="sidebar-nav flex-column">
          <Link className="nav-link" to="/">
            <i className="bi bi-house-door"></i>
            Inicio
          </Link>

          <Link className="nav-link" to="/about">
            <i className="bi bi-person"></i>
            Sobre mí
          </Link>

          <Link className="nav-link" to="/skills">
            <i className="bi-code-slash"></i>
           Habilidades
          </Link>

          <Link className="nav-link" to="/projects">
            <i className="bi-laptop"></i>
           Proyectos
          </Link>

          <Link className="nav-link" to="/contact">
            <i className="bi bi-envelope"></i>
            Contacto
          </Link>

          <Link className="nav-link BotonHeader" to="/#Contacto">
            Trabajemos juntos
          </Link>
        </nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
