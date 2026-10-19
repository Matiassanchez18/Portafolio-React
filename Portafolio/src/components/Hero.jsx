import { Link } from "react-router-dom";

function Hero(props) {
  const { nombre, apellido, profesion } = props.Matias;
  return (
    <>
      <section className="container mb-5 HeroSection mt-5 mb-5">
        <article className="d-flex">
          <div>
            <ul className="ListaPresentacion">
              <li>
                <p className="TextoDestacado">Hola, soy</p>
              </li>
              <li>
                <h1>
                  {nombre} {apellido}
                </h1>
              </li>
              <li className="TextoDestacado2">
                <p>{profesion}</p>
              </li>
              <li>
                Me interesa crear aplicaciones web modernas, funcionales y
                atractivas. Actualmente estoy desarrollando mis conocimientos en
                tecnologías como React, JavaScript, HTML, CSS, Bootstrap, C# y
                SQL.
                <br />
                Mi objetivo es seguir creciendo como desarrollador y convertir
                ideas en soluciones digitales.
              </li>
              <li className="mt-4">
                <Link
                  className="BotonHeader me-5 btn btn-outline-primary"
                  to="/projects"
                >
                  Mirá mis trabajos <i className="bi bi-arrow-right"></i>
                </Link>
                <a
                  className="BotonHeader btn btn-primary "
                  href="./assets/cv.matias.pdf"
                  download="cv-matias.pdf"
                  variant="primary"
                >
                  mas sobre mí <i className="bi bi-arrow-right"></i>
                </a>
              </li>
              <li className="mt-4 RedesSociales">
                <p className="textSecondary">Encontrame aquí</p>

                <div className="IconosRedes">
                  <a
                    href="https://join.slack.com/t/hola-lx04128/shared_invite/zt-497mplsr6-agif~DZ6oM6Y~enmv~3fHA"
                    aria-label="Slack"
                  >
                    <i className="bi bi-slack"></i>
                  </a>

                  <a href="https://wa.me/3816395008" aria-label="WhatsApp">
                    <i className="bi bi-whatsapp"></i>
                  </a>

                  <a href="https://discord.gg/yhX7DPY3" aria-label="Discord">
                    <i className="bi bi-discord"></i>
                  </a>
                  <a
                    href="https://github.com/Matiassanchez18"
                    aria-label="github"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="DivImg m-4">
            <img
              src="https://images.pexels.com/photos/7988089/pexels-photo-7988089.jpeg"
              alt=""
            />
          </div>
        </article>
      </section>
    </>
  );
}

export default Hero;
