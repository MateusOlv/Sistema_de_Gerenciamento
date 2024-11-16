import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Inicio from "./pages/Inicio/Inicio";
import Registrar from "./pages/Registrar/Registrar";
import PainelDeControle from "./pages/PainelDeControle/PainelDeControle";
import Perfil from "./pages/Perfil/Perfil";
import Login from "./pages/Login/Login";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/inicio":
        title = "";
        metaDescription = "";
        break;
      case "/registrar":
        title = "";
        metaDescription = "";
        break;
      case "/painel-de-controle":
        title = "";
        metaDescription = "";
        break;
      case "/perfil":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/inicio" element={<Inicio />} />
      <Route path="/registrar" element={<Registrar />} />
      <Route path="/painel-de-controle" element={<PainelDeControle />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
export default App;
