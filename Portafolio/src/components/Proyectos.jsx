import foto from "../assets/SDT.png";
import fotoGammer from "../assets/ProyectoGammer.png";
import FotoDeporTuc from "../assets/DeporTuc.png";
import DevJobs from "../assets/DevJobs.png";
import Tour from "../assets/Tour.png";
import Card from "react-bootstrap/Card";

function Proyectos({ Proyectos }) {
  return (
    <>
      <section className="border-top ">
        <article className="container mt-5">
          <h2>Proyectos & desarrollo</h2>
          <p className="w-50">
            Una selección de proyectos en los que puse en práctica mis
            conocimientos de desarrollo web y programación.
          </p>

          <div className="container mt-5" id="Proyecto">
            <div className="row g-4 justify-content-around">
              {/* <div className="col-12 col-md-6 col-lg-4">
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
              </div> */}
              {Proyectos.map((proyecto) => (
                <div className="col-12 col-md-6 col-lg-4">
                  <Card className="CardProyectos h-100 p-2">
                    <Card.Img
                      variant="top"
                      className="rounded"
                      src={proyecto.img}
                      alt="Sistema de gestión de turnos"
                    />

                    <Card.Body className="d-flex flex-column">
                      <Card.Title>{proyecto.titulo}</Card.Title>
                      <p>
                        Estado:{" "}
                        <span className="Finalizado p-1">
                          {proyecto.estado}
                        </span>
                      </p>

                      <Card.Text>{proyecto.descripcion}</Card.Text>

                      <ul className="ListaLenguajes">
                        {proyecto.tecnologias.map((tecnologia)=>
                        <li>{tecnologia}</li>
                        )}
                      
                      </ul>

                      <a
                        className="mt-auto align-self-start btn btn-outline-primary"
                        target="_blank"
                        href={proyecto.link}
                      >
                        Ir a GitHub
                        <i className="bi bi-arrow-right ms-2"></i>
                      </a>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
export default Proyectos;
