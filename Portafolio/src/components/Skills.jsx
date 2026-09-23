import { useState } from "react";

function Skills() {
  let contenido;
  const [oculto, setOculto] = useState(true);

  const handleSkills = () => {
    setOculto(!oculto);
  };

    if (!oculto) {
    contenido = (
                 <div className="col-12 col-md-10 col-lg-4">
              <div className="card-habilidades h-100">
                <div className="titulo-habilidad">
                  <div className="icono-habilidad">
                    <i className="bi bi-server"></i>
                  </div>

                  <div>
                    <h2>Otras habilidades</h2>
                    <p>Un poco mas sobre mis habilidades</p>
                  </div>
                </div>

                <div className="habilidad">
                  <span className="nombre-habilidad">Ingles</span>

                  <div className="BarraProgreso">
                    <div
                      className="progreso-porcentaje"
                      style={{ width: "80%" }}
                    ></div>
                  </div>

                  <span className="porcentaje">80%</span>
                </div>

                <div className="habilidad">
                  <span className="nombre-habilidad">Comunicación</span>

                  <div className="BarraProgreso">
                    <div
                      className="progreso-porcentaje"
                      style={{ width: "60%" }}
                    ></div>
                  </div>

                  <span className="porcentaje">60%</span>
                </div>

                <div className="habilidad">
                  <span className="nombre-habilidad">Resolución de problemas</span>

                  <div className="BarraProgreso">
                    <div
                      className="progreso-porcentaje"
                      style={{ width: "80%" }}
                    ></div>
                  </div>

                  <span className="porcentaje">80%</span>
                </div>

                <div className="habilidad">
                  <span className="nombre-habilidad">Adaptabilidad</span>

                  <div className="BarraProgreso">
                    <div
                      className="progreso-porcentaje"
                      style={{ width: "70%" }}
                    ></div>
                  </div>

                  <span className="porcentaje">70%</span>
                </div>
                <div className="habilidad">
                  <span className="nombre-habilidad">Responsabilidad</span>

                  <div className="BarraProgreso">
                    <div
                      className="progreso-porcentaje"
                      style={{ width: "90%" }}
                    ></div>
                  </div>

                  <span className="porcentaje">90%</span>
                </div>

              </div>
            </div>
    );
  }
  return (
    <>
      <section className="SeccionSkills mb-5 py-5  mt-5 border-top">
        <div className="container">
          <div className="TextoSkills text-center mb-5">
            <span className="EtiquetaSkills">MIS HABILIDADES</span>

            <h2>Skills & tecnologías</h2>

            <p>Tecnologías y herramientas con las que trabajo actualmente.</p>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-12 col-md-10 col-lg-4">
              <div className="card-habilidades h-100">
                <div className="titulo-habilidad">
                  <div className="icono-habilidad">
                    <i className="bi bi-code-slash"></i>
                  </div>

                  <div>
                    <h2>FrontEnd</h2>
                    <p>Tecnologías de desarrollo web</p>
                  </div>
                </div>

                <div className="habilidad">
                  <span className="nombre-habilidad">HTML</span>

                  <div className="BarraProgreso">
                    <div
                      className="progreso-porcentaje"
                      style={{ width: "85%" }}
                    ></div>
                  </div>

                  <span className="porcentaje">85%</span>
                </div>

                <div className="habilidad">
                  <span className="nombre-habilidad">CSS</span>

                  <div className="BarraProgreso">
                    <div
                      className="progreso-porcentaje"
                      style={{ width: "80%" }}
                    ></div>
                  </div>

                  <span className="porcentaje">80%</span>
                </div>

                <div className="habilidad">
                  <span className="nombre-habilidad">Bootstrap</span>

                  <div className="BarraProgreso">
                    <div
                      className="progreso-porcentaje"
                      style={{ width: "80%" }}
                    ></div>
                  </div>

                  <span className="porcentaje">80%</span>
                </div>

                <div className="habilidad">
                  <span className="nombre-habilidad">JavaScript</span>

                  <div className="BarraProgreso">
                    <div
                      className="progreso-porcentaje"
                      style={{ width: "75%" }}
                    ></div>
                  </div>

                  <span className="porcentaje">75%</span>
                </div>

                <div className="habilidad">
                  <span className="nombre-habilidad">React</span>

                  <div className="BarraProgreso">
                    <div
                      className="progreso-porcentaje"
                      style={{ width: "65%" }}
                    ></div>
                  </div>

                  <span className="porcentaje">65%</span>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-10 col-lg-4">
              <div className="card-habilidades h-100">
                <div className="titulo-habilidad">
                  <div className="icono-habilidad">
                    <i className="bi bi-server"></i>
                  </div>

                  <div>
                    <h2>Backend</h2>
                    <p>Desarrollo de aplicaciones y APIs</p>
                  </div>
                </div>

                <div className="habilidad">
                  <span className="nombre-habilidad">C#</span>

                  <div className="BarraProgreso">
                    <div
                      className="progreso-porcentaje"
                      style={{ width: "70%" }}
                    ></div>
                  </div>

                  <span className="porcentaje">70%</span>
                </div>

                <div className="habilidad">
                  <span className="nombre-habilidad">SQL</span>

                  <div className="BarraProgreso">
                    <div
                      className="progreso-porcentaje"
                      style={{ width: "70%" }}
                    ></div>
                  </div>

                  <span className="porcentaje">70%</span>
                </div>

                <div className="habilidad">
                  <span className="nombre-habilidad">MySQL</span>

                  <div className="BarraProgreso">
                    <div
                      className="progreso-porcentaje"
                      style={{ width: "70%" }}
                    ></div>
                  </div>

                  <span className="porcentaje">70%</span>
                </div>

                <div className="habilidad">
                  <span className="nombre-habilidad">REST APIs</span>

                  <div className="BarraProgreso">
                    <div
                      className="progreso-porcentaje"
                      style={{ width: "65%" }}
                    ></div>
                  </div>

                  <span className="porcentaje">65%</span>
                </div>

                <div className="habilidad">
                  <span className="nombre-habilidad">Node.js</span>

                  <div className="BarraProgreso">
                    <div
                      className="progreso-porcentaje"
                      style={{ width: "55%" }}
                    ></div>
                  </div>

                  <span className="porcentaje">55%</span>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-10 col-lg-4">
              <div className="card-habilidades h-100">
                <div className="titulo-habilidad">
                  <div className="icono-habilidad">
                    <i className="bi bi-wrench-adjustable"></i>
                  </div>

                  <div>
                    <h2>Herramientas</h2>
                    <p>Herramientas de desarrollo</p>
                  </div>
                </div>

                <div className="habilidad">
                  <span className="nombre-habilidad">VS Code</span>

                  <div className="BarraProgreso">
                    <div
                      className="progreso-porcentaje"
                      style={{ width: "85%" }}
                    ></div>
                  </div>

                  <span className="porcentaje">85%</span>
                </div>

                <div className="habilidad">
                  <span className="nombre-habilidad">Git</span>

                  <div className="BarraProgreso">
                    <div
                      className="progreso-porcentaje"
                      style={{ width: "75%" }}
                    ></div>
                  </div>

                  <span className="porcentaje">75%</span>
                </div>

                <div className="habilidad mb-5">
                  <span className="nombre-habilidad">GitHub</span>

                  <div className="BarraProgreso">
                    <div
                      className="progreso-porcentaje"
                      style={{ width: "75%" }}
                    ></div>
                  </div>

                  <span className="porcentaje">75%</span>
                </div>
              </div>
            </div>

            {contenido}
          </div>
        </div>

        <div>
          <button
            onClick={handleSkills}
            className="d-flex mx-auto align-self-start btn btn-outline-primary mt-5 "
            >
            {oculto ? "ver mas": "ver menos"}
          </button>
        </div>
      </section>
    </>
  );
}
export default Skills;
