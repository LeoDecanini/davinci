import React, { useState } from "react";
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
import { Button } from "@/components/ui/button";

const MovileMenu = () => {
  const [open, setOpen] = useState(false);
  const toggleSheet = () => {
    setOpen(!open);
  };
  return (
    <div className="block lg:hidden">
      <div className={"w-full"}>
        <Button onClick={toggleSheet} className={"bg-transparent hover:bg-transparent p-0 pt-5"}>
          <IoIosMenu className="text-white text-5xl lg:text-4xl" />
        </Button>

        {open && (
          <div
            className={"bg-[#202020] w-full border-none overflow-y-auto !text-left"}
          >
            <div>
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
                            <Link href="/carreras/diseno-multimedial">
                              DISEÑO MULTIMEDIAL
                            </Link>
                          </div>
                          <div className="w-full p-1">
                            <Link href="/carreras/diseno-grafico">
                              DISEÑO GRÁFICO ARTÍSTICO DIGITAL
                            </Link>
                          </div>
                          <div className="w-full p-1">
                            <Link href="/carreras/programacion-de-videojuegos">
                              PROGRAMACIÓN DE VIDEOJUEGOS
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
                            <Link href="/cursos/cursos-presenciales">
                              CURSOS PRESENCIALESL
                            </Link>
                          </div>
                          <div className="w-full p-1">
                            <Link href="/cursos/cursos-online">
                              CURSOS ONLINE
                            </Link>
                          </div>
                          <div className="w-full p-1">
                            <Link href="/cursos/chicos-y-adolecentes">
                              CHICOS Y ADOLECENTES
                            </Link>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </li>
                  <li className={"py-[16px] !text-left"}>
                    <Link href={"/eventos"} className={"text-3xl font-bold"}>
                      Eventos
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
                            <Link href="/signin">INTRANET</Link>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovileMenu;
