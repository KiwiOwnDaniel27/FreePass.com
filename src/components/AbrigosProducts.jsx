import React from 'react'
import { ProductsData1 } from '../const/data';
import { FaStar } from 'react-icons/fa6';
import Slider from "react-slick";
import { motion } from "framer-motion";
import * as variants from '../motion/animation';

const AbrigosProducts = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 4, 
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: { slidesToShow: 2 },
          },
          {
            breakpoint: 640,
            settings: { slidesToShow: 1 },
          },
        ],
      };
  return (
<motion.div variants={variants.staggerContainer} initial='hidden' whileInView='show'
        viewport={{once: true}} className="">

    <div className="container">
        <div>
            <div className="text-left mb-9 -mt-9">
                <h1 className="text-3xl font-bold
                2xl:text-5xl
                xl:text-4xl
                lg:text-3xl
                md:text-3xl
                sm:text-3xl">Los mejores productos</h1>
                <p className="text-xs text-gray-700
                2xl:text-2xl
                xl:text-2xl
                lg:text-sm
                md:text-sm
                sm:text-sm">Viste con actitud ✨</p>
            </div>
        </div>


        <motion.div variants={variants.fadeInUp}
        className="grid  grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 md:grid-cols-3 gap-20 md:gap-5 place-items-center mt-9">

          
            
          {ProductsData1.map((data) => (

          <div className="bg-white dark:bg-gray-800 hover:bg-amber-400 dark:hover:bg-amber-400
          hover:text-white relative shadow-xl duration-300 group rounded-2xl
          2xl:w-full xl:w-full">

              <div className="h-86">

                  <img src={data.image} alt="" 
                  className="w-full h-auto block mx-auto transform -translate-y-6
                  group-hover:scale-110 duration-300 drop-shadow-md mt-6
                  2xl:w-90 xl:w-70"
                />
              </div>
              
              <div className="p-4 text-center mt-35 2xl:mt-27 xl:mt-6 lg:mt-16 md:-mt-9 sm:mt-0">
                  <div className="w-full flex items-center justify-center gap-6">
                    <FaStar className="text-yellow-500 group-hover:text-white"/>
                    <FaStar className="text-yellow-500 group-hover:text-white"/>
                    <FaStar className="text-yellow-500 group-hover:text-white"/>
                  </div>

                  <h1 className="text-white text-xl font-bold mt-6">{data.title}</h1>

                  <p
                   className="text-gray-500 group-hover:text-white duration-300 mt-3
                   text-sm line-clamp-2">
                    {data.description}
                   </p>

                  <a href={data.link}>
                      <button className="bg-amber-400 hover:scale-105 duration-300 text-white
                      py-3 px-6 rounded-full mt-6 group-hover:bg-white group-hover:text-amber-400 ml-25 mb-3
                      2xl:ml-18 xl:ml-12 lg:ml-13 md:ml-4 sm:ml-11"
                      onClick>
                            Ordenar Ahora
                      </button>
                  </a>

              </div>

            </div>

          ))}
        </motion.div>
    </div>
    </motion.div>
  )
};
export default AbrigosProducts;