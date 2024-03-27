"use client";
import React, { useEffect } from "react";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import FormSignIp from "@/components/FormSignIp";

const IniciarSesion = () => {
  const { user } = useUser();
  const route = useRouter();

  useEffect(() => {
    if (user) {
      route.push("/protected");
    }
  }, [user, route]);

  return (
      <section className="flex justify-center items-center min-h-[calc(100vh-94px)] mt-[94px]">
        <div className="w-full max-w-screen-xl flex flex-col lg:flex-row gap-10 px-2 sm:px-5 py-10">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl pb-8 sm:pb-0 sm:text-6xl text-gray-800 font-bold">
              Iniciar Sesión
            </h1>
            <p className="text-md sm:max-w-[90%] font-medium text-gray-700 sm:text-lg pt-4">
              Bienvenidos alumnos, inicien sesión para poder empezar a estudiar.
            </p>
            <div className="flex pt-8 items-center gap-5">
              <div className="border border-secondary w-full"></div>
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