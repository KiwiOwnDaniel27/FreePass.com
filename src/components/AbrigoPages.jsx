import React, { useState, useEffect } from 'react'
import { FaStar } from 'react-icons/fa6';
import Slider from "react-slick";
import { motion } from "framer-motion";
import * as variants from '../motion/animation';
import { Abrigo1, ProductsData1 } from '../const/data';
import { CarruselAbrigo1 } from '../const/data';

const AbrigoPages = () => {

  const [slides, setSlides] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setSlides(1);
      } else if (width < 1024) {
        setSlides(2);
      } else {
        setSlides(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
    var settings ={
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    };
    const settingss = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: slides,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: "linear",
      pauseOnHover: true,
      pauseOnFocus: true,
    };
  return (
    <motion.div variants={variants.staggerContainer} initial='hidden' whileInView='show'
            viewport={{once: true}} className="">

    <div className="mt-6 mb-12 container">
        <div className="text-center mb-10 mx-w-[600] mx-auto">
                <h1 data-aos="fade-up" className="text-5xl font-bold
                2xl:text-7xl">Excelente Elección</h1>
                <p data-aos="fade-up" className="text-2xl font-bold text-amber-400
                2xl:text-4xl">Coleccion Exclusiva</p>
                
        </div>
                
        <div>
        <div>
                <div className="text-center text-4xl/tight font-bold mb-6 ml-230 w-90 absolute mt-105
                2xl:ml-250 2xl:mt-30
                xl:ml-160 xl:mt-30
                lg:ml-120 lg:mt-30
                md:ml-80 md:mt-30
                sm:ml-70 sm:mt-12">
                    <div className="-mt-10">
                        <p data-aos="zoom-in" className="text-3xl/tight -ml-215 w-60
                        2xl:text-5xl 2xl:w-130 2xl:-ml-40
                        xl:text-4xl xl:w-100  xl:-ml-3
                        lg:text-4xl lg:w-100 lg:-ml-3
                        md:text-4xl md:w-100 md:-ml-3
                        sm:text-3xl sm:w-50 sm:ml-16">Abrigo Animal Print
                        Blanco y Negro</p>
                        <p data-aos="zoom-in" className="text-3xl/tight mt-6 -ml-460 mb-10
                        2xl:text-5xl 2xl:-ml-36
                        xl:text-3xl xl:ml-0
                        lg:text-3xl lg:ml-0
                        md:text-3xl md:ml-0
                        sm:-ml-9">$98</p>

                        <button data-aos="zoom-in" className="bg-amber-400 hover:scale-105 duration-300 text-white
                            py-3 px-6 rounded-full -mt-6 group-hover:bg-white group-hover:text-amber-400 -ml-212 text-2xl/tight 
                            2xl:text-4xl 2xl:-ml-19 2xl:w-90 2xl:mt-6
                            xl:text-2xl xl:mt-6 xl:ml-16
                            lg:text-2xl lg:mt-6 lg:ml-16
                            md:text-2xl md:mt-6 md:ml-16
                            sm:ml-12 sm:mt-6"
                            >
                                    Añadir al carrito
                        </button>
                        
                    </div>
                </div>
                
            </div>

            <div data-aos="zoom-in"  className="w-170 h-100 pb-8 sm:pb-0 mt-0 mb-25 -ml-91
            2xl:w-350 2xl:mb-90 2xl:-ml-60 2xl:h-100 2xl:mt-0
            xl:w-240 xl:-ml-60 xl:h-100
            lg:w-260 lg:-ml-100 lg:h-100
            md:w-260 md:-ml-145 md:h-100
            sm:w-240 sm:-ml-140 sm:h-100" >
                <Slider {...settings}>
                    {CarruselAbrigo1.map((data) => (
                        <div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 ml-105" >
                                <div className="order-1 sm:order-2">
                                    <div>
                                        <img className="relative sm:scale-105 ml-0
                                        2xl:ml-35
                                        xl:ml-35
                                        lg:ml-35
                                        md:ml-35
                                        sm:ml-35
                                        mx-auto rounded-2xl" src={data.image} alt=""/>
                                    </div>    
                                </div>    
                        </div>
                    </div>
                    ))}
                </Slider>
            </div>
            <motion.div variants={variants.fadeInUp} className="-mt-16">
          <Slider {...settingss} className="px-2 md:px-10">
            {Abrigo1.map((data) => (

              <div key={data.id} className="px-3">
                <div className="bg-white dark:bg-gray-800 hover:bg-amber-400 dark:hover:bg-amber-400
                hover:text-white relative shadow-xl duration-300 group rounded-2xl
                2xl:w-full xl:w-full w-full h-full">

                  <div className="w-full h-full mt-70
                  2xl:h-160 2xl:w-120 2xl:mt-0
                  xl:h-95 xl:w-68 xl:mt-0
                  lg:h-75 lg:w-56 lg:mt-0
                  md:h-100 md:w-76 md:mt-0
                  sm:h-100 sm:mt-0">
                    <img src={data.image} alt=""
                      className="w-full h-auto block mx-auto transform -translate-y-6
                      group-hover:scale-110 duration-300 drop-shadow-md mt-26
                      2xl:w-90 xl:w-70"
                    />
                  </div>

                  <div className="p-4 text-center -mt-20 ml-9 absolute text-sm">
                    <div className="w-full flex items-center justify-center gap-3 rotate-450
                    2xl:text-4xl 2xl:ml-3 2xl:-mt-30 2xl:gap-6
                    xl:text-2xl xl:-ml-5 xl:mt-3 xl:gap-6
                    lg:text-2xl lg:mt-12 lg:ml-0 lg:gap-6
                    md:text-2xl md:mt-0 md:ml-0 md:gap-6
                    sm:text-2xl sm:-ml-4 sm:mt-0 sm:gap-6">
                      <FaStar className="text-yellow-500 group-hover:text-white"/>
                      <FaStar className="text-yellow-500 group-hover:text-white"/>
                      <FaStar className="text-yellow-500 group-hover:text-white"/>
                    </div>

                    <h1 className="text-white text-xl font-bold mt-6">{data.title}</h1>

                    <p className="text-gray-500 group-hover:text-white duration-300 mt-3 text-sm line-clamp-2">
                      {data.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
        </div>

        
    </div>
    </motion.div>
  )
}

export default AbrigoPages;
