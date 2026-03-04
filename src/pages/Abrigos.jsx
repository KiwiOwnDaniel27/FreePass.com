import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AbrigosContain from '../components/AbrigosContain';
import AbrigosProducts from '../components/AbrigosProducts';

const Abrigos = () => {
  return (
    <div>
        <div>
            <Navbar/>
        </div>
        <div>
            <AbrigosContain/>
        </div>
        <div>
            <AbrigosProducts/>
        </div>
        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default Abrigos;