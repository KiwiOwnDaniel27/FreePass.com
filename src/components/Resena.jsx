import React from 'react'

const Resena = () => {
  return (
    <div className="mt-9 mb-9">
         <div className="container max-w-xl">
                <div data-aos="fade-up" className="text-3xl/tight font-bold mb-6 text-center mt-21
                2xl:text-7xl 2xl:w-150
                xl:text-4xl/tight 
                lg:text-4xl/tight 
                md:text-4xl/tight 
                sm:text-4xl/tight ">
                    <h1 className="sm:-ml-3 ml-0">Reseña de Marca</h1>
                    <p className="w-85  text-sm bm-6 opacity-90 text-center mt-12 ml-4
                    2xl:text-2xl 2xl:w-300 2xl:-ml-70
                    xl:text-base/loose xl:w-150
                    lg:text-base/loose lg:w-150
                    md:text-base/loose md:w-150
                    sm:text-base/loose sm:w-150
                    sm:-ml-9">
                    En Free Pass vive una historia,
                    tejida a mano, con calma y memoria
                    Prendas que abrazan la piel y el alma,
                    con arte y amor, con fuerza y con calma.
                    <br />
                    Sostenible es su huella, ligera en el suelo
                    honrando la tierra, el agua y el cielo.
                    No es solo moda: es vida consciente,
                    una elección bella, un acto valiente.
                    <br />
                    Luce con orgullo su esencia sincera,
                    porque vestir así....... también es manera
                    de cuidar al mundo, paso a paso,
                    con cada puntada, con cada abrazo.
                    </p>
                    <img  data-aos="zoom-in" className="ml-23 mt-12
                    2xl:w-110 2xl:ml-23
                    xl:ml-40 
                    lg:ml-40
                    md:ml-40
                    sm:ml-40" src="assets/logo-circular.png" width={200} alt="" />
                </div>
            </div>
    </div>
  )
}

export default Resena;