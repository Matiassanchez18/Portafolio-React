import "../css/MainPortafolio.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import foto from "../assets/SDT.png";
import fotoGammer from "../assets/ProyectoGammer.png";
import FotoDeporTuc from "../assets/DeporTuc.png";
import DevJobs from "../assets/DevJobs.png";
import Tour from "../assets/Tour.png";
import Gato from "./Gato.jsx";

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
                c
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
          <div className="DivImg">
            <img
              src="https://images.pexels.com/photos/7988089/pexels-photo-7988089.jpeg"
              alt=""
            />
          </div>
        </article>
      </section>

      <section className="border-top p-5 SobreMi">
        <article className="container">
          <div className="row align-items-center">
            <div className="col-md-5 text-center">
              <Gato />
            </div>

            <div className="col-md-7">
              <span className="sobre-tag">SOBRE MÍ</span>

              <h2>
                Un poco sobre <span>mí</span>
              </h2>

              <p>
                Soy Matías Sánchez, estudiante de Programación en la UTN y
                desarrollador Full Stack en formación. Me interesa crear
                aplicaciones web modernas, funcionales y con una buena
                experiencia para el usuario.
              </p>

              <p>
                Empecé a interesarme por la programación en 2022 durante mi cursado en la secundaria y desde
                entonces fui aprendiendo distintas tecnologías a través de
                cursos y proyectos personales y académicos.
              </p>

              <p>
                Actualmente estoy enfocado en seguir mejorando mis conocimientos
                en JavaScript, React, Node.js, C# y bases de datos, mientras
                busco mi primera experiencia profesional dentro del mundo del
                desarrollo.
              </p>
            </div>
          </div>
        </article>
      </section>

      <section className="border-top ">
        <article className="container mt-5">
          <h2>Proyectos & desarrollo</h2>
          <p className="w-50">
            Una selección de proyectos en los que puse en práctica mis
            conocimientos de desarrollo web y programación.
          </p>

          <div className="container mt-5">
            <div className="row g-4 justify-content-around">
              <div className="col-12 col-md-6 col-lg-4">
                <Card className="CardProyectos h-100 p-2">
                  <Card.Img
                    variant="top"
                    className="rounded"
                    src={foto}
                    alt="Sistema de gestión de turnos"
                  />

                  <Card.Body className="d-flex flex-column">
                    <Card.Title>Sistema de gestión de turnos</Card.Title>
                    <p>
                      Estado: <span className="Finalizado p-1">Finalizado</span>
                    </p>

                    <Card.Text>
                      Aplicación web para gestionar turnos de manera simple y
                      organizada, permitiendo administrar pacientes,
                      profesionales y sus respectivas citas.
                    </Card.Text>

                    <ul className="ListaLenguajes">
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>Bootstrap</li>
                      <li>JavaScript</li>
                      <li>Json</li>
                    </ul>

                    <a
                      className="mt-auto align-self-start btn btn-outline-primary"
                      target="_blank"
                      href="https://github.com/Matiassanchez18/SistemaDeTurnos"
                    >
                      Ir a GitHub
                      <i className="bi bi-arrow-right ms-2"></i>
                    </a>
                  </Card.Body>
                </Card>
              </div>

              <div className="col-12 col-md-6 col-lg-4">
                <Card className="CardProyectos h-100 p-2">
                  <Card.Img
                    variant="top"
                    className="rounded "
                    src={fotoGammer}
                    alt="Proyecto"
                  />

                  <Card.Body className="d-flex flex-column">
                    <Card.Title>ProyectoGammer</Card.Title>
                    <p>
                      Estado: <span className="Finalizado p-1">Finalizado</span>
                    </p>

                    <Card.Text>
                      Consiste en el desarrollo de un sitio web que ofrece un
                      catálogo de juegos para la venta, permitiendo a los
                      usuarios administrar, visualizar y reseñar productos de
                      manera interactiva.
                    </Card.Text>

                    <ul className="ListaLenguajes">
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>Bootstrap</li>
                      <li>JavaScript</li>
                      <li>Json</li>
                    </ul>

                    <a
                      className="mt-auto align-self-start btn btn-outline-primary"
                      target="_blank"
                      href="https://github.com/najr91/ProyectoGammer"
                    >
                      Ir a GitHub
                      <i className="bi bi-arrow-right ms-2"></i>
                    </a>
                  </Card.Body>
                </Card>
              </div>

              <div className="col-12 col-md-6 col-lg-4">
                <Card className="CardProyectos h-100 p-2">
                  <Card.Img
                    variant="top"
                    className="rounded"
                    src={FotoDeporTuc}
                    alt="Proyecto"
                  />

                  <Card.Body className="d-flex flex-column">
                    <Card.Title>DeporTuc</Card.Title>
                    <p>
                      Estado: <span className="Finalizado p-1">Finalizado</span>
                    </p>

                    <Card.Text>
                      Plataforma web orientada al ámbito deportivo, diseñada
                      para facilitar la gestión y organización de actividades,
                      ofreciendo una experiencia simple y accesible para los
                      usuarios.
                    </Card.Text>

                    <ul className="ListaLenguajes">
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>Bootstrap</li>
                    </ul>

                    <a
                      className="mt-auto align-self-start btn btn-outline-primary"
                      target="_blank"
                      href="https://github.com/frantejerizo/Proyecto-DeporTuc"
                    >
                      Ir a GitHub
                      <i className="bi bi-arrow-right ms-2"></i>
                    </a>
                  </Card.Body>
                </Card>
              </div>

              <div className="col-12 col-md-6 col-lg-4">
                <Card className="CardProyectos h-100 p-2">
                  <Card.Img
                    variant="top"
                    className="rounded"
                    src={DevJobs}
                    alt="Proyecto"
                  />

                  <Card.Body className="d-flex flex-column">
                    <Card.Title>DevJobs</Card.Title>
                    <p>
                      Estado: <span className="EnProceso p-1">en proceso</span>
                    </p>

                    <Card.Text>
                      Plataforma web de búsqueda de empleos orientada a
                      desarrolladores, con filtros por tecnología y ubicación
                      para encontrar oportunidades de trabajo de forma rápida y
                      sencilla.
                    </Card.Text>

                    <ul className="ListaLenguajes">
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>Bootstrap</li>
                      <li>JavaScript</li>
                    </ul>

                    <a
                      className="mt-auto align-self-start btn btn-outline-primary Desactivado"
                      target="_blank"
                      href="#"
                      disable
                    >
                      Ir a GitHub
                      <i className="bi bi-arrow-right ms-2"></i>
                    </a>
                  </Card.Body>
                </Card>
              </div>

              <div className="col-12 col-md-6 col-lg-4">
                <Card className="CardProyectos h-100 p-2">
                  <Card.Img
                    variant="top"
                    className="rounded"
                    src={Tour}
                    alt="Proyecto"
                  />

                  <Card.Body className="d-flex flex-column">
                    <Card.Title>ARGENTINA ADVENTURE TOURS</Card.Title>
                    <p>
                      Estado: <span className="Finalizado p-1">Finalizado</span>
                    </p>

                    <Card.Text>
                      Plataforma web de búsqueda de empleos orientada a
                      desarrolladores, con filtros por tecnología y ubicación
                      para encontrar oportunidades de trabajo de forma rápida y
                      sencilla.
                    </Card.Text>

                    <ul className="ListaLenguajes">
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>Bootstrap</li>
                    </ul>

                    <a
                      className="mt-auto align-self-start btn btn-outline-primary"
                      target="_blank"
                      href="https://proyecto-tour-rollingcode.netlify.app/"
                    >
                      Ir a la pagina
                      <i className="bi bi-arrow-right ms-2"></i>
                    </a>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

export default PortafolioMain;
