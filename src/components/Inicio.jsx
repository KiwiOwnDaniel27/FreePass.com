import React from 'react'

const Inicio = () => {
  return (
    <div className="mb-6">
         <div className="mt-12 container max-w-xl flex justify-center"> 
                <div>
                <h1 className="text-3xl/tight font-bold mb-6 ml-23 w-70
                2xl:ml-9 2xl:text-7xl 2xl:w-250 2xl:h-30
                xl:ml-29 xl:text-4xl xl:w-106
                lg:ml-0 lg:text-4xl lg:w-106
                md:ml-0 md:text-3xl md:w-106
                sm:ml-0 sm:text-4xl sm:w-106
                ">Bienvenidos a FreePass</h1> 
                <p className="bm-6 opacity-90 text-base/loose
                2xl:ml-0 2xl:text-2xl 2xl:w-223
                xl:ml-0 xl:text-base/lose xl:w-160
                lg:ml-0 lg:text-base/lose  lg:w-160
                md:ml-0 md:text-base/lose md:w-100
                sm:-ml-13 sm:w-129 sm:text-base/loose
                w-80 text-center ml-3"> En Freepass EC, creemos que la moda es más que
                 una tendencia, es una forma de expresión que celebra la individualidad y la exclusividad. 
                 Nuestra marca se inspira en técnicas ancestrales, respetando los saberes y tradiciones de 
                 nuestros artesanos, y fusionándolos con la creatividad y la innovación contemporánea. 
                 Cada detalle artesanal es cuidadosamente seleccionado y elaborado para plasmar la autenticidad
                 y la creatividad que nos caracteriza.
                </p>
                <br /><br />
                <p className="text-base/loose bm-6 opacity-90 
                2xl:ml-0 2xl:text-2xl 2xl:w-223
                xl:ml-0 xl:text-base/lose xl:w-160
                lg:ml-0 lg:text-base/lose lg:w-160
                md:ml-0  md:text-base-lose md:w-100
                sm:-ml-13 sm:w-129
                w-80 text-center ml-3">
                Nuestra marca busca experimentar e innovar constantemente, para llegar a un usuario actual que merece 
                ser percibido con un valor de exclusividad y esencia que lo haga único. Cada pieza de Freepass EC es 
                una obra de arte que combina la tradición y la modernidad, creando una experiencia única para nuestros
                usuarios.
                </p>
                </div>
                <img data-aos="zoom-in" src="./assets/barrio-SM.jpg" alt="Hero" className="rounded-full
                    2xl:w-350 2xl:h-141 2xl:-ml-9 2xl:rounded-full 2xl:-mt-3
                    xl:ml-20 xl:w-100 xl:h-100 xl:-mt-3
                    lg:w-100 lg:h-100 lg:mt-3 lg:ml-0
                    md:w-90 md:h-90 md:mt-29 md:ml-3
                    sm:w-100 sm:h-100 sm:mt-150 sm:-ml-120
                    w-100 h-100 -ml-93 mt-200 " loading="lazy" />
          </div>

    </div>
  )
}

export default Inicio;