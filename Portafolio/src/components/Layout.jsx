import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="layout">
      <Header />

      <div className="contenido-principal">
        <div>
          <Outlet />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Layout;