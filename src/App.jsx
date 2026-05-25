import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CarrinhoProvider } from "./contexts/CarrinhoContext";
import PaginaHome from "./containers/PaginaHome";
import PaginaQuemSomos from "./containers/PaginaQuemSomos";

export default function App() {
  return (
    <CarrinhoProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PaginaHome />} />
          <Route path="/quem-somos" element={<PaginaQuemSomos />} />
        </Routes>
      </BrowserRouter>
    </CarrinhoProvider>
  );
}