import { Routes, Route } from "react-router-dom";

import Header from "./components/ui/header";
import { Footer } from "./components/ui/footer";

import Home from "./components/ui/hero";
import Carrossel from "./components/ui/carrossel";
import Servicos from "./components/ui/services";
import Depoimentos from "./components/ui/Depoimentos";
import Processo from "./components/ui/Processo";
import Beneficios from "./components/ui/beneficios";

import Contato from "./routes/contact";
import Sobre from "./routes/about";
import Trabalhos from "./components/ui/trampos";
import CallToActionTrabalhos from "./components/ui/CallToAction";

function App() {
  return (
    <main>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Carrossel />
              <Servicos />
              <Depoimentos />
              <Processo />
              <Beneficios />
              <CallToActionTrabalhos />
            </>
          }
        />

        <Route path="/contact" element={<Contato />} />
        <Route path="/about" element={<Sobre />} />
        <Route path="/servico" element={<Trabalhos />} />
      </Routes>

      <Footer />
    </main>
  );
}

export default App;
