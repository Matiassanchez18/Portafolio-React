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
              {Proyectos.map((proyecto,index) => (
                <div className="col-12 col-md-6 col-lg-4" key={index}>
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
                        <span
                          className={
                            proyecto.estado === "Finalizado"
                              ? "Finalizado"
                              : "EnProceso"
                          }
                        >
                          {proyecto.estado}
                        </span>
                      </p>

                      <Card.Text>{proyecto.descripcion}</Card.Text>

                      <ul className="ListaLenguajes">
                        {proyecto.tecnologias.map((tecnologia,index) => (
                          <li key={index}>{tecnologia}</li>
                        ))}
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
