import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Login from "./pages/Login/Login";
import Registrar from "./pages/Registro/Registrar";
import Inicio from "./pages/Inicio/Inicio";
import PainelDeControle from "./pages/PainelDeControle/PainelDeControle";
import Perfil from "./pages/Perfil/Perfil";
import Requisicao from "./pages/Requisicao/Requisicao";
import Formularios from "./pages/Formularios/Formularios";

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
      <Route path="/" element={<Login />} />
      <Route path="/pages/Registro/Registrar.js" element={<Registrar/>}/>
      <Route path="/pages/Inicio/Inicio.js" element={<Inicio/>}/>
      <Route path="/pages/PainelDeControle/PainelDeControle.js" element={<PainelDeControle/>}/>
      <Route path="/pages/Perfil/Perfil.js" element={<Perfil/>}/>
      <Route path="/pages/Requisicao/Requisicao.js" element={<Requisicao/>}/>
      <Route path="/pages/Formularios/Formularios.js" element={<Formularios/>}/>
    </Routes>
  );
}
export default App;
