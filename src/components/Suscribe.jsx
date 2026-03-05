import React from 'react'



const Suscribe = () => {
  return (
    <div data-aos="zoom-in" className="bg-[url('/assets/fondo.webp')] bg-contain bg-center p-6 h-80 shadow-lg mt-23
    2xl:h-120">
        
        <form action="https://formsubmit.co/fiel2589@hotmail.com" method="POST">
        <div className="container backdrop-blur-sm max-w-xl py-10 rounded-2xl
         2xl:w-200
         xl:w-250">
             <div className="space-y-6 max-w-xl mx-auto">
                <h1 className="text-black text-2xl text-center sm:text-4xl
                font-semibold
                2xl:text-5xl">Obtén Notificaciones de Nuestras Nuevas Prendas Exclusivas.
                </h1>
                <div className="flex items-center text-sm
                2xl:text-2xl">
                    <input type="text" 
                        data-aos= "fade-up"
                        placeholder="Ingresar tu correo electrónico"
                        className="w-full p-3 bg-white rounded-2xl"
                    />
                    <button data-aos= "fade-up" type="submit" className="bg-gray-800 text-white p-3 rounded-lg cursor-pointer border border-zinc-600 
                  hover:bg-amber-400 text-sm
                  2xl:text-2xl">Suscribete</button>
                </div> 
             </div>
        </div>
        </form>
    </div>
  );
};

export default Suscribe;