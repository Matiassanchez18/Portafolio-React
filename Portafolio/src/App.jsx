import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import SobreMi from "./pages/SobreMi";
import Skills from "./pages/Skills";
import Proyect from "./pages/Proyectos";
import Contactos from "./pages/Contactos";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";

function App() {
  const Matias = {
    nombre: "Matias",
    apellido: "Sanchez",
    profesion: "Estudiante de Programación Full Stack Developer en formación",
  };

  const Proyectos = [
    {
      img: `./SDT.png`,
      titulo: "Sistema de gestión de turnos",
      estado: "Finalizado",
      descripcion:
        "Aplicación web para gestionar turnos de manera simple y organizada, permitiendo administrar pacientes, profesionales y sus respectivas citas",
      tecnologias: ["HTML", "CSS", "Bootstrap", "Json", "JavaScript"],
      link: "https://github.com/Matiassanchez18/SistemaDeTurnos",
    },
    {
      img: `./ProyectoGammer.png`,
      titulo: "ProyectoGammer",
      estado: "Finalizado",
      descripcion:
        "Consiste en el desarrollo de un sitio web que ofrece un catálogo de juegos para la venta, permitiendo a los usuarios administrar, visualizar y reseñar productos de manera interactiva.",
      tecnologias: ["HTML", "CSS", "Bootstrap", "Json", "JavaScript"],
      link: "https://github.com/najr91/ProyectoGammer",
    },
    {
      img: `./DeporTuc.png`,
      titulo: "DeporTuc",
      estado: "Finalizado",
      descripcion:
        "Plataforma web orientada al ámbito deportivo, diseñada para facilitar la gestión y organización de actividades, ofreciendo una experiencia simple y accesible para los usuarios.",
      tecnologias: ["HTML", "CSS", "Bootstrap"],
      link: "https://github.com/frantejerizo/Proyecto-DeporTuc",
    },
    {
      img: `./DevJobs.png`,
      titulo: "DevJobs",
      estado: "En proceso",
      descripcion:
        "Plataforma web de búsqueda de empleos orientada a desarrolladores, con filtros por tecnología y ubicación para encontrar oportunidades de trabajo de forma rápida y sencilla.",
      tecnologias: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      link: "",
    },
    {
      img: `./Tour.png`,
      titulo: "ARGENTINA ADVENTURE TOURS",
      estado: "Finalizado",
      descripcion:
        "Plataforma web de búsqueda de empleos orientada a desarrolladores, con filtros por tecnología y ubicación para encontrar oportunidades de trabajo de forma rápida y sencilla.",
      tecnologias: ["HTML", "CSS"],
      link: "https://proyecto-tour-rollingcode.netlify.app/",
    },
  ];
  return (
    <>
      <BrowserRouter>
        <Routes >
          <Route element={<Layout></Layout>}>
            <Route
              path="/"
              element={<Inicio Matias={Matias} MisProyectos={Proyectos} />}
            ></Route>
            <Route path="/about" element={<SobreMi Matias={Matias} />}></Route>
            <Route path="/skills" element={<Skills />}></Route>
            <Route path="/projects" element={<Proyect Proyectos={Proyectos} />}></Route>
            <Route path="/contact" element={<Contactos />}></Route>
          </Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
