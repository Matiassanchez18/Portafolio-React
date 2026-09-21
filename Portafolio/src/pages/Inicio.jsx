import Header from "../components/Header";
import PortafolioMain from "../components/PortafolioMain";

function Inicio() {
  const Matias = {
    nombre: "Matias",
    apellido:"Sanchez",
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
    },
    {
      img: `./ProyectoGammer.png`,
      titulo: "ProyectoGammer",
      estado: "Finalizado",
      descripcion:
        "Consiste en el desarrollo de un sitio web que ofrece un catálogo de juegos para la venta, permitiendo a los usuarios administrar, visualizar y reseñar productos de manera interactiva.",
      tecnologias: ["HTML", "CSS", "Bootstrap", "Json", "JavaScript"],
    },
    {
      img: `./DeporTuc.png`,
      titulo: "DeporTuc",
      estado: "Finalizado",
      descripcion:
        "Plataforma web orientada al ámbito deportivo, diseñada para facilitar la gestión y organización de actividades, ofreciendo una experiencia simple y accesible para los usuarios.",
      tecnologias: ["HTML", "CSS", "Bootstrap"],
    },
    {
      img: `./DevJobs.png`,
      titulo: "DevJobs",
      estado: "En proceso",
      descripcion:
        "Plataforma web de búsqueda de empleos orientada a desarrolladores, con filtros por tecnología y ubicación para encontrar oportunidades de trabajo de forma rápida y sencilla.",
      tecnologias: ["HTML", "CSS", "Bootstrap","JavaScript"],
    },
    {
      img: `./Tour.png`,
      titulo: "ARGENTINA ADVENTURE TOURS",
      estado: "Finalizado",
      descripcion:
        "Plataforma web de búsqueda de empleos orientada a desarrolladores, con filtros por tecnología y ubicación para encontrar oportunidades de trabajo de forma rápida y sencilla.",
      tecnologias: ["HTML", "CSS"],
    }
  ];
  return (
    <>
      <Header ></Header>
      <PortafolioMain Matias={Matias} Proyectos={Proyectos}></PortafolioMain>
    </>
  );
}

export default Inicio;
