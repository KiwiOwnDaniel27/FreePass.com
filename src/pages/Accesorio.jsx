import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Accesorios from '../components/Accesorios';

const Accesorio = () => {
  return (
    <div>
        <div>
            <Navbar/>
        <div>
            <Accesorios/>
        </div>
        <div>
            <Footer/>
        </div>
        </div>
    </div>
  )
}

export default Accesorio;