import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CollaresContain from '../components/CollaresContain';
import CollaresProducts from '../components/CollaresProducts';

const Collares = () => {
  return (
    <div>
        <div>
            <Navbar/>
        <div>
            <CollaresContain/>
        </div>
        <div>
            <CollaresProducts/>
        </div>
        <div>
            <Footer/>
        </div>
        </div>
    </div>
  )
}

export default Collares;