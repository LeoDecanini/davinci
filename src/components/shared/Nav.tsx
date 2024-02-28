"use client";
import React, { useState } from "react";
import { FaRegMessage } from "react-icons/fa6";
import { IoCaretDownOutline } from "react-icons/io5";
import Link from "next/link";
import MovileMenu from "@/components/shared/MovileMenu";

const Nav = () => {
  const [hover3, setHover3] = useState(false);

  const [hoverStates, setHoverStates] = useState([false, false, false]);

  const handleHover = (index: number) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = !newHoverStates[index];
    setHoverStates(newHoverStates);
  };
  const handleHover3 = () => {
    setHover3(!hover3);
  };

  const navItem1 = [
    {
      title: "CARRERAS",
      links: [
        { name: "DISEÑO MULTIMEDIAL", url: "/carreras/diseño-multimedial" },
        { name: "DISEÑO GRÁFICO ARTÍSTICO DIGITAL", url: "#" },
        { name: "PROGRAMACIÓN DE VIDEOJUEGOS", url: "#" },
        { name: "CINE DE ANIMACIÓN Y POSPRODUCCIÓN", url: "#" },
        { name: "DISEÑO Y PROGRAMACION WEB", url: "#" },
        { name: "ANALISTA DE SISTEMAS", url: "#" },
        { name: "PROXIMAMENTE: CINE Y NUEVOS FORMATOS", url: "#" },
      ],
    },
    {
      title: "CURRSOS",
      links: [
        { name: "CURSOS PRESENCIALESL", url: "#" },
        { name: "CURSOS ONLINE", url: "#" },
        { name: "CHICOS Y ADOLECENTES", url: "#" },
      ],
    },
  ];

  const navItem3 = [
    {
      title: "ESCUELA",
      links: [
        { name: "INSTALACIONES", url: "#" },
        { name: "INSERCIÓN LABORAL", url: "#" },
        { name: "TITULOS Y LICENCIATURAS", url: "#" },
        { name: "QUE ES DA VINCI", url: "#" },
        { name: "FUTUROS ALUMNOS", url: "#" },
        { name: "DV.TV", url: "#" },
        { name: "INTRANET", url: "#" },
        { name: "CAMPUS A DISTANCIA", url: "#" },
      ],
    },
  ];

  return (
    <nav className="flex w-full h-[94px]">
      <div className="bg-[#161616] min-[375px]:px-4 px-2 md:px-10 py-6 lg:py-0 flex justify-center lg:justify-between items-center w-full">
        <MovileMenu />

        <Link href={"/"} className="w-full lg:w-[165px]">
          <img className="w-[165px] mx-auto" src="/logo.svg" alt="" />
        </Link>

        <div className="block sm:hidden p-4 rounded-full bg-secondary">
          <FaRegMessage className="text-white text-2xl lg:text-4xl" />
        </div>

        <div className="hidden lg:flex h-full  justify-end gap-8 pl-10 relative w-full">
          <>
            {navItem1.map((item, index) => (
              <div
                key={index}
                className="text-white font-extrabold flex h-full py-8"
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleHover(index)}
              >
                <div className={"group"}>
                  <div className="text-base xl:text-lg flex items-center gap-2">
                    {item.title} <IoCaretDownOutline />
                  </div>
                  <div className="h-0.5 bg-primary group-hover:block hidden"></div>
                </div>
                {hoverStates[index] && (
                  <div className="absolute z-50 text-md flex flex-col pt-3 pb-4 px-4 min-w-96 bg-[#161616] top-[78px]">
                    {item.links.map((link, i) => (
                      <div key={i} className="w-full p-1  hover:bg-primary">
                        <Link href={link.url}>{link.name}</Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </>

          <div className="h-full py-8 font-extrabold group">
            <Link
              className="text-base xl:text-lg text-white font-bold"
              href={"/eventos"}
            >
              EVENTOS
            </Link>
            <div className="h-0.5 bg-primary group-hover:block hidden"></div>
          </div>
          <div className="h-full py-8 font-extrabold group">
            <Link
              className="text-base xl:text-lg text-white font-bold"
              href={"/noticias"}
            >
              NOTICIAS
            </Link>
            <div className="h-0.5 bg-primary group-hover:block hidden"></div>
          </div>
          <>
            {navItem3.map((item, index) => (
              <div
                key={index}
                className="text-white font-extrabold flex h-full py-8"
                onMouseEnter={() => handleHover3()}
                onMouseLeave={() => handleHover3()}
              >
                <div className={"group"}>
                  <div className="text-base xl:text-lg flex items-center gap-2">
                    {item.title} <IoCaretDownOutline />
                  </div>
                  <div className="h-0.5 bg-primary group-hover:block hidden"></div>
                </div>
                {hover3 && (
                  <div className="absolute z-50 text-md flex flex-col pt-3 pb-4 px-4 min-w-80 bg-[#161616] top-[78px]">
                    {item.links.map((link, i) => (
                      <div key={i} className="w-full p-1  hover:bg-primary">
                        <Link href={link.url}>{link.name}</Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </>
        </div>
      </div>
      <button className="hidden sm:flex bg-secondary px-8 lg:px-0 lg:w-full lg:max-w-52 text-xl justify-center items-center gap-2 font-bold text-white hover:bg-[#b30c67]">
        <FaRegMessage className="text-white text-2xl lg:text-4xl" />
        <span className="hidden lg:block leading-[0.9] text-left">
          Envia tu <br /> consulta
        </span>
      </button>
    </nav>
  );
};

export default Nav;
