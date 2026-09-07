import "../css/MainPortafolio.css";
import Button from "react-bootstrap/Button";

function PortafolioMain() {
  return (
    <>
      <section className="container mb-5 HeroSection">
        <article className="d-flex mt-5">
          <div>
            <ul className="ListaPresentacion">
              <li>
                <p className="TextoDestacado">Hola, soy</p>
              </li>
              <li>
                <h1>Sanchez Matias</h1>
              </li>
              <li className="TextoDestacado2">
                <p>
                  Estudiante de Programación · Full Stack Developer en formación
                </p>
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
                <Button
                  className="BotonHeader me-5  "
                  variant="outline-primary"
                >
                  Mirá mis trabajos <i className="bi bi-arrow-right"></i>
                </Button>
                <Button className="BotonHeader " variant="primary">
                  mas sobre mí <i className="bi bi-arrow-right"></i>
                </Button>
              </li>
              <li className="mt-4 RedesSociales">
                <p className="textSecondary">Encontrame aquí</p>

                <div className="IconosRedes">
                  <a href="#" aria-label="Slack">
                    <i className="bi bi-slack"></i>
                  </a>

                  <a href="#" aria-label="WhatsApp">
                    <i className="bi bi-whatsapp"></i>
                  </a>

                  <a href="#" aria-label="Discord">
                    <i className="bi bi-discord"></i>
                  </a>
                  <a href="#" aria-label="Discord">
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="DivImg">
            <img
              src="https://images.pexels.com/photos/7988089/pexels-photo-7988089.jpeg"
              alt=""
            />
          </div>
        </article>
      </section>

      <section className="container Section">
      </section>
    </>
  );
}

export default PortafolioMain;
