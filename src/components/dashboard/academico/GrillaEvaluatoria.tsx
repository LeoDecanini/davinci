"use client";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button, buttonVariants } from "@/components/ui/button";
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
import { Input } from "@/components/ui/input";
import { useUser } from "@/context/UserContext";

const GrillaEvaluatoria = () => {
  const { user } = useUser();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);
  const [tablaData, setTablaData] = useState([
    { nombre: "Juan", tp1: "", tp2: "", tp3: "", final: "" },
  ]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tablaData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const [value, setValue] = useState({
    tp1: "",
    tp2: "",
    tp3: "",
    final: "",
  });

  const checkValue = (e: any, ubication: any) => {
    if (e <= 10 && e >= 1) {
      setValue((prev) => ({
        ...prev,
        [ubication]: e,
      }));
    } else {
      if (e > 10) {
        setValue((prev) => ({
          ...prev,
          [ubication]: 10,
        }));
      } else {
        setValue((prev) => ({
          ...prev,
          [ubication]: "",
        }));
      }
    }
  };

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
            <div className={"w-full flex flex-col justify-between"}>
              <div className="w-full">
                <div className={"w-full h-full"}>
                  <div className={"w-full bg-gray-50 p-2 pr-[23px]"}>
                    <div className={"w-full flex gap-3 justify-between px-2"}>
                      <span className="text-left w-full">Nombre</span>
                      <span className="text-left w-full">
                        Trabajo Práctico 1
                      </span>
                      <span className="text-left w-full">
                        Trabajo Práctico 2
                      </span>
                      <span className="text-left w-full">
                        Trabajo Práctico 3
                      </span>
                      <span className="text-left w-full">Final</span>
                      <span className="text-left w-full">Acciones</span>
                    </div>
                  </div>
                  <div
                    className={"overflow-y-scroll h-[calc(100svh-260px)] p-0"}
                  >
                    {currentItems.map((item, index) => (
                      <div
                        key={index}
                        className="w-full flex gap-3 justify-between px-4 border-b border-t"
                      >
                        <span className="text-left flex items-center w-full border-r pr-3 py-3">
                          {item.nombre}
                        </span>
                        <span className="text-left flex items-center w-full border-r pr-3 py-3">
                          {item.tp1 !== "" ? (
                            item.tp1
                          ) : (
                            <Input
                              type="number"
                              value={value.tp1}
                              placeholder={"Agregar la nota"}
                              onChange={(e) => {
                                checkValue(e.target.value, "tp1");
                              }}
                            />
                          )}
                        </span>
                        <span className="text-left flex items-center w-full border-r pr-3 py-3">
                          {item.tp2 !== "" ? (
                            item.tp2
                          ) : (
                            <Input
                              type="number"
                              value={value.tp2}
                              placeholder={"Agregar la nota"}
                              onChange={(e) => {
                                checkValue(e.target.value, "tp2");
                              }}
                            />
                          )}
                        </span>
                        <span className="text-left flex items-center w-full border-r pr-3 py-3">
                          {item.tp3 !== "" ? (
                            item.tp3
                          ) : (
                            <Input
                              type="number"
                              value={value.tp3}
                              placeholder={"Agregar la nota"}
                              onChange={(e) => {
                                checkValue(e.target.value, "tp3");
                              }}
                            />
                          )}
                        </span>
                        <span className="text-left flex items-center w-full border-r pr-3 py-3">
                          {item.final !== "" ? (
                            item.final
                          ) : (
                            <Input
                              type="number"
                              value={value.final}
                              placeholder={"Agregar la nota"}
                              onChange={(e) => {
                                checkValue(e.target.value, "final");
                              }}
                            />
                          )}
                        </span>
                        <span className="text-left flex justify-between gap-3 items-center w-full">
                          {user && user.role === "profesor" ? (
                            <Dialog>
                              <DialogTrigger
                                className={`${buttonVariants({ variant: "default" })} !bg-blue-700 w-full hover:!bg-blue-800`}
                              >
                                Editar
                              </DialogTrigger>
                              <DialogContent
                                className={"w-full max-w-2xl min-h-20"}
                              >
                                <h2 className={"text-xl font-bold"}>
                                  Aviso importante
                                </h2>
                                <p>
                                  Para poder editar una nota tendrás que hablar
                                  con un directivo y que te otorgue el permiso,
                                  de otra forma no podrás editar esta nota.
                                </p>
                              </DialogContent>
                            </Dialog>
                          ) : (
                            user &&
                            (user.role === "secretario" ||
                              user.role === "administrador") && (
                              <Button
                                className={
                                  "bg-blue-700 w-full hover:bg-blue-800"
                                }
                                variant={"secondary"}
                              >
                                Editar
                              </Button>
                            )
                          )}
                          <Button
                            className={"bg-green-700 w-full hover:bg-green-800"}
                            variant={"secondary"}
                          >
                            Guardar
                          </Button>
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
                  página <span className={"font-semibold"}>{currentPage}</span>{" "}
                  de
                  <span className={"font-semibold pl-1"}>
                    {Math.ceil(tablaData.length / itemsPerPage)}
                  </span>
                </p>
                <div>
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious
                          onClick={() => paginate(currentPage - 1)}
                        />
                      </PaginationItem>
                      {Array.from({
                        length: Math.ceil(tablaData.length / itemsPerPage),
                      }).map((_, index) => (
                        <PaginationItem key={index}>
                          <PaginationLink onClick={() => paginate(index + 1)}>
                            {index + 1}
                          </PaginationLink>
                        </PaginationItem>
                      ))}
                      <PaginationItem>
                        <PaginationNext
                          onClick={() => paginate(currentPage + 1)}
                        />
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
