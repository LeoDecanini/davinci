import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoIosMenu } from "react-icons/io";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const MovileMenu = () => {
  return (
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
                          <Link href="#">DISEÑO GRÁFICO ARTÍSTICO DIGITAL</Link>
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
  );
};

export default MovileMenu;
