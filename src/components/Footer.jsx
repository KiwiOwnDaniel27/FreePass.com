import React from 'react'
import { FooterLinks, socialIcons, contactInfo } from '../const/data';
import { RiTiktokFill, RiLinkedinFill, RiGithubFill } from "react-icons/ri";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div data-aos="zoom-in" className="mb-3">
        
        <div className="mt-21 ml-33">
            <div className="container">
                <div className="grid md:grid-cols-3 pv-44 pt-5 -mt-21">

                    <div className="py-8 px-4 2xl:ml-0 xl:ml-0 lg:ml-0 md:-ml-30 sm:ml-43 -ml-3">
                        <h1 className="sm:-ml-3">
                            Links Web
                        </h1>
                        <ul className="flex flex-col gap-3 mt-3 2xl:ml-0 xl:ml-0 ml-3 sm:ml-0">
                            {FooterLinks.map((link) =>(
                                <li className="cursor-pointer hover:text-black hover:translate-x-1 duration-300 text-shadow-gray-600"
                                key={link.title}>
                                <Link to={link.link}>
                                    <span>{link.title}</span>  
                                </Link>
                                

                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="py-8 px-4 -ml-7 2xl:ml-21 xl:ml-9 lg:ml-6 md:-ml-6 sm:ml-36">
                        <h1 className="">
                            Redes Sociales
                        </h1>
                        <ul className="flex gap-3 mt-3 -ml-3">
                            {socialIcons.map(({id, icon: Icon, url}) =>(
                                <a
                                key={id}
                                href={url}
                                target="_blank"
                                >
                                <Icon size={39}/>
                                    
                                </a>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-8 -ml-12 space-y-4 2xl:ml-50 xl:ml-20 lg:ml-19 md:ml-9 sm:ml-33">
                        {contactInfo.map(item => (
                            <a href={item.url} target="_blank" key={item.id} className="flex items-center gap-1.5 hover:text-green-800
                            hover:underline transition-colors">
                                {<item.icon />}
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-[url('/assets/logo.png')] bg-center h-40 w-160 text-black mt-43 -ml-13
        2xl:mt-29 xl:mt-29 lg:mt-29 md:mt-29 sm:mt-46 2xl:w-160
        2xl:ml-206 xl:ml-106 lg:ml-76 md:ml-46 sm:ml-30
        2xl:h-40 xl:h-40 lg:h-40 md:h-40 sm:h-40">
            <p className="text-xs text-center -mt-39 -ml-33">
                Viste tus sueños, define tu estilo. Cada detalle cuenta
            </p>
        </div>
    </div>
    
  )
}

export default Footer;