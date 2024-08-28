import React from "react";
import Home from "./Views/Home";
import Nosotros from "./Views/Nosotros";
import Transparencia from "./Views/Transparencia";
import Donaciones from "./Views/Donaciones";
import Galeria from "./Views/Galeria";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/gaptos" element={<Home />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/transparencia" element={<Transparencia />} />
      <Route path="/donaciones" element={<Donaciones />} />
      <Route path="/galeria" element={<Galeria />} />
    </Routes>
  );
}

export default App;
