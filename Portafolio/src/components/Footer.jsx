import FotoLogo from "../assets/Logo.png";
import "../css/Footer.css"

function Footer() {
  return (
    <footer className="PiePagina">
      
      <div className="container">
        
        <div className="ContenidoFooter">
          
          
          <div className="LogoFooter d-flex">
            
            <img src={FotoLogo} alt="Logo de Matías Sánchez" />
            <h4 className="ms-2">Matias Sanchez</h4>
          </div>
          
          <div className="RedesFooter">
            
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              
              <i className="bi bi-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=matiassanchez13422@gmail.com" aria-label="Email">
              
              <i className="bi bi-envelope"></i>
            </a>
          </div>
        </div>
        <div className="LineaFooter"></div>
        <div className="CopyrightFooter">
          
          <p>
            
            &copy; 2026 Matías Sánchez. Todos los derechos
            reservados.
          </p>
          <span>
            
            Desarrollado con <i className="bi bi-code-slash"></i> y React
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
