"use client";
import React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Badge } from "@/components/ui/badge";
import {
  FaRegFilePdf,
  FaRegFileWord,
  FaRegFileZipper,
  FaRegFile,
} from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { useUser } from "@/context/UserContext";
import UserView from "@/components/dashboard/trabajos/UserView";
import TeacherView from "@/components/dashboard/trabajos/TeacherView";

const Page = () => {
  const { user } = useUser();
  return (
    <section
      className={
        "w-full h-full min-h-[calc(100svh-60px)] mt-[60px] flex justify-center"
      }
    >
      <div className="max-w-7xl w-full flex items-center flex-col">
        <div className={"py-8 w-full flex items-center justify-between"}>
          <Link
            href={`/protected/academico/ilustracion-grafica`}
            className={`${buttonVariants({ variant: "secondary" })} flex items-center gap-2`}
          >
            <IoMdArrowRoundBack className={"text-xl"} /> <span>Volver</span>
          </Link>
        </div>
        <div className={"grid grid-cols-4 gap-5"}>
          <div className={"col-span-3"}>
            <div className={"w-full shadow p-5 rounded-md"}>
              <div className={"flex items-center justify-between"}>
                <div>
                  <h1 className={"text-xl font-semibold"}>Trabajo clase 2</h1>
                  <div className={"w-20 h-1 bg-[#FF5733]"}></div>
                </div>
                <Badge variant={"outline"}>Tarea no calificada</Badge>
              </div>
              <div className={"mt-5 bg-slate-100"}>
                <p className={"text-sm text-gray-600 p-2 font-medium"}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquid aspernatur corporis deleniti necessitatibus,
                  praesentium quas recusandae. Autem commodi delectus eos ipsa
                  natus quo similique voluptate. Eum eveniet harum ipsum
                  perspiciatis.
                </p>
              </div>
              <div className={"mt-5 w-full flex gap-5"}>
                <Button
                  variant={"outline"}
                  className={
                    "px-3 py-2 border rounded-md flex items-center gap-2"
                  }
                >
                  <FaRegFilePdf className={"text-xl"} />
                  <span className={"max-w-32 truncate"}>material 1</span>
                </Button>
                <Button
                  variant={"outline"}
                  className={
                    "px-3 py-2 border rounded-md flex items-center gap-2"
                  }
                >
                  <FaRegFileWord className={"text-xl"} />
                  <span className={"max-w-32 truncate"}>
                    texto de ilustracion
                  </span>
                </Button>
                <Button
                  variant={"outline"}
                  className={
                    "px-3 py-2 border rounded-md flex items-center gap-2"
                  }
                >
                  <FaRegFileZipper className={"text-xl"} />
                  <span className={"max-w-32 truncate"}>Teoria del color</span>
                </Button>
                <Button
                  variant={"outline"}
                  className={
                    "px-3 py-2 border rounded-md flex items-center gap-2"
                  }
                >
                  <FaRegFile className={"text-xl"} />
                  <span className={"max-w-32 truncate"}>
                    Teorida del diseño grafico
                  </span>
                </Button>
              </div>
            </div>
            <div className={"mt-5 "}>
              <div
                className={
                  "w-full flex justify-between items-center gap-5 mt-5 p-5 col-span-1 rounded-md"
                }
              >
                <div className={"flex items-center gap-2"}>
                  <FaRegUser className={"text-xl"} />
                  <h2 className={"text-lg font-semibold"}>
                    Mensajes De la clase
                  </h2>
                </div>
                <Button
                  variant={"outline"}
                  className={
                    "px-3 py-2 mt-2 border rounded-md flex items-center gap-2"
                  }
                >
                  Enviar un comentario a la clase
                </Button>
              </div>
            </div>
          </div>
          <div className={"w-full col-span-1"}>
            {user && user.role === "alumno" && <UserView />}
            {user && user.role === "profesor" && <TeacherView />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
