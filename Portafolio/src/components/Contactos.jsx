import "../css/Contactos.css";

function Contactos() {
  return (
    <div>

<section id="contacto" className="SeccionContacto">
  <div className="container">

    <span className="EtiquetaSkills">
      CONTACTO
    </span>

    <h2>¿Trabajamos juntos?</h2>

    <p>
      Estoy buscando nuevas oportunidades para seguir creciendo como
      desarrollador y participar en proyectos interesantes.
    </p>

    <a
    target="blank_"
      href="https://mail.google.com/mail/?view=cm&fs=1&to=matiassanchez13422@gmail.com"
      className="BotonContacto"
    >
      <i className="bi bi-envelope"></i>
      Contactarme
    </a>

    <div className="RedesContacto">
      <a href="https://github.com/Matiassanchez18" className="RedContacto">
        <i className="bi bi-github"></i>
      </a>

      <a href="https://www.linkedin.com/in/matias-sanchez-631b00328/" className="RedContacto">
        <i className="bi bi-linkedin"></i>
      </a>

      <a href="https://wa.me/3816395008" className="RedContacto">
        <i className="bi bi-whatsapp"></i>
      </a>
    </div>

  </div>
</section>


    </div>
  );
}
export default Contactos;
