import React from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import Link from "next/link";
import BannerMateria from "@/components/dashboard/academico/materia/BannerMateria";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const ListaPersonas = ({ personas }: any) => {
  const currentTime = Date.now();
  return (
    <div>
      <div className={"pt-10"}>
        <BannerMateria />
      </div>
      <div className={`pt-10  max-w-5xl mx-auto`}>
        <div className={`w-full`}>
          <div className={`py-5`}>
            <h3 className={"text-3xl font-semibold"}>Profesores</h3>
            <div className={"h-1 w-28 bg-[#FF5733] mb-5"}></div>
            <div className={"flex flex-col gap-5"}>
              <div
                  className={
                    "shadow p-3 hover:shadow-2xl hover:transition-shadow hover:duration-300 cursor-pointer rounded-md flex items-center gap-2"
                  }
              >
                <Avatar className={"w-12 h-12"}>
                  <AvatarImage/>
                  <AvatarFallback
                      className={"text-white font-bold bg-[#FF5733] text-xl"}
                  >
                    L
                  </AvatarFallback>
                </Avatar>
                <div className={"flex gap-4 item center w-full"}>
                  <h3 className={"text-xl font-semibold w-full"}>
                    leonardo@gmail.com
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className={`py-5`}>
            <h3 className={"text-3xl font-semibold"}>Alumnos</h3>
            <div className={"h-1 w-28 bg-[#FF5733] mb-5"}></div>
            <div className={"flex flex-col gap-5"}>
              <div
                  className={
                    "shadow p-3 hover:shadow-2xl hover:transition-shadow hover:duration-300 cursor-pointer rounded-md flex items-center gap-2"
                  }
              >
                <Avatar className={"w-12 h-12"}>
                  <AvatarImage/>
                  <AvatarFallback
                      className={"text-white font-bold bg-[#FF5733] text-xl"}
                  >
                    L
                  </AvatarFallback>
                </Avatar>
                <div className={"flex gap-4 item center w-full"}>
                  <h3 className={"text-xl font-semibold w-full"}>
                    leonardo@gmail.com
                  </h3>
                </div>
              </div>
              <div
                  className={
                    "shadow p-3 hover:shadow-2xl hover:transition-shadow hover:duration-300 cursor-pointer rounded-md flex items-center gap-2"
                  }
              >
                <Avatar className={"w-12 h-12"}>
                  <AvatarImage/>
                  <AvatarFallback
                      className={"text-white font-bold bg-[#FF5733] text-xl"}
                  >
                    L
                  </AvatarFallback>
                </Avatar>
                <div className={"flex gap-4 item center w-full"}>
                  <h3 className={"text-xl font-semibold w-full"}>
                    maxi@gmail.com
                  </h3>
                </div>
              </div>
              <div
                  className={
                    "shadow p-3 hover:shadow-2xl hover:transition-shadow hover:duration-300 cursor-pointer rounded-md flex items-center gap-2"
                  }
              >
                <Avatar className={"w-12 h-12"}>
                  <AvatarImage/>
                  <AvatarFallback
                      className={"text-white font-bold bg-[#FF5733] text-xl"}
                  >
                    L
                  </AvatarFallback>
                </Avatar>
                <div className={"flex gap-4 item center w-full"}>
                  <h3 className={"text-xl font-semibold w-full"}>
                    juli@gmail.com
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListaPersonas;
