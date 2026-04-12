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
import { Camisa1 } from './pagesCamisas/Camisa1';
import { Camisa2 } from './pagesCamisas/Camisa2';
import { Camisa3 } from './pagesCamisas/Camisa3';
import { Camisa4 } from './pagesCamisas/Camisa4';
import { Camisa5 } from './pagesCamisas/Camisa5';
import { Camisa6 } from './pagesCamisas/Camisa6';
import { Camisa7 } from './pagesCamisas/Camisa7';
import { Camisa8 } from './pagesCamisas/Camisa8';
import {Tejido1} from './pagesTejidos/Tejido1';
import {Tejido2} from './pagesTejidos/Tejido2';
import {Tejido3} from './pagesTejidos/Tejido3';
import {Tejido4} from './pagesTejidos/Tejido4';


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
        <Route path="/tejido-1" element={<Tejido1 />} />
        <Route path="/tejido-2" element={<Tejido2 />} />
        <Route path="/tejido-3" element={<Tejido3 />} />
        <Route path="/tejido-4" element={<Tejido4 />} />
        <Route path="/indumentaria" element={<Indumentaria />} />
        <Route path="/camisa-1" element={<Camisa1/>} />
        <Route path="/camisa-2" element={<Camisa2/>} />
        <Route path="/camisa-3" element={<Camisa3/>} />
        <Route path="/camisa-4" element={<Camisa4/>} />
        <Route path="/camisa-5" element={<Camisa5/>} />
        <Route path="/camisa-6" element={<Camisa6/>} />
        <Route path="/camisa-7" element={<Camisa7/>} />
        <Route path="/camisa-8" element={<Camisa8/>} />
      </Routes>
    </HashRouter>
  );
};

export default App;
