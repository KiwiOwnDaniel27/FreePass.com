import React from 'react'
import { ProductsData } from '../const/data';
import { FaStar } from 'react-icons/fa6';
import { motion } from "framer-motion";
import * as variants from '../motion/animation';

const Products = () => {
  return <div className="mt-14 mb-12">
        
        
        <div className="text-center mb-10 mx-w-[600] mx-auto">
            <p data-aos="fade-up" className="text-sm font-bold text-amber-400
            2xl:text-5xl">Productos más vendidos</p>
            <h1 data-aos="fade-up" className="text-3xl font-bold
            2xl:text-5xl">Outfits</h1>
            <p data-aos="fade-up" className="text-xs text-gray-700
            2xl:text-2xl">Viste con actitud: cada prenda hecha para ti ✨</p>
        </div>

        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5
            place-items-center gap-5 text-center">
                {ProductsData.map((data) =>(
                    <div 
                    data-aos= "fade-up"
                    data-aos-delay= {data.aosDeLay}
                    key={data.id}
                    className="space-y-3">
                        <a href={data.link}>
                        <img src={data.image} alt="" className="h-[220] w-[150] object-cover rounded-md
                        2xl:h-140 2xl:w-130
                        xl:h-85 xl:w-130
                        lg:h-90 lg:w-130
                        md:h-90 md:w-130" />
                        
                        <div className="mt-6">
                            <h3 className="font-semibold
                            2xl:text-2xl">{data.title}</h3>
                            <p className="text-sm text-gray-700 mt-1
                            2xl:text-2xl">{data.color}</p>
                        </div>
                        </a>

                        <div className="flex items-center gap-3">
                            <span className="ml-9
                            2xl:text-2xl">{data.rating}</span>
                            <FaStar className="text-yellow-400"/>
                        </div>
                    </div>
                ))}

            </div>
            <div className="flex justify-center">
                <button className="text-center mt-10 cursor-pointer bg-amber-400 text-white py-3 px-9
                rounded-md
                2xl:text-2xl"> 
                    <a href="/tienda">
                    Ver más
                    </a>
                </button>
            </div>
        </div>
    </div>;
};

export default Products;