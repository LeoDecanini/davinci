"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUser } from "@/context/UserContext";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Page = () => {
  const { user } = useUser();
  const [edit, setEdit] = useState(false);

  const itemsTable = [
    "Nombre",
    "Tp1",
    "Tp2",
    "Tp3",
    "Final",
    "Promedio",
    "Estado",
  ];
  const itemsTable2 = [
    {
      nombe: "Ilustracion grafica",
      trabajo1: "No corregido",
      trabajo2: "No corregido",
      trabajo3: "No corregido",
      final: "No corregido",
      promedio: "No promediado",
      estado: "Cursando",
    },
    {
      nombe: "Tratamiento digital de la imagen",
      trabajo1: "No corregido",
      trabajo2: "No corregido",
      trabajo3: "No corregido",
      final: "No corregido",
      promedio: "No promediado",
      estado: "Cursando",
    },
    {
      nombe: "Logica de programacion",
      trabajo1: "No corregido",
      trabajo2: "No corregido",
      trabajo3: "No corregido",
      final: "No corregido",
      promedio: "No promediado",
      estado: "Cursando",
    },
  ];

  return (
    <section
      className={
        "w-full h-full min-h-[calc(100svh-60px)] mt-[60px] flex justify-center"
      }
    >
      <div className="max-w-7xl w-full flex justify-center items-center flex-col">
        <h1 className="font-bold text-xl sm:text-3xl md:text-4xl underline decoration-secondary underline-offset-8">
          Bienvenidos al Perfil
        </h1>
        <div className="w-full py-10 grid grid-cols-3 gap-5">
          <div className={"col-span-1 shadow rounded-md p-5"}>
            <h2 className={"text-2xl font-semibold"}>Total a pagar</h2>
            <p className={"pt-2"}>No se registra ninguna deuda a pagar.</p>
          </div>
          <div className={"col-span-2 shadow rounded-md p-5"}>
            <div className={"w-full flex items-center justify-between"}>
              <h1 className={"text-2xl font-semibold"}>Datos personales</h1>
              {/*{edit === false && (
                <Button onClick={() => setEdit(true)} variant={"secondary"}>
                  Editar
                </Button>
              )}
              {edit === true && (
                <div className={"flex gap-2"}>
                  <Button
                    onClick={() => setEdit(false)}
                    variant={"destructive"}
                  >
                    Cancelar
                  </Button>
                  <Button variant={"secondary"}>Guardar</Button>
                </div>
              )}*/}
            </div>
            <div className={"pt-5 grid grid-cols-2 gap-5"}>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                {/*{edit === true ? (
                  <>
                    <Label htmlFor="name">Nombre</Label>
                    <Input
                      className={"font-semibold"}
                      defaultValue={user?.name}
                      id="name"
                      type="text"
                      placeholder={"nombre"}
                    />
                  </>
                ) : (
                  <>
                    <Label htmlFor="name">Nombre</Label>
                    <p className={"capitalize font-semibold text-gray-700"}>
                      {user?.name}
                    </p>
                  </>
                )}*/}
                <Label htmlFor="name">Nombre</Label>
                <p className={"capitalize font-semibold text-gray-700"}>
                  {user?.name}
                </p>
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="name">Apellido</Label>
                <p className={"capitalize font-semibold text-gray-700"}>
                  {user?.lastname}
                </p>
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="name">Correo</Label>
                <p className={"capitalize font-semibold text-gray-700"}>
                  {user?.email}
                </p>
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="name">DNI</Label>
                <p className={"capitalize font-semibold text-gray-700"}>
                  {user?.dni}
                </p>
              </div>
            </div>
          </div>
          <div
              className={"col-span-3 shadow rounded-md p-5 h-full"}
          >
            <div>
              <div className={"pb-5 flex justify-end gap-5"}>
                <Select>
                  <SelectTrigger className="w-auto min-w-[230px]">
                    <SelectValue placeholder="Carrera"/>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="primer">Diseño Grafico</SelectItem>
                    <SelectItem value="segundo">Diseño multimedial</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-auto min-w-[230px]">
                    <SelectValue placeholder="Cuatrimestres"/>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="primer">Primer Cuatrimestre</SelectItem>
                    <SelectItem value="segundo">
                      Segundo Cuatrimestre
                    </SelectItem>
                    <SelectItem value="tercero">
                      Tercero Cuatrimestre
                    </SelectItem>
                    <SelectItem value="cuarto">Cuarto Cuatrimestre</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className={"w-full h-full border rounded-lg"}>
                <div className={"bg-slate-100 grid grid-cols-7"}>
                  {itemsTable.map((item, i) => (
                      <span
                          key={i}
                          className={
                            "border-r border-b p-3 w-full text-center font-semibold"
                          }
                      >
                      {item}
                    </span>
                  ))}
                </div>
                <div className={"grid grid-cols-7"}>
                  {itemsTable2.map((item, i) => (
                      <React.Fragment key={i}>
                      <span
                          className={
                            "border-r border-b p-3 w-full text-left truncate"
                          }
                      >
                        {item.nombe}
                      </span>
                        <span
                            className={
                              "border-r border-b p-3 w-full text-center truncate"
                            }
                        >
                        {item.trabajo1}
                      </span>
                        <span
                            className={
                              "border-r border-b p-3 w-full text-center truncate"
                            }
                        >
                        {item.trabajo2}
                      </span>
                        <span
                            className={
                              "border-r border-b p-3 w-full text-center truncate"
                            }
                        >
                        {item.trabajo3}
                      </span>
                        <span
                            className={
                              "border-r border-b p-3 w-full text-center truncate"
                            }
                        >
                        {item.final}
                      </span>
                        <span
                            className={
                              "border-r border-b p-3 w-full text-center truncate"
                            }
                        >
                        {item.promedio}
                      </span>
                        <span
                            className={
                              "border-r border-b p-3 w-full text-center truncate"
                            }
                        >
                        {item.estado}
                      </span>
                      </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
