import React, { useState, useEffect } from 'react'
import { ProductsData1 } from '../const/data';
import { FaStar } from 'react-icons/fa6';
import Slider from "react-slick";
import { motion } from "framer-motion";
import * as variants from '../motion/animation';
import { Link } from 'react-router-dom';
import { useShoppingCart } from '../context/shopping-cart';

const TopProducts = () => {

  const { products, addProduct} = useShoppingCart();

  const checkAvailableToAddCart = productId => {
    return Boolean (products.find(data => data.id === productId ));
  }

  const [slides, setSlides] = useState(3);

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

  const settings = {
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
    <motion.div
      variants={variants.staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true }}
    >

      <div className="container">

        <div className="text-left mb-9">
          <p className="text-sm font-bold text-amber-400 2xl:text-5xl ">
            Productos recomendados para ti
          </p>

          <h1 className="text-3xl font-bold 2xl:text-5xl">
            Los mejores productos
          </h1>

          <p className="text-xs text-gray-700 2xl:text-2xl">
            Viste con actitud: cada prenda hecha para ti ✨
          </p>
        </div>

        {/* Slider */}
        <motion.div variants={variants.fadeInUp} className="-mt-16">

          <Slider {...settings} className="px-2 md:px-10">

            {ProductsData1.map((data) => (

              <div key={data.id} className="px-4">

                <div className="bg-white bg-[url('/assets/fondo.prod.png')] bg-cover hover:bg-amber-400 dark:hover:bg-amber-400
                hover:text-white relative shadow-xl duration-300 group rounded-2xl
                2xl:w-full xl:w-full">

                  <Link to={data.link}>
                    <img
                      src={data.image}
                      alt=""
                      className="w-full h-auto block mx-auto transform -translate-y-6
                      group-hover:scale-110 duration-300 drop-shadow-md mt-26
                      2xl:w-90 xl:w-70"
                    />
                  </Link>

                  <div className="p-4 text-center">

                    <div className="w-full flex items-center justify-center gap-6 2xl:text-2xl">
                      <FaStar className="text-yellow-500 group-hover:text-white"/>
                      <FaStar className="text-yellow-500 group-hover:text-white"/>
                      <FaStar className="text-yellow-500 group-hover:text-white"/>
                    </div>

                    <h1 className="text-white text-xl font-bold mt-6 2xl:text-3xl">
                      {data.title}
                    </h1>

                    <p className="text-white group-hover:text-white duration-300 mt-3 text-sm line-clamp-2 2xl:text-2xl">
                      {data.description}
                    </p>

                    <h1 className="text-white text-lg font-bold mt-6 2xl:text-3xl">
                      {data.price}
                    </h1>

                    
                      <button className="bg-amber-400 hover:scale-105 duration-300 text-white
                      py-3 px-6 rounded-full mt-6 group-hover:bg-white group-hover:text-amber-400
                      ml-17
                      2xl:text-2xl 2xl:mb-6"
                      onClick={() => addProduct(data)}
                      disabled={checkAvailableToAddCart(data.id)}
                      >
                        Añadir al carrito
                      </button>
                   

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