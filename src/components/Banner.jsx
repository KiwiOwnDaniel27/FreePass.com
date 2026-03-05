import React from 'react'
import { BannerImg } from '../const/data';
import { GrSecure } from 'react-icons/gr';
import { FaCrown, FaTruck } from 'react-icons/fa6';
import { GiFoodTruck } from 'react-icons/gi';
import { FaShieldAlt } from 'react-icons/fa';


const Banner = () => {
  return (

    
    
    <div className="flex justify-center items-center py-12 sm:py-0">

        <div className="container">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center mt-21">

                <div data-aos="zoom-in">
                    <img src="./assets/Banner.webp" alt="" 
                    className=" bg-amber-500
                    2xl:w-800 2xl:h-200
                    xl:w-800 xl:h-130
                    drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover rounded-2xl"
                    />
                </div>

                <div className="ml-16">
                <div className="flex flex-col justify-center gap-12 sm:pt-0 text-center">
                    <h1 data-aos="zoom-in" className="text-4xl sm:text-5xl font-bold
                    2xl:text-7xl
                    xl:text-4xl">Conoce de nuestra nueva Tendencia</h1>
                    <p data-aos="fade-up"
                    className="text-sm text-gray-700 tracking-wide leading-5
                    2xl:text-2xl
                    xl:text-sm"
                    >Solicita tu prenda favorita, conecta con FreePass</p>

                <div className="flex flex-col gap-4 w-200">
                <div data-aos="fade-up" className="flex items-center gap-4 ml-23
                2xl:ml-16
                ">
                        <GrSecure className="text-4xl h-12 w-12 shadow-sm p-2 rounded-full bg-violet-400
                        dark:bg-violet-100 
                        2xl:h-16 2xl:w-16
                        xl:h-12 xl:w-12"/>
                        <p className="2xl:text-3xl
                        xl:text-lg">
                            Producto de Calidad.
                        </p>
                    </div> 
                    <div data-aos="fade-up" className="flex items-center gap-4 ml-23
                    2xl:ml-16">
                        <FaTruck className="text-4xl h-16 w-16 shadow-sm p-2 rounded-full bg-orange-400
                        dark:bg-orange-100
                        2xl:h-16 2xl:w-16
                        xl:h-12 xl:w-12" />
                        <p className="2xl:text-3xl
                        xl:text-lg">
                            Entrega Rápida.
                        </p>
                    </div>
                    <div data-aos="fade-up" className="flex items-center gap-4 ml-23
                    2xl:ml-16">
                        <FaShieldAlt className="text-4xl h-16 w-16 shadow-sm p-2 rounded-full bg-orange-400
                        dark:bg-orange-100
                        2xl:h-16 2xl:w-16
                        xl:h-12 xl:w-12" />
                        <p className="2xl:text-3xl
                        xl:text-lg">
                            Servicio de calidad.
                        </p>
                    </div>
                    <div data-aos="fade-up" className="flex items-center gap-4 ml-23
                    2xl:ml-16">
                        <FaCrown className="text-4xl h-16 w-16 shadow-sm p-2 rounded-full bg-orange-400
                        dark:bg-orange-100
                        2xl:h-16 2xl:w-16
                        xl:h-12 xl:w-12" />
                        <p className="2xl:text-3xl
                        xl:text-lg">
                            Obtén Ofertas por ser miembro exclusivo.
                        </p>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner;