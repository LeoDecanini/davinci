"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import FormSignUp from "@/components/FormSignUp";

const IniciarSesion = () => {
  const [numeroAlumnos, setNumeroAlumnos] = useState<number>(1);
  const [tempNumeroAlumnos, setTempNumeroAlumnos] = useState<number>(1);

  const handleAgregarClick = () => {
    if (tempNumeroAlumnos === 0) {
      console.log("Se tiene que setear un número antes");
    } else {
      setNumeroAlumnos(
        (prevNumeroAlumnos) => prevNumeroAlumnos + tempNumeroAlumnos,
      );
      console.log("Número de alumnos a agregar:", tempNumeroAlumnos);
    }
  };

  const handleResetClick = () => {
    setNumeroAlumnos(1);
    setTempNumeroAlumnos(0);
  };

  return (
    <section className="py-3 sm:block sm:py-0 min-h-[calc(100vh-94px)] mt-[94px] flex justify-center w-full px-4 sm:px-4 xs:px-10 md:px-10 lg:px-14 xl:px-18 2xl:px-20">
      <div className=" h-full w-full flex flex-col lg:flex-row gap-10">
        <div className="h-full w-full py-10">
          <div className={"flex items-center justify-between w-full"}>
            <h1 className="text-4xl w-full pb-8 sm:pb-0 sm:text-6xl text-gray-800 font-bold">
              Registro de usuarios
            </h1>

            <div className={"flex justify-end items-center gap-4 w-full"}>
              <Input
                className={"w-1/2"}
                type="number"
                placeholder="Numero de alumnos a agregar"
                value={tempNumeroAlumnos === 0 ? "" : tempNumeroAlumnos}
                onChange={(e) => setTempNumeroAlumnos(parseInt(e.target.value))}
              />
              <Button
                className="py-6 px-10 hover:bg-[#b30c67] bg-secondary"
                onClick={handleAgregarClick}
              >
                Agregar
              </Button>
              <Button
                className="py-6 px-5 hover:bg-[#b30c67] bg-secondary"
                onClick={handleResetClick}
              >
                Restablecer a 1
              </Button>
            </div>
          </div>
          <FormSignUp
            numeroAlumnos={numeroAlumnos}
            setNumeroAlumnos={setNumeroAlumnos}
          />
        </div>
      </div>
    </section>
  );
};

export default IniciarSesion;
