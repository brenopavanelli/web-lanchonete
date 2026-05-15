import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaHome from "./containers/PaginaHome";
import PaginaQuemSomos from "./containers/PaginaQuemSomos";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaHome />} />
        <Route path="/quem-somos" element={<PaginaQuemSomos />} />
      </Routes>
    </BrowserRouter>
  );
}