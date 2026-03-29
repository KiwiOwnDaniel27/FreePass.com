import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TejidosProducts from '../components/TejidosProducts';
import IndumentariaContain from '../components/IndumentariaContain';

const Indumentaria = () => {
  return (
    <div>
        <div>
            <Navbar/>
        <div>
            <IndumentariaContain/>
        </div>
        <div>
            <TejidosProducts/>
        </div>
        <div>
            <Footer/>
        </div>
        </div>
    </div>
  )
}

export default Indumentaria;