import { Link,NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import "../css/Header.css";

function Header() {
  return (
    <Navbar expand="md" className="sidebar flex-column align-items-start">
      <Link to="/" className="nombre navbar-brand">
        <div>
          Matias Sanchez
          <p className="profesion">Programador</p>
        </div>
      </Link>

      <Navbar.Toggle
        aria-controls="menu-header"
        className="boton-hamburguesa"
      />

      <Navbar.Collapse id="menu-header">
        <nav className="sidebar-nav flex-column">
          <NavLink className="nav-link" to="/">
            <i className="bi bi-house-door"></i>
            Inicio
          </NavLink>

          <NavLink className="nav-link" to="/about">
            <i className="bi bi-person"></i>
            Sobre mí
          </NavLink>

          <NavLink className="nav-link" to="/skills">
            <i className="bi bi-code-slash"></i>
            Habilidades
          </NavLink>

          <NavLink className="nav-link" to="/projects">
            <i className="bi bi-laptop"></i>
            Proyectos
          </NavLink>

          <NavLink className="nav-link" to="/contact">
            <i className="bi bi-envelope"></i>
            Contacto
          </NavLink>

          <Link className="nav-link BotonHeader" to="/contact">
            Trabajemos juntos
          </Link>
        </nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
