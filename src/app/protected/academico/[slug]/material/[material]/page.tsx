import React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";
import { Badge } from "@/components/ui/badge";
import {
  FaRegFilePdf,
  FaRegFileWord,
  FaRegFileZipper,
  FaRegFile,
} from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";

const Page = () => {
  const trabajo = {
    title: "Trabajo clase 2",
    date: "20 oct 2023, 23:59",
    link: "/protected/academico/ilustracion-grafica/trabajo-clase-2",
  };

  return (
    <section
      className={
        "w-full h-full min-h-[calc(100svh-60px)] mt-[60px] flex justify-center"
      }
    >
      <div className="max-w-7xl w-full flex items-center flex-col">
        <div className={"py-8 w-full"}>
          <Link
            href={`/protected/academico/ilustracion-grafica`}
            className={`${buttonVariants({ variant: "secondary" })} flex items-center gap-2`}
          >
            <IoMdArrowRoundBack className={"text-xl"} /> <span>Volver</span>
          </Link>
        </div>
        <div className={""}>
          <div className={"max-w-5xl"}>
            <div className={"w-full shadow p-5 rounded-md"}>
              <div className={"flex items-center justify-between"}>
                <div>
                  <h1 className={"text-xl font-semibold"}>Clase 1</h1>
                  <div className={"w-20 h-1 bg-[#FF5733]"}></div>
                </div>
                <Badge variant={"outline"}>Material de clase</Badge>
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
                  <span className={"max-w-32 truncate"}>texto de ilustracion aaaaaaaaaa</span>
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
                  <span className={"max-w-32 truncate"}>Teorida del diseño grafico</span>
                </Button>
              </div>
            </div>
            <div className={"mt-5 "}>
              <div className={"w-full gap-5 mt-5 p-5 col-span-1 rounded-md"}>
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
        </div>
      </div>
    </section>
  );
};

export default Page;
