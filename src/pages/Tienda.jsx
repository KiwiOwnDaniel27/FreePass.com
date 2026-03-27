import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Categorias from '../components/Categorias';


function Tienda () {
  return (
    <div>
      <div>
       <Navbar/>
      </div>
      <div>
        <Categorias/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Tienda;