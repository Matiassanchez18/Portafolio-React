import "../css/MainPortafolio.css";
import Hero from "./Hero.jsx";
import SobreMi from "../pages/SobreMi.jsx";
import Skills from "../pages/Skills.jsx";
import Proyectos from "../pages/Proyectos.jsx";
import Contactos from "../pages/Contactos.jsx";

function PortafolioMain({ Matias, MisProyectos }) {
  return (
    <>
      <Hero Matias={Matias}></Hero>
      {/* <SobreMi Matias={Matias}></SobreMi>
      <Proyectos Proyectos={MisProyectos}></Proyectos>
      <Skills></Skills>
      <Contactos></Contactos> */}
    </>
  );
}

export default PortafolioMain;
