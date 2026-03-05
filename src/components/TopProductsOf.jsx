import React from 'react'
import { ProductsData1 } from '../const/data';
import { FaStar } from 'react-icons/fa6';
import Slider from "react-slick";
import { motion } from "framer-motion";
import * as variants from '../motion/animation';
import { Link } from 'react-router-dom';

const TopProducts = () => {

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3, 
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
          <div className="text-left mb-9">
            <p className="text-sm font-bold text-amber-400
            2xl:text-5xl">Productos recomendados para ti</p>
            <h1 className="text-3xl font-bold
            2xl:text-5xl">Los mejores productos</h1>
            <p className="text-xs text-gray-700
            2xl:text-2xl">Viste con actitud: cada prenda hecha para ti ✨</p>
          </div>
        </div>

        {/* Slider */}
        <motion.div variants={variants.fadeInUp} className="-mt-16">
          <Slider {...settings} className="px-2 md:px-10">
            {ProductsData1.map((data) => (

              <div key={data.id} className="px-3">
                <div className="bg-white dark:bg-gray-800 hover:bg-amber-400 dark:hover:bg-amber-400
                  hover:text-white relative shadow-xl duration-300 group max-w-500 rounded-2xl
                  2xl:w-full 2xl:h-full
                  xl:w-full xl:h-full">

                  <div className="">
                    <Link to={data.link}>
                    <img src={data.image} alt="" 
                      className="w-full h-auto block mx-auto transform -translate-y-6 
                      group-hover:scale-110 duration-300 drop-shadow-md mt-26
                      2xl:w-90 2xl:h-full
                      xl:w-70 xl:h-auto"
                    />
                    </Link>
                  </div>

                  <div className="p-4 text-center mt-0
                  2xl:mt-0
                  xl:-mt-3">
                    <div className="w-full flex items-center justify-center gap-6 
                    2xl:text-2xl">
                      <FaStar className="text-yellow-500 group-hover:text-white"/>
                      <FaStar className="text-yellow-500 group-hover:text-white"/>
                      <FaStar className="text-yellow-500 group-hover:text-white"/>
                    </div>

                    <h1 className="text-white text-xl font-bold mt-6
                    2xl:text-3xl">{data.title}</h1>

                    <p className="text-gray-500 group-hover:text-white duration-300 mt-3 text-sm line-clamp-2
                    2xl:text-2xl">
                      {data.description}
                    </p>

                    <a href={data.link}>
                      <button className="bg-amber-400 hover:scale-105 duration-300 text-white
                        py-3 px-6 rounded-full mt-6 group-hover:bg-white group-hover:text-amber-400 ml-11
                        2xl:ml-19 mb-1
                        2xl:text-2xl 2xl:mb-6
                        xl:ml-16
                        lg:ml-16
                        md:ml-16">
                        Comprar Ahora
                      </button>
                    </a>
                  </div>

                </div>
              </div>

            ))}
          </Slider>
        </motion.div>

      </div>
    </motion.div>
  )
};

export default TopProducts;