import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/Home/Home.jsx";
import Teams from "../views/Teams/Teams.jsx";
import Contacto from "../views/Contacto/Contacto.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/contact" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router