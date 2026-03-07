import React from 'react'
import Slider from "react-slick";
import { Galery } from '../const/data';


const Pasarelas = () => {
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

  return (
   <div className="relative overflow-y-hidden min-h-140 bg-gray-100 dark:bg-gray-900 dark:text-white
        duration-200">
            <div>
                <div className="text-center text-3xl/tight font-bold mb-6 mt-21 ml-0">
                    <div className="-mt-10">
                        <p data-aos="zoom-in" className="text-xl/tight
                        2xl:text-7xl
                        xl:text-4xl/tight
                        lg:text-4xl/tight
                        md:text-4xl/tight
                        sm:text-4xl/tight">Colección "La esencia de lo único"</p>
                    </div>
                </div>
                
            </div>

            <div data-aos="zoom-in"  className="w-80 h-100 pb-8 sm:pb-0 mt-0 mb-25 ml-18
            2xl:w-400 2xl:h-200 2xl:ml-60
            xl:w-260 xl:h-100 xl:ml-0
            lg:w-260 lg:h-100 lg:-ml-33
            md:w-260 md:h-100 md:-ml-60
            sm:w-240 sm:h-90 sm:-ml-75" >
                <Slider {...settings}>
                    {Galery.map((data) => (
                        <div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 ml-10
                        2xl:ml-100
                        xl:ml-100
                        lg:ml-100
                        md:ml-100
                        sm:ml-100" >
                                <div className="order-1 sm:order-2">
                                    <div>
                                        <img className="relative sm:scale-105 -ml-10
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
        </div>
    );
}

export default Pasarelas;