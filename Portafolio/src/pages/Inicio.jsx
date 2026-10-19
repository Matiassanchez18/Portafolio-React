import Header from "../components/Header";
import PortafolioMain from "../components/PortafolioMain";
import Footer from "../components/Footer";
import "../css/Inicio.css";

function Inicio({Matias,Proyectos}) {

  return (
    <>
      <div className="layout">

        <Header />
        <div className="contenido-principal">
          <PortafolioMain Matias={Matias} MisProyectos={Proyectos} />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Inicio;
