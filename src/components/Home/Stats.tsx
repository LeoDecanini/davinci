import React from "react";

const Stats = () => {
  return (
    <section className="flex h-full relative py-10 justify-center">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="max-w-7xl w-full relative gap-10">
        <div>
          <h3 className="font-bold text-5xl pt-5">Instalaciones y Recursos</h3>
          <div className="h-1 max-w-64 bg-primary"></div>
        </div>
        <div className="grid grid-cols-2 pt-10 items-center">
          <div>
            <p className="">
              La Escuela Da Vinci es reconocida por su infraestructura
              tecnológica de vanguardia en Argentina. Equipada con aulas
              avanzadas, salas de croma y estudios de grabación de sonido,
              ofrece un entorno ideal para la exploración creativa.
            </p>
            <p className="pt-3">
              En 2020, lanzó aulas virtuales modernas para la educación a
              distancia, con clases en vivo y un sistema intuitivo de
              intercambio de archivos, adaptándose a las necesidades actuales.
            </p>
            <p className="pt-3 pb-5">
              Esta combinación de instalaciones de última generación y
              tecnología innovadora brinda a los estudiantes una experiencia
              educativa excepcional y adaptable a cualquier entorno.
            </p>

            <button className="px-8 py-3 font-bold text-white bg-secondary hover:bg-[#b30c67]">
              Conoce Da Vinci
            </button>
          </div>
          <div className="h-full">
            <iframe
            className="w-full h-full"
              src="https://www.youtube.com/embed/2ql5H_dz-G4"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
