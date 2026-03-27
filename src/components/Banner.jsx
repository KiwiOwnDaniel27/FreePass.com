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
                    className=" bg-amber-400
                    2xl:w-full 2xl:h-full 2xl:ml-0 2xl:mt-0
                    xl:w-800 xl:h-130 xl:ml-13 xl:mt-0
                    lg:w-800 lg:h-120 lg:ml-13 lg:mt-0
                    md:w-800 md:h-100 md:ml-6 md:mt-0
                    sm:w-800 sm:h-70 sm:ml-39 sm:-mt-110
                    drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover rounded-2xl"
                    />
                </div>

                <div className="ml-0
                2xl:ml-16
                xl:ml-16
                lg:ml-16 
                md:ml-16
                sm:-ml-80">
                <div className="flex flex-col justify-center gap-12 sm:pt-0 text-center">
                    <h1 data-aos="zoom-in" className="text-4xl sm:text-5xl font-bold 2xl:w-175 
                    2xl:text-7xl
                    xl:text-4xl
                    2xl:mt-0
                    xl:mt-0
                    lg:mt-0
                    md:mt-0
                    sm:mt-90">Conoce de nuestra nueva Tendencia</h1>
                    <p data-aos="fade-up"
                    className="text-sm text-gray-700 tracking-wide leading-5
                    2xl:text-2xl 2xl:ml-16 2xl:w-140
                    xl:text-sm"
                    >Solicita tu prenda favorita, conecta con FreePass</p>

                <div className="flex flex-col gap-4">
                <div data-aos="fade-up" className="flex items-center gap-4 ml-9
                2xl:ml-16
                xl:ml-23
                lg:ml-9
                md:ml-0
                sm:ml-30
                ">
                        <GrSecure className="text-4xl h-16 w-16 shadow-sm p-2 rounded-full bg-amber-400
                        dark:bg-amber-400
                        2xl:h-16 2xl:w-16
                        xl:h-12 xl:w-12"/>
                        <p className="2xl:text-3xl
                        xl:text-lg">
                            Producto de Calidad.
                        </p>
                    </div> 
                    <div data-aos="fade-up" className="flex items-center gap-4 ml-9
                    2xl:ml-16
                    xl:ml-23
                    lg:ml-9
                    md:-ml-3
                    sm:ml-30">
                        <FaTruck className="text-4xl h-16 w-16 shadow-sm p-2 rounded-full bg-amber-400
                        dark:bg-amber-400
                        2xl:h-16 2xl:w-16
                        xl:h-12 xl:w-12" />
                        <p className="2xl:text-3xl
                        xl:text-lg">
                            Entrega Rápida.
                        </p>
                    </div>
                    <div data-aos="fade-up" className="flex items-center gap-4 ml-9
                    2xl:ml-16
                    xl:ml-23
                    lg:ml-9
                    md:-ml-3
                    sm:ml-30">
                        <FaShieldAlt className="text-4xl h-16 w-16 shadow-sm p-2 rounded-full bg-amber-400
                       dark:bg-amber-400
                        2xl:h-16 2xl:w-16
                        xl:h-12 xl:w-12" />
                        <p className="2xl:text-3xl
                        xl:text-lg">
                            Servicio de calidad.
                        </p>
                    </div>
                    <div data-aos="fade-up" className="flex items-center gap-4 ml-9
                   2xl:ml-16
                    xl:ml-23
                    lg:ml-9
                    md:-ml-3
                    sm:ml-30">
                        <FaCrown className="text-4xl h-16 w-16 shadow-sm p-2 rounded-full bg-amber-400
                        dark:bg-amber-400 
                        2xl:h-16 2xl:w-16
                        xl:h-12 xl:w-12" />
                        <p className="2xl:text-3xl 2xl:-ml-5 2xl:w-190 w-40 -ml-3
                        xl:text-lg xl:-ml-5
                        lg:-ml-7 md:-ml-3">
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