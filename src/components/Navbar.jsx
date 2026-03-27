import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { TbBasketSearch } from "react-icons/tb";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { DropdownLinks, Menu } from "../const/data";
import { Link } from "react-router-dom";
import { RiCloseLine, RiMenuLine } from "@remixicon/react";
import { useShoppingCart } from "../context/shopping-cart";
import { div } from "framer-motion/client";
import { ProductsData1 } from "../const/data";
import { TrashIcon } from "@heroicons/react/24/solid";
import Payment from "./Payment";


const Navbar = () => {

  const [showCart, setShowCart] = useState(false);
  const { products, removeProduct, totalAmount, clearShoppingCart } = useShoppingCart();

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="px-0 sticky md:static top-0 z-50 bg-white">
      <div className="relative z-10 bg-[url('/assets/fondo.prod3.webp')] bg-center flex mx-auto w-full flex-col p-6 h-49 shadow-lg 2xl:h-80
      xl:h-53 lg:h-53 md:h-53 sm:h-53
      ">
        <img src="./assets/logito.png" alt=""
        className="absolute block sm:hidden w-21 mt-31 -ml-3"/>
        <img src="./assets/logito1.png" alt=""
        className="absolute block sm:hidden w-21 mt-31 ml-23"/>
        <img src="./assets/logito2.png" alt=""
        className="absolute block sm:hidden w-21 mt-31 ml-49"/>
        <img src="./assets/logito3.png" alt=""
        className="absolute block sm:hidden w-21 mt-31 ml-73"/>
        
        
        <button className="md:hidden absolute mt-3 sm:mt-7 -ml-3" onClick={handleClick}>
          <RiMenuLine size={40} color="black" />
        </button>

        <SearchBar/>

        <div className="ml-auto">
          <a
            href="https://www.instagram.com/freepassec/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="-ml-19 2xl:-ml-23 xl:-ml-1 lg:ml-0 md:ml-0 mt-0 2xl:-mt-33 xl:-mt-12 lg:-mt-12 md:-mt-12 sm:-ml-65
              w-65 2xl:w-130 xl:w-70 lg:w-60 md:w-50 sm:w-45"
              src="./assets/logo-horizontal.webp"
              alt=""
              width={300}
            />
          </a>

          {/* CARRITO */}
          <div className="relative">

            <button
              onClick={() => setShowCart(!showCart)}
              className="bg-amber-400 hover:bg-amber-400 transition-all duration-200 text-white hover:text-black
              group-hover:bg-white  group-hover:text-amber-400
              active:scale-95 hover:scale-105
              active:bg-white active:text-amber-400 active:duration-300
              py-3 px-6 rounded-full flex items-center gap-3 group ml-9 mt-3 border border-black
              2xl:w-35 2xl:h-20 2xl:ml-16 xl:ml-29 lg:ml-23 md:ml-19 sm:ml-18 2xl:mt-3 xl:mt-3 lg:mt-6
              md:mt-3 sm:-mt-9"
            >
              <span className="group-hover:block transition-all duration-200">
                {products.length}
              </span>

              <FaCartShopping
                className="w-6 h-6 text-xl text-white hover:text-amber-400  drop-shadow-[2px_2px_2px_black] cursor-pointer
                2xl:w-12 2xl:h-12 2xl:ml-5"
              />
            </button>

            {/* DROPDOWN DEL CARRITO */}
            {showCart && (
              <div className="absolute overflow-y-auto right-6 mt-3 w-80 max-h-[70vh]
              2xl:max-h-[120vh] xl:max-h-[60vh] bg-white shadow-lg rounded-lg p-4 z-50">

                <h3 className="font-bold text-black mb-3">Carrito</h3>

                {products.length === 0 ? (
                  <p className="text-gray-500">Carrito vacío</p>
                ) : (
                  products.map((data) => (
                    <div
                      key={data.id}
                      className="flex justify-between border-b py-2 text-black"
                    >
                      <img
                      src={data.image}
                      alt=""
                      className="w-25 flex"
                    />
                    
                      <span className="w-35 text-center -ml-23 mt-6">{data.title}</span>
                      <span className="mt-21 -ml-42">${data.price}</span>
                      <button
                        className="hover:bg-black active:bg-black hover:scale-105 active:scale-95 p-1 w-10 h-10 rounded-full mt-13"
                        onClick={() => removeProduct(data.id)}
                      >
                        <TrashIcon className="w-6 h-6 ml-1 text-red-600 hover:scale-105 active:scale-95" />
                    </button>
                    </div>
                  ))
                )}
                <div className="flex justify-center pt-2 border-t">
                    <span className="font-medium text-xl">Total:</span>
                    <span className="font-medium text-xl">${totalAmount}</span>
                </div>
                <button className="absolute mt-3 ml-60 bg-white py-3 px-3 rounded-full
                  hover:bg-red-600 active:bg-red-600 hover:scale-105 active:scale-95" 
                 onClick={clearShoppingCart}>
                  <TrashIcon className="w-6 h-6 ml-0 text-red-600 hover:text-white hover:scale-105 active:scale-95" />
                </button>

                <button className="mt-3 ml-23 bg-amber-400 py-3 px-3 rounded-full
                 text-white hover:bg-green-600 active:bg-green-600 hover:scale-105 active:scale-95" >
                  <Payment/>
                </button>

              </div>
              
            )}

          </div>

          <div
            className="2xl:-ml-376 xl:-ml-235 lg:-ml-190 md:-ml-150 sm:-ml-120 
            2xl:-mt-20 xl:-mt-20 lg:-mt-20 md:-mt-20 sm:-mt-6 -mt-9 -ml-12"
          >
            <DarkMode />
          </div>
        </div>
      </div>

      {/* MENU MOBILE */}
      <nav className={`navbar ${isOpen ? "active" : ""}`}>
        <button
          className="absolute top-8 right-8 md:hidden"
          onClick={handleClick}
        >
          <RiCloseLine size={50} />
        </button>

        <ul className="flex flex-col items-center gap-10 text-xl">
          {Menu.map((data) => (
            <li className="" key={data.name}>
              <Link
                className="font-bold inline-block px-4 primary-btn duration-200 hover:text-amber-400 active:scale-95"
                to={data.link}
                onClick={handleClick}
              >
                {data.name}
              </Link>
            </li>
          ))}

          <li>
            <a
              href="https://kiwiowndaniel27.github.io/FreePass.com/#/tienda"
              className="font-bold inline-block px-4 primary-btn duration-200 hover:text-amber-400 active:scale-95"
              onClick={handleClick}
            >
              Tienda
            </a>
          </li>
        </ul>
      </nav>

      {/* MENU DESKTOP */}
      <div className="hidden md:flex justify-center shadow-lg py-3 lg:w-full">
        <ul
          className="flex items-center gap-13 text-1xl
          2xl:gap-33 xl:gap-29 lg:gap-20 md:gap-13 sm:gap-4"
        >
          {Menu.map((data) => (
            <li key={data.name}>
              <Link
                className="font-bold inline-block px-4 primary-btn duration-200 2xl:text-3xl"
                to={data.link}
              >
                {data.name}
              </Link>
            </li>
          ))}

          <li className="group relative cursor-pointer">
            <a
              href="https://kiwiowndaniel27.github.io/FreePass.com/#/tienda"
              className="flex items-center primary-btn 2xl:text-3xl"
            >
              Tienda
              <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
            </a>

            <div
              className="absolute z-50 hidden group-hover:block w-41 rounded-md
              bg-transparent backdrop-blur-sm p-2 text-black"
            >
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <Link
                      to={data.link}
                      className="inline-block p-3 primary-btn w-full rounded-full"
                    >
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