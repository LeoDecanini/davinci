"use client";
import React, { useState } from "react";
import { FaRegMessage } from "react-icons/fa6";
import { IoCaretDownOutline } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Nav = () => {
  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);

  const handleHover = () => {
    setHover(!hover);
  };
  const handleHover2 = () => {
    setHover2(!hover2);
  };
  const handleHover3 = () => {
    setHover3(!hover3);
  };

  return (
    <nav className="flex w-full h-[94px]">
      <div className="bg-[#161616] min-[375px]:px-4 px-2 md:px-10 py-6 lg:py-0 flex justify-center lg:justify-between items-center w-full">
        <div className="block lg:hidden">
          <Sheet>
            <SheetTrigger>
              <IoIosMenu className="text-white text-5xl lg:text-4xl" />
            </SheetTrigger>
            <SheetContent
              className={
                "bg-[#202020] border-none !w-full overflow-y-auto !text-left"
              }
              side={"left"}
            >
              <SheetHeader>
                <img className={"w-[165px]"} src="/logo.svg" alt="" />
                <div className={"pt-10 w-full"}>
                  <ul className={"text-white"}>
                    <li>
                      <Accordion type="single" collapsible>
                        <AccordionItem className={"border-none"} value="item-1">
                          <AccordionTrigger className={"text-3xl font-bold"}>
                            Carreras
                          </AccordionTrigger>
                          <AccordionContent
                            className={
                              "flex w-full flex-col gap-1 font-bold !text-left"
                            }
                          >
                            <div className="w-full p-1">
                              <Link href="#">DISEÑO MULTIMEDIAL</Link>
                            </div>
                            <div className="w-full p-1">
                              <Link href="#">
                                DISEÑO GRÁFICO ARTÍSTICO DIGITAL
                              </Link>
                            </div>
                            <div className="w-full p-1">
                              <Link href="#">PROGRAMACIÓN DE VIDEOJUEGOS</Link>
                            </div>
                            <div className="w-full p-1">
                              <Link href="#">
                                CINE DE ANIMACIÓN Y POSPRODUCCIÓN
                              </Link>
                            </div>
                            <div className="w-full p-1">
                              <Link href="#">DISEÑO Y PROGRAMACION WEB</Link>
                            </div>
                            <div className="w-full p-1">
                              <Link href="#">ANALISTA DE SISTEMAS</Link>
                            </div>
                            <div className="w-full text-primary p-1 hover:text-white">
                              <Link href="#">
                                PROXIMAMENTE: CINE Y NUEVOS FORMATOS
                              </Link>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </li>
                    <li>
                      <Accordion type="single" collapsible>
                        <AccordionItem className={"border-none"} value="item-1">
                          <AccordionTrigger className={"text-3xl font-bold"}>
                            Cursos
                          </AccordionTrigger>
                          <AccordionContent
                            className={
                              "flex w-full flex-col gap-1 font-bold !text-left"
                            }
                          >
                            <div className="w-full p-1">
                              <Link href="#">CURSOS PRESENCIALESL</Link>
                            </div>
                            <div className="w-full p-1">
                              <Link href="#">CURSOS ONLINE</Link>
                            </div>
                            <div className="w-full p-1">
                              <Link href="#">CHICOS Y ADOLECENTES</Link>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </li>
                    <li className={"py-[16px] !text-left"}>
                      <Link href={""} className={"text-3xl font-bold"}>
                        Eventos
                      </Link>
                    </li>
                    <li className={"py-[16px] !text-left"}>
                      <Link href={""} className={"text-3xl font-bold"}>
                        DV.TV
                      </Link>
                    </li>
                    <li>
                      <Accordion type="single" collapsible>
                        <AccordionItem className={"border-none"} value="item-1">
                          <AccordionTrigger className={"text-3xl font-bold"}>
                            Escuela
                          </AccordionTrigger>
                          <AccordionContent
                            className={
                              "flex w-full flex-col gap-1 font-bold !text-left"
                            }
                          >
                            <div className="w-full p-1">
                              <Link href="#">INSTALACIONES</Link>
                            </div>
                            <div className="w-full p-1">
                              <Link href="#">INSERCIÓN LABORAL</Link>
                            </div>
                            <div className="w-full p-1">
                              <Link href="#">TITULOS Y LICENCIATURAS</Link>
                            </div>
                            <div className="w-full p-1">
                              <Link href="#">QUE ES DA VINCI</Link>
                            </div>
                            <div className="w-full p-1">
                              <Link href="#">FUTUROS ALUMNOS</Link>
                            </div>
                            <div className="w-full p-1">
                              <Link href="#">DV.TV</Link>
                            </div>
                            <div className="w-full p-1">
                              <Link href="#">INTRANET</Link>
                            </div>
                            <div className="w-full p-1">
                              <Link href="#">CAMPUS A DISTANCIA</Link>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </li>
                  </ul>
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>

        <Link href={"/"} className="w-full lg:w-[165px]">
          <img className="w-[165px] mx-auto" src="/logo.svg" alt="" />
        </Link>

        <div className="block sm:hidden p-4 rounded-full bg-secondary">
          <FaRegMessage className="text-white text-2xl lg:text-4xl" />
        </div>

        <div className="hidden lg:flex h-full  justify-end gap-8 pl-10 relative w-full">
          <div
            className="text-white font-extrabold flex h-full py-8"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
          >
            <div className={"group"}>
              <Link
                className="text-base xl:text-lg flex items-center gap-2"
                href={"/"}
              >
                CARRERAS <IoCaretDownOutline />
              </Link>
              <div className="h-0.5 bg-primary group-hover:block hidden"></div>
            </div>
            {hover && (
              <div className="absolute z-50 text-md flex flex-col pt-3 pb-4 px-4 min-w-96 bg-[#161616] top-[78px]">
                <div className="w-full p-1  hover:bg-primary">
                  <Link href="#">DISEÑO MULTIMEDIAL</Link>
                </div>
                <div className="w-full p-1  hover:bg-primary">
                  <Link href="#">DISEÑO GRÁFICO ARTÍSTICO DIGITAL</Link>
                </div>
                <div className="w-full p-1  hover:bg-primary">
                  <Link href="#">PROGRAMACIÓN DE VIDEOJUEGOS</Link>
                </div>
                <div className="w-full p-1  hover:bg-primary">
                  <Link href="#">CINE DE ANIMACIÓN Y POSPRODUCCIÓN</Link>
                </div>
                <div className="w-full p-1  hover:bg-primary">
                  <Link href="#">DISEÑO Y PROGRAMACION WEB</Link>
                </div>
                <div className="w-full p-1  hover:bg-primary">
                  <Link href="#">ANALISTA DE SISTEMAS</Link>
                </div>
                <div className="w-full text-primary p-1 hover:text-white hover:bg-primary">
                  <Link href="#">PROXIMAMENTE: CINE Y NUEVOS FORMATOS</Link>
                </div>
              </div>
            )}
          </div>
          <div
            className="text-white font-extrabold flex h-full py-8"
            onMouseEnter={handleHover2}
            onMouseLeave={handleHover2}
          >
            <div className={"group"}>
              <Link
                className="text-base xl:text-lg flex items-center gap-2"
                href={"/"}
              >
                CURSOS <IoCaretDownOutline />
              </Link>
              <div className="h-0.5 bg-primary group-hover:block hidden"></div>
            </div>
            {hover2 && (
              <div className="absolute z-50 text-md flex flex-col pt-3 pb-4 px-4 min-w-96 bg-[#161616] top-[78px]">
                <div className="w-full p-1  hover:bg-primary">
                  <Link href="#">CURSOS PRESENCIALESL</Link>
                </div>
                <div className="w-full p-1  hover:bg-primary">
                  <Link href="#">CURSOS ONLINE</Link>
                </div>
                <div className="w-full p-1  hover:bg-primary">
                  <Link href="#">CHICOS Y ADOLECENTES</Link>
                </div>
              </div>
            )}
          </div>
          <div className="h-full py-8 font-extrabold group">
            <Link
              className="text-base xl:text-lg text-white font-bold"
              href={"/"}
            >
              EVENTOS
            </Link>
            <div className="h-0.5 bg-primary group-hover:block hidden"></div>
          </div>
          <div className="h-full py-8 font-extrabold group">
            <Link
              className="text-base xl:text-lg text-white font-bold"
              href={"/"}
            >
              NOTICIAS
            </Link>
            <div className="h-0.5 bg-primary group-hover:block hidden"></div>
          </div>
          <div
            className="text-white font-extrabold flex h-full py-8"
            onMouseEnter={handleHover3}
            onMouseLeave={handleHover3}
          >
            <div className={"group"}>
              <Link
                className="text-base xl:text-lg flex items-center gap-2"
                href={"/"}
              >
                ESCUELA <IoCaretDownOutline />
              </Link>
              <div className="h-0.5 bg-primary group-hover:block hidden"></div>
            </div>
            {hover3 && (
              <div className="absolute z-50 text-md flex flex-col pt-3 pb-4 px-4 min-w-72 bg-[#161616] top-[78px]">
                <div className="w-full p-1  hover:bg-primary">
                  <Link href="#">INSTALACIONES</Link>
                </div>
                <div className="w-full p-1  hover:bg-primary">
                  <Link href="#">INSERCIÓN LABORAL</Link>
                </div>
                <div className="w-full p-1  hover:bg-primary">
                  <Link href="#">TITULOS Y LICENCIATURAS</Link>
                </div>
                <div className="w-full p-1  hover:bg-primary">
                  <Link href="#">QUE ES DA VINCI</Link>
                </div>
                <div className="w-full p-1  hover:bg-primary">
                  <Link href="#">FUTUROS ALUMNOS</Link>
                </div>
                <div className="w-full p-1  hover:bg-primary">
                  <Link href="#">DV.TV</Link>
                </div>
                <div className="w-full p-1  hover:bg-primary">
                  <Link href="#">INTRANET</Link>
                </div>
                <div className="w-full p-1  hover:bg-primary">
                  <Link href="#">CAMPUS A DISTANCIA</Link>
                </div>
              </div>
            )}
          </div>
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
