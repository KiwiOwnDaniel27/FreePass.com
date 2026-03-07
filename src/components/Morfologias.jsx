import React from 'react'

const Morfologias = () => {
  return (
    <div>
        <div className="mb-3">
            <div>
                <h1 data-aos="fade-up" className="mt-16 text-4xl/tight font-bold text-center mb-6
                2xl:text-7xl">Morfologias</h1>
            </div>
            <div data-aos="zoom-in" className="flex flex-col ml-30 gap-23
            2xl:w-200 2xl:h-130 2xl:ml-99 2xl:gap-50 2xl:flex-row
            xl:w-200 xl:h-100 xl:ml-39 xl:gap-14 xl:flex-row
            lg:w-150 lg:h-120 lg:ml-5 lg:gap-6 lg:flex-row
            md:w-80 md:h-80 md:ml-19 md:gap-3 md:flex-row
            sm:w-70 sm:h-70 sm:ml-55 sm:flex-col">
                <img src="./assets/morf-1.png" width={175} height={200} alt="" />
                <img src="./assets/morf-2.png" width={200} height={200}  alt="" />
                <img src="./assets/morf-3.png" width={200} height={200} alt="" />
            </div>
            <div>
                <p data-aos="fade-up" className="ml-0 text-center -mt-153
                2xl:text-3xl 2xl:-ml-270 2xl:mt-3
                xl:-ml-200 xl:mt-3
                lg:-ml-200 lg:mt-3
                md:-ml-140 md:mt-3
                sm:ml-0 sm:mt-49">
                    Tipología
                    <br />
                    Abrigo con Hombro caído
                </p>
                <p data-aos="fade-up" className=" mt-63 ml-3 text-center
                2xl:text-3xl 2xl:ml-1 2xl:-mt-13
                xl:-ml-13 xl:-mt-13
                lg:-ml-13 lg:-mt-13
                md:-ml-11 md:-mt-13
                sm:ml-0 sm:mt-83">
                
                    Tipología
                    <br />
                    Abrigo con Hombro caído
                </p>
                <p data-aos="fade-up" className="mt-73 ml-3 text-center
                2xl:text-3xl 2xl:ml-275 2xl:-mt-29
                xl:-mt-13 xl:ml-190
                lg:-mt-13 lg:ml-190
                md:-mt-13 md:ml-145
                sm:mt-100 sm:ml-0">
                    Tipología
                    <br />
                    Abrigo con Hombro caído
                </p>
            </div>
        </div>
    </div>
  )
}

export default Morfologias;