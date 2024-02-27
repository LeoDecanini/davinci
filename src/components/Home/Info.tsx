import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Info = () => {
  return (
    <section className="grid xl:grid-cols-3 w-full">
      <div className="cursor-pointer hover:bg-[#424242] bg-[#525252] w-full text-white p-2 md:p-8">
        <span className="font-bold text-xl">Descuentos</span>
        <h2 className="pt-5 font-bold text-2xl md:text-4xl pb-5">
          20% Off hasta el 9 de Marzo. Carreras de Diseño, Programación y Arte
          Digital.
        </h2>
        <button className="flex gap-3 justify-center items-center text-2xl">
          Ver <FaArrowRight />
        </button>
        <div className="bg-primary h-1 mt-4"></div>
      </div>
      <div className="cursor-pointer hover:bg-[#313131] bg-[#3d3d3d] w-full text-white p-2 md:p-8">
        <span className="font-bold text-xl">Programas</span>
        <h2 className="pt-5 font-bold text-2xl md:text-4xl pb-5">
          Cursos de Formación Profesional en Arte, Diseño, Marketing y
          Programación.
        </h2>
        <button className="flex gap-3 justify-center items-center text-2xl">
          Ver <FaArrowRight />
        </button>
        <div className="bg-primary h-1 mt-4"></div>
      </div>
      <div className="cursor-pointer hover:bg-[#1d1d1d] bg-[#2b2b2b] w-full text-white p-2 md:p-8">
        <span className="font-bold text-xl">Atencion al cliente</span>
        <div className="pt-5 pb-5">
          <span className="font-bold text-xl">Informes e inscripción:</span>
          <p className="font-bold text-md">(+54-11) 5032-0076</p>
        </div>
        <div className="pb-5">
          <span className=" font-bold text-xl">Alumnos:</span>
          <p className="font-bold text-md">(+54-11) 5032-0055</p>
        </div>
        <button className="flex gap-3 justify-center items-center text-2xl">
          Ver <FaArrowRight />
        </button>
        <div className="bg-primary h-1 mt-4"></div>
      </div>
    </section>
  );
};

export default Info;
