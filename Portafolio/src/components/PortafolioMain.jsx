import "../css/MainPortafolio.css";
import Hero from "./Hero.jsx";
import SobreMi from "./SobreMi.jsx";
import Skills from "./Skills.jsx";
import Proyectos from "./Proyectos.jsx";
import Contactos from "./Contactos.jsx";

function PortafolioMain({ Matias, MisProyectos }) {
  return (
    <>
      <Hero Matias={Matias}></Hero>
      <SobreMi Matias={Matias}></SobreMi>
      <Proyectos Proyectos={MisProyectos}></Proyectos>
      <Skills></Skills>
      <Contactos></Contactos>
    </>
  );
}

export default PortafolioMain;
