import React, { useState, useEffect } from 'react'
import { FaStar } from 'react-icons/fa6';
import Slider from "react-slick";
import { motion } from "framer-motion";
import * as variants from '../motion/animation';
import { Abrigo1 } from '../const/data';
import { CarruselAbrigo1 } from '../const/data';

const AbrigoPages = () => {

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

<motion.div
variants={variants.staggerContainer}
initial='hidden'
whileInView='show'
viewport={{once: true}}
className="overflow-x-hidden"
>

<div className="mt-6 mb-12 container mx-auto px-4">

{/* TITULO */}

<div className="text-center mb-10">
  <h1 className="text-4xl font-bold 2xl:text-7xl">
    Excelente Elección
  </h1>

  <p className="text-xl font-bold text-amber-400 2xl:text-4xl">
    Coleccion Exclusiva
  </p>
</div>


{/* PRODUCTO PRINCIPAL */}

<div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-10">

{/* CARRUSEL */}

<div className="w-full max-w-[450px] mx-auto">

<Slider {...settings}>
{CarruselAbrigo1.map((data, index) => (

<div key={index}>

<div className="flex justify-center">

<img
className="rounded-2xl w-full max-w-[350px] xl:max-w-[450px]"
src={data.image}
alt=""
/>

</div>

</div>

))}
</Slider>

</div>


{/* INFORMACION */}

<div className="text-center xl:text-left flex flex-col items-center xl:items-start">

<p className="text-2xl font-bold lg:text-4xl max-w-[400px]">
Abrigo Animal Print Blanco y Negro
</p>

<p className="text-2xl mt-4 lg:text-3xl">
$98
</p>

<button
className="bg-amber-400 hover:scale-105 duration-300 text-white
py-3 px-6 rounded-full mt-6 text-lg lg:text-2xl"
>
Añadir al carrito
</button>

</div>

</div>


{/* PRODUCTOS RELACIONADOS */}

<motion.div variants={variants.fadeInUp} className="mt-20">

<Slider {...settingss} className="px-2 md:px-10">

{Abrigo1.map((data) => (

<div key={data.id} className="px-3">

<div
className="bg-white bg-[url('/assets/fondo.prod2.png')] bg-cover
hover:bg-amber-400 hover:text-white
relative shadow-xl duration-300 group rounded-2xl
w-full h-full"
>

<div className="w-full flex justify-center mt-10">

<img
src={data.image}
alt=""
className="w-[180px] lg:w-[220px]
group-hover:scale-110 duration-300 drop-shadow-md"
/>

</div>

<div className="p-4 text-center text-sm">

<div className="flex items-center justify-center gap-2 text-xl mb-3">

<FaStar className="text-yellow-500 group-hover:text-white"/>
<FaStar className="text-yellow-500 group-hover:text-white"/>
<FaStar className="text-yellow-500 group-hover:text-white"/>

</div>

<h1 className="text-lg font-bold">
{data.title}
</h1>

<p className="text-gray-500 group-hover:text-white duration-300 mt-2 text-sm line-clamp-2">
{data.description}
</p>

</div>

</div>

</div>

))}

</Slider>

</motion.div>

</div>
</motion.div>
  )
}

export default AbrigoPages;
