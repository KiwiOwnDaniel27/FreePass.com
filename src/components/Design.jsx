import React from 'react'

const Design = () => {
  return (
    <div className="mt-19 mb-50 container max-w-xl">
        <div className="text-4xl/tight font-bold text-center">
            <h1 className="ml-9 w-80 flex justify-center text-3xl/tight
            2xl:text-7xl 2xl:w-190 2xl:ml-140
            xl:text-4xl xl:w-133 xl:ml-128
            lg:text-4xl lg:w-133 lg:ml-83
            md:text-4xl md:w-133 md:ml-48
            sm:text-4xl sm:w-133 sm:ml-33" data-aos="fade-up" >Gerente / Diseñadora FreePass</h1>
            <p data-aos="fade-up" className="w-83 ml-6 mt-9 text-base/loose flex justify-center
            2xl:text-2xl 2xl:w-252 2xl:ml-100
            xl:text-base/loose xl:w-210 xl:ml-80
            lg:text-base/loose lg:w-170 lg:ml-60
            md:text-base/loose md:w-100 md:ml-70
            sm:text-base/loose sm:w-90 sm:ml-50">Soy Ruth Quiguango, diseñadora de indumentaria con una pasión arraigada por la moda y la creatividad.
                <br /><br />
                Mi formación en Buenos Aires, donde viví durante 10 años, me permitió ampliar mi visión de la moda y desarrollar una perspectiva única.
                <br /><br />
                Mis raíces y la riqueza cultural de mi entorno han sido fundamentales en mi proceso creativo. Me inspiran las técnicas textiles y saberes 
                tradicionales, que fusiono con innovación y diseño contemporáneo.
                <br /><br />
                No busco replicar, sino reinterpretar y mejorar los procesos artesanales para crear piezas auténticas y originales.
            </p>
            <img data-aos="zoom-in" className="rounded-4xl -ml-90 -mt-90
            2xl:w-100 2xl:-ml-23 2xl:-mt-140 2xl:mb-3
            xl:w-80 xl:-ml-23 xl:-mt-90 xl:mb-3
            lg:w-60 lg:-ml-11 lg:-mt-90 lg:mb-3
            md:w-80 md:-ml-20 md:-mt-125 md:mb-3
            sm:w-60 sm:-ml-19 sm:-mt-120 sm:mb-80" src="./assets/diseñadora.jpeg"  width={300} alt="" />
        </div>
    </div>
  )
}

export default Design;