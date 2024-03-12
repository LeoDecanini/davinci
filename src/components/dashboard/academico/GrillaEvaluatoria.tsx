import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { buttonVariants } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const GrillaEvaluatoria = () => {
  const tablaData = [
    { nombre: "Juan", tp1: 8, tp2: 7, tp3: 9, final: "Aprobado" },
    { nombre: "Juan", tp1: 8, tp2: 7, tp3: 9, final: "Aprobado" },
    { nombre: "Juan", tp1: 8, tp2: 7, tp3: 9, final: "Aprobado" },
    { nombre: "Juan", tp1: 8, tp2: 7, tp3: 9, final: "Aprobado" },
    { nombre: "Juan", tp1: 8, tp2: 7, tp3: 9, final: "Aprobado" },
    { nombre: "Juan", tp1: 8, tp2: 7, tp3: 9, final: "Aprobado" },
    { nombre: "Juan", tp1: 8, tp2: 7, tp3: 9, final: "Aprobado" },
    { nombre: "Juan", tp1: 8, tp2: 7, tp3: 9, final: "Aprobado" },
    { nombre: "Juan", tp1: 8, tp2: 7, tp3: 9, final: "Aprobado" },
    { nombre: "Juan", tp1: 8, tp2: 7, tp3: 9, final: "Aprobado" },
    { nombre: "Juan", tp1: 8, tp2: 7, tp3: 9, final: "Aprobado" },
    { nombre: "Juan", tp1: 8, tp2: 7, tp3: 9, final: "Aprobado" },
    { nombre: "Juan", tp1: 8, tp2: 7, tp3: 9, final: "Aprobado" },
    { nombre: "Juan", tp1: 8, tp2: 7, tp3: 9, final: "Aprobado" },
    { nombre: "Juan", tp1: 8, tp2: 7, tp3: 9, final: "Aprobado" },
    { nombre: "Juan", tp1: 8, tp2: 7, tp3: 9, final: "Aprobado" },
    { nombre: "Juan", tp1: 8, tp2: 7, tp3: 9, final: "Aprobado" },
    { nombre: "Juan", tp1: 8, tp2: 7, tp3: 9, final: "Aprobado" },
    { nombre: "Juan", tp1: 8, tp2: 7, tp3: 9, final: "Aprobado" },
    { nombre: "Juan", tp1: 8, tp2: 7, tp3: 9, final: "Aprobado" },
    { nombre: "Juan", tp1: 8, tp2: 7, tp3: 9, final: "Aprobado" },
    { nombre: "Juan", tp1: 8, tp2: 7, tp3: 9, final: "Aprobado" },
    { nombre: "Juan", tp1: 8, tp2: 7, tp3: 9, final: "Aprobado" },
    { nombre: "Juan", tp1: 8, tp2: 7, tp3: 9, final: "Aprobado" },
    { nombre: "Juan", tp1: 8, tp2: 7, tp3: 9, final: "Aprobado" },
    { nombre: "Juan", tp1: 8, tp2: 7, tp3: 9, final: "Aprobado" },
    { nombre: "Juan", tp1: 8, tp2: 7, tp3: 9, final: "Aprobado" },
    { nombre: "Juan", tp1: 8, tp2: 7, tp3: 9, final: "Aprobado" },
    { nombre: "Juan", tp1: 8, tp2: 7, tp3: 9, final: "Aprobado" },
    { nombre: "Juan", tp1: 8, tp2: 7, tp3: 9, final: "Aprobado" },
    { nombre: "Juan", tp1: 8, tp2: 7, tp3: 9, final: "Aprobado" },
    { nombre: "Juan", tp1: 8, tp2: 7, tp3: 9, final: "Aprobado" },
    { nombre: "Juan", tp1: 8, tp2: 7, tp3: 9, final: "Aprobado" },
    { nombre: "Juan", tp1: 8, tp2: 7, tp3: 9, final: "Aprobado" },
    { nombre: "Juan", tp1: 8, tp2: 7, tp3: 9, final: "Aprobado" },
    { nombre: "Juan", tp1: 8, tp2: 7, tp3: 9, final: "Aprobado" },
    { nombre: "Juan", tp1: 8, tp2: 7, tp3: 9, final: "Aprobado" },
    { nombre: "Juan", tp1: 8, tp2: 7, tp3: 9, final: "Aprobado" },

  ];
  return (
    <Dialog>
      <DialogTrigger className={`${buttonVariants({ variant: "secondary" })}`}>
        Grilla evaluatoria
      </DialogTrigger>
      <DialogContent className={"w-[95%] h-[95%]"}>
        <section className={"w-full h-full p-2"}>
          <div className={" border h-full rounded-md"}>
            <div
              className={
                "flex w-full justify-between items-center p-2 border-b"
              }
            >
              <div className="w-full md:w-1/3">
                <form className="flex items-center">
                  <label htmlFor="simple-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="simple-search"
                      className="border text-sm rounded-lg block w-full pl-10 p-2"
                      placeholder="Search"
                    />
                  </div>
                </form>
              </div>
              <div className={"flex items-center gap-3"}>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filtros" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Aprobados</SelectItem>
                    <SelectItem value="dark">Desaprobados</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Orden" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Orden alfabetico</SelectItem>
                    <SelectItem value="dark">Promedio</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div
              className={
                "w-full flex flex-col justify-between"
              }
            >
              <div className="w-full">
                <div className={"w-full h-full"}>
                  <div className={"w-full bg-gray-50 p-2 pr-[23px]"}>
                    <div className={"w-full flex gap-3 justify-between px-2"}>
                      <span className="text-left w-full border-r">Nombre</span>
                      <span className="text-left w-full border-r">
                        Trabajo Práctico 1
                      </span>
                      <span className="text-left w-full border-r">
                        Trabajo Práctico 2
                      </span>
                      <span className="text-left w-full border-r">
                        Trabajo Práctico 3
                      </span>
                      <span className="text-left w-full border-r">Final</span>
                      <span className="text-left w-full">
                        Acciones
                      </span>
                    </div>
                  </div>
                  <div className={"overflow-y-scroll h-[calc(100svh-260px)] p-0"}>
                    {tablaData.map((item, index) => (
                      <div
                        key={index}
                        className="w-full flex gap-3 justify-between px-4 border-b border-t"
                      >
                        <span className="text-left w-full py-4 border-r">
                          {item.nombre}
                        </span>
                        <span className="text-left w-full py-4 border-r">
                          {item.tp1}
                        </span>
                        <span className="text-left w-full py-4 border-r">
                          {item.tp2}
                        </span>
                        <span className="text-left w-full py-4 border-r">
                          {item.tp3}
                        </span>
                        <span className="text-left w-full py-4 border-r">
                          {item.final}
                        </span>
                        <span className="text-left w-full py-4">
                          Editar / Borrar
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div
                className={
                  "min-h-14 border-t flex items-center justify-between px-4"
                }
              >
                <p>
                  pagina <span className={"font-semibold"}>1</span> de
                  <span className={"font-semibold pl-1"}>100</span>
                </p>
                <div>
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious href="#" />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">2</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationNext href="#" />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              </div>
            </div>
          </div>
        </section>
      </DialogContent>
    </Dialog>
  );
};
export default GrillaEvaluatoria;
