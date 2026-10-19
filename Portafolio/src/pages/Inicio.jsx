import PortafolioMain from "../components/PortafolioMain";
import "../css/Inicio.css";

function Inicio({ Matias, MisProyectos }) {
  return (
    <PortafolioMain
      Matias={Matias}
      MisProyectos={MisProyectos}
    />
  );
}

export default Inicio;