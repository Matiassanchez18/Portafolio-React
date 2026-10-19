import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import SobreMi from "./pages/SobreMi";
import Skills from "./pages/Skills";
import Proyectos from "./pages/Proyectos";
import Contactos from "./pages/Contactos";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="/about" element={<SobreMi />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/projects" element={<Proyectos />}></Route>
          <Route path="/contact" element={<Contactos />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
