import Gato from "./Gato.jsx";


function SobreMi(){
    return(
        <>
         <section className="border-top p-5 SobreMi" id="SobreMi">
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
                Soy <span className="TextoDestacado">Matias Sánchez</span>,
                estudiante de Programación en la UTN y desarrollador Full Stack
                en formación. Me interesa crear aplicaciones web modernas,
                funcionales y con una buena experiencia para el usuario.
              </p>

              <p>
                Empecé a interesarme por la programación en 2022 durante mi
                cursado en la secundaria y desde entonces fui aprendiendo
                distintas tecnologías a través de cursos y proyectos personales
                y académicos.
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
        </>
    )
}

export default SobreMi