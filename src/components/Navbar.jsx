import React from 'react';
import SearchBar from './SearchBar';
import { TbBasketSearch } from "react-icons/tb";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from './DarkMode';
import { DropdownLinks, Menu } from '../const/data';
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="">
        <div className="relative z-10 bg-[url('/assets/fondo.webp')] bg-contain bg-center flex mx-auto w-full
        flex-col p-6 h-53 shadow-lg 2xl:h-80">
            
            <SearchBar className=""/>

            <div className="ml-auto">
                <div>
                    <div>
                        <a href="https://www.instagram.com/freepassec/" target="_blank">
                            <img className="-ml-16 2xl:-ml-23 xl:-ml-1
                            mt-0 2xl:-mt-33 xl:-mt-12 lg:-mt-12 md:-mt-12
                            w-60 2xl:w-130 xl:w-70 lg:w-60 md:w-50 sm:w-45" src="./assets/logo-horizontal.webp" alt="" width={300} />
                        </a>
                    </div>

                    <button onClick={() => alert("Carrito Vacío")}
                        className="bg-amber-400 from-primary-to-secundary transition-all duration-200 text-white
                        py-3 px-6 rounded-full flex items-center gap-3 group ml-9 mt-3 border border-black
                        2xl:w-35 2xl:h-20 2xl:ml-16 xl:ml-29 lg:ml-23 md:ml-19 sm
                        sm:ml-18">
                            
                            <span className="group-hover:block hidden transition-all duration-200">Order</span>
                            
                            <FaCartShopping className="w-6 h-6 text-xl text-white drop-shadow-sm cursor-pointer
                            2xl:w-12 2xl:h-12 2xl:ml-5" />
                    </button>

                    <div className="2xl:-ml-376 xl:-ml-235 lg:-ml-190 md:-ml-150 sm:-ml-120 
                    2xl:-mt-20 xl:-mt-20 lg:-mt-20 md:-mt-20 sm:-mt-20 -mt-9 -ml-12">
                        <DarkMode />
                    </div>
                </div>
            </div>
        </div>
        <div className="flex justify-center shadow-lg py-3 lg:w-full hidden 2xl:block xl:block
        lg:block md:block sm:block xl:flex xl:justify-center 2xl:flex 2xl:justify-center lg:flex
        lg:justify-center md:flex md:justify-center sm:flex sm:justify-center">
            <ul className="sm:flex items-center gap-13 text-1xl 2xl:gap-33 xl:gap-29 lg:gap-20 md:gap-13
            sm:gap-4">
                {Menu.map((data) =>(
                    <li>
                        <Link className="text:lg font-bold inline-block px-4 primary-btn
                        duration-200
                        2xl:text-3xl" to={data.link}>{data.name}</Link>
                    </li>
                ))}

                <li className="group relative cursor-pointer">
                    <a href="/#/tienda" className="flex items-center primary-btn 2xl:text-3xl">
                        Tienda
                        <span>
                            <FaCaretDown className=" transition-all duration-200 group-hover: rotate-180"/>
                        </span>
                    </a>
                    <div className="absolute z-9999 hidden group-hover:block w-41 rounded-md
                    bg-transparent backdrop-blur-sm  p-2 text-black " >
                        <ul className="">
                            {DropdownLinks.map((data)=>(
                                <li key={data.id}>
                                    <Link to={data.link}
                                    className="inline-block p-3 primary-btn w-full rounded-full">
                                        {data.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
        
    </div>
  );
};

export default Navbar;