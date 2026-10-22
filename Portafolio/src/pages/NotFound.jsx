import { Link } from "react-router-dom";
import "../css/NotFound.css" 

function NotFound (){
  return (
    <div className="not-found">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>

        <h2>¡Página no encontrada!</h2>

        <p>
          Lo sentimos, la página que estás buscando no existe
          o fue movida a otra dirección.
        </p>

        <Link to="/" className="not-found-button">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;