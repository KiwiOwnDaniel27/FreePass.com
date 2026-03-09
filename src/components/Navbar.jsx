import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { TbBasketSearch } from "react-icons/tb";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { DropdownLinks, Menu } from "../const/data";
import { Link } from "react-router-dom";
import { RiCloseLine, RiMenuLine } from "@remixicon/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="px-0">
      <div className="relative z-10 bg-[url('/assets/fondo.webp')] bg-contain bg-center flex mx-auto w-full flex-col p-6 h-53 shadow-lg 2xl:h-80">
        
        <button className="md:hidden absolute mt-3 sm:mt-7" onClick={handleClick}>
          <RiMenuLine size={40} />
        </button>

        <SearchBar  />

        <div className="ml-auto">
          <a
            href="https://www.instagram.com/freepassec/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="-ml-20 2xl:-ml-23 xl:-ml-1 lg:ml-0 md:ml-0 mt-0 2xl:-mt-33 xl:-mt-12 lg:-mt-12 md:-mt-12 sm:-ml-65
              w-70 2xl:w-130 xl:w-70 lg:w-60 md:w-50 sm:w-45"
              src="./assets/logo-horizontal.webp"
              alt=""
              width={300}
            />
          </a>

          <button
            onClick={() => alert("Carrito Vacío")}
            className="bg-amber-400 transition-all duration-200 text-white
            py-3 px-6 rounded-full flex items-center gap-3 group ml-9 mt-3 border border-black
            2xl:w-35 2xl:h-20 2xl:ml-16 xl:ml-29 lg:ml-23 md:ml-19 sm:ml-18 2xl:mt-3 xl:mt-3 lg:mt-6
            md:mt-3 sm:-mt-9"
          >
            <span className="group-hover:block hidden transition-all duration-200">
              Order
            </span>

            <FaCartShopping
              className="w-6 h-6 text-xl text-white drop-shadow-sm cursor-pointer
              2xl:w-12 2xl:h-12 2xl:ml-5"
            />
          </button>

          <div className="2xl:-ml-376 xl:-ml-235 lg:-ml-190 md:-ml-150 sm:-ml-120 
          2xl:-mt-20 xl:-mt-20 lg:-mt-20 md:-mt-20 sm:-mt-6 -mt-9 -ml-12">
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
            <li key={data.name}>
              <Link
                className="font-bold inline-block px-4 primary-btn duration-200"
                to={data.link}
                onClick={handleClick}
              >
                {data.name}
              </Link>
            </li>
          ))}

          {/* TIENDA AGREGADA AL MENU MOBILE */}
          <li>
            <a
              href="https://kiwiowndaniel27.github.io/FreePass.com/#/tienda"
              className="font-bold inline-block px-4 primary-btn duration-200"
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
