import React from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Hero from './components/Hero';
import Products from './components/Products';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import TopProducts from './components/TopProducts';
import Banner from './components/Banner';
import Suscribe from './components/Suscribe';
import Testimonials from './components/Testimonials';
import Prueba from './components/TopProductsOf';
import TopProductsOf from './components/TopProductsOf';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Origen from "./pages/Origen";
import Amedida from "./pages/Amedida";
import Galeria from "./pages/Galeria";
import Home from './pages/Home';
import Catalogo from './pages/Catalogo';
import Abrigos from './pages/Abrigos';
import Abrigo1 from './pagesAbrigos/Abrigo1';
import Tienda from './pages/Tienda';




const App = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter basename="/FreePass.com">
        <Routes>
        <Route path="/" element={<Tienda />} />
        <Route path="/Origen" element={<Origen />} />
        <Route path="/Amedida" element={<Amedida />} />
        <Route path="/Galeria" element={<Galeria />} />
        <Route path="/Tienda" element={<Tienda/>} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Catalogo" element={<Catalogo />} />
        <Route path="/Abrigos" element={<Abrigos />} />
        <Route path="/Abrigo1" element={<Abrigo1 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;