import React from "react";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa6";
import Link from "next/link";
import FormSignIp from "@/components/FormSignIp";

const IniciarSesion = () => {
  return (
      <section className="flex justify-center items-center h-[calc(100svh-94px)] mt-[94px]">
        <div className="w-full max-w-screen-xl flex flex-col lg:flex-row gap-10">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl pb-8 sm:pb-0 sm:text-6xl text-gray-800 font-bold">
              Iniciar Sesión
            </h1>
            <p className="text-md sm:max-w-[90%] font-medium text-gray-700 sm:text-lg pt-4">
              Bienvenidos alumnos, inicien sesión para poder empezar a estudiar.
            </p>
            <div className="flex pt-8 items-center gap-5">
              <h2 className="text-secondary font-bold text-2xl">
                Iniciar Sesión con
              </h2>
              <div className="border border-secondary w-20"></div>
            </div>

            <FormSignIp />
          </div>
          <div className="hidden lg:flex justify-center items-center">
            <img src="/iniciosesion.png" alt="" />
          </div>
        </div>
      </section>
  );
};

export default IniciarSesion;
