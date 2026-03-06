import React from 'react'
import Slider from 'react-slick';
import { testimonialData } from '../const/data';

const Testimonials = () => {

    var settings ={
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,

        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

  return (
    <div>

        <div className="py-10">
            <div className="container">
              <div className="text-center mb-10 mx-w-[600] mx-auto">
                    <p data-aos="fade-up" className="text-sm font-bold text-amber-400
                    2xl:text-5xl">Lo que dicen nuestros clientes</p>
                    <h1 data-aos="fade-up" className="text-3xl font-bold
                    2xl:text-4xl">Lo que nos hace diferentes</h1>
                    <p data-aos="fade-up" className="text-xs text-gray-700
                    2xl:text-2xl">No sigas tendencias. Créate la tuya ✨</p>
              </div>
            </div>

            <div
            data-aos="zoom-in" className="container">
                <Slider {...settings}>{
                   
                   testimonialData.map((data) =>(
                    <div className="my-6">
                        <div key={data.id} className="flex flex-col gap-4 shadow-lg py-8 px-6 2xl:h-103 2xl:w-156
                        2xl:ml-115 2xl:py-8 xl:h-75 xl:w-200 xl:ml-55 lg:h-80 lg:w-100 lg:ml-75 md:h-80 md:w-100
                        md:ml-45 sm:h-80 sm:w-80 sm:ml-35 ml-13
                        mx-40 rounded-xl dark:bg-gray-800/10 bg-amber-400 relative w-70 h-80">
                        <div className="mb-6 ml-11 2xl:ml-55 xl:ml-76 lg:ml-26 md:ml-26">
                            <img src={data.image} alt="" className="rounded-full w-30 h-30
                            2xl:w-35 2xl:h-35 xl:w-35 xl:h-35 lg:w-35 lg:h-35 md:w-35 md:h-35 sm:w-35 sm:h-35
                            2xl:ml-0 xl:ml-0 lg:ml-0 md:ml-0 sm:ml-6 ml-3" />
                        </div>

                        <div className="flex flex-col items-center gap-3 text-center">
                            <div className="space-y-3">
                                <p className="text-xs text-gray-600 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0
                                sm:mt-0
                                2xl:text-2xl">{data.text}</p>
                                <h1 className="text-xl font-bold text-black/80 dark:text-light
                                2xl:text-3xl">{data.name}</h1>
                            </div>
                        </div>
                        <p className="text-black/20 font-serif absolute top-0 ml-50 2xl:ml-120 2xl:-mt-6
                        xl:ml-165 xl:-mt-6 lg:ml-75 md:ml-65 sm:ml-49
                        2xl:text-9xl xl:text-9xl lg:text-9xl md:text-9xl sm:text-9xl text-7xl" >
                            ,,
                        </p>
                    </div>
                    </div>
                   ))}
                </Slider>
            </div>

        </div>

    </div>
  )
}

export default Testimonials;