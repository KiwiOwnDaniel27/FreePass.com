import React, { useEffect, useState } from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import PreLoader from './pages/PreLoader';
import Home from './pages/Home';
import Origen from "./pages/Origen";
import Amedida from "./pages/Amedida";
import Galeria from "./pages/Galeria";
import Catalogo from './pages/Catalogo';
import Abrigos from './pages/Abrigos';
import Abrigo1 from './pagesAbrigos/Abrigo1';
import Tienda from './pages/Tienda';
import Tejidos from './pages/Tejidos';
import Indumentaria from './pages/Indumentaria';

const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // duración del preloader

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <PreLoader />;
  }

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/origen" element={<Origen />} />
        <Route path="/amedida" element={<Amedida />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/abrigos" element={<Abrigos />} />
        <Route path="/abrigo-1" element={<Abrigo1 />} />
        <Route path="/tejidos" element={<Tejidos />} />
        <Route path="/indumentaria" element={<Indumentaria />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
