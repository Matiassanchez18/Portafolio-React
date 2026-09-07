import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../css/Header.css";
import foto from "../assets/LogoMSportafolio.png";
import Button from "react-bootstrap/Button";

function Header() {
  return (
    <>
      <Navbar className="NavHeader p-3">
        <div className="d-flex align-items-center w-100 position-relative">
          <div>
            <img src={foto} alt="" />
            <Navbar.Brand href="#home" className="nombre">
              Matias Sanchez
            </Navbar.Brand>
          </div>

          <div className="position-absolute start-50 translate-middle-x">
            <Nav>
              <Nav.Link href="#" className="active">Inicio</Nav.Link>
              <Nav.Link href="#features">Sobre mi</Nav.Link>
              <Nav.Link href="#pricing">Contactos</Nav.Link>
            </Nav>
          </div>

          <div className="ms-auto">
            <Button className="BotonHeader" variant="outline-primary">Trabajemos juntos</Button>
          </div>
        </div>
      </Navbar>
    </>
  );
}

export default Header;
