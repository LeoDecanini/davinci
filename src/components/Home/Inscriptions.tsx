import React from "react";
import Link from "next/link";

const Inscriptions = () => {
  const carreras = [
    {
      numero: "01",
      nombre: "DISEÑO MULTIMEDIAL",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipiscing",
    },
    {
      numero: "02",
      nombre: "DISEÑO GRÁFICO",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipiscing",
    },
    {
      numero: "03",
      nombre: "PROGRAMACIÓN DE VIDEOJUEGOS",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipiscing",
    },
    {
      numero: "04",
      nombre: "CINE DE ANIMACIÓN Y POSTPRODUCCIÓN",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipiscing",
    },
    {
      numero: "05",
      nombre: "DISEÑO Y PROGRAMACIÓN WEB",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipiscing",
    },
    {
      numero: "06",
      nombre: "ANALISTA DE SISTEMAS",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipiscing",
    },
  ];

  return (
    <section className="flex h-full bg-[#222427] relative bg-[url('/fondo-stats.webp')] bg-no-repeat bg-cover px-2 sm:px-5 md:px-10 py-10 justify-center">
      <div className="max-w-7xl w-full relative">
        <div>
          <h3 className="font-bold text-white text-xl sm:text-3xl md:text-5xl">
            Estamos inscribiendo a Carreras: <br /> Inicio Marzo y Agosto
          </h3>
          <div className="h-1 max-w-20 md:max-w-40 bg-primary"></div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-20 pt-20 text-white">
          {carreras.map((carrera, index) => (
            <Link href={"/"} key={index} className={"flex flex-col text-center sm:text-left sm:flex-row items-center gap-5"}>
              <div className={"text-6xl font-extrabold"}>{carrera.numero}</div>
              <div>
                <h4 className={"text-xl lg:text-2xl"}>{carrera.nombre}</h4>
              </div>
            </Link>
          ))}
        </div>
        <div className={"w-full flex justify-center pt-20"}>
          <button className="px-8 py-3 font-bold text-white bg-secondary hover:bg-[#b30c67]">
            Contactanos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Inscriptions;
