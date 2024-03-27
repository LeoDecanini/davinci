"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoIosMenu } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { FaBookBookmark } from "react-icons/fa6";
import { RiContactsBook2Fill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { useUser } from "@/context/UserContext";

const Nav = () => {
  const { user } = useUser();
  return (
    <div
      className={
        "p-3 shadow flex items-center justify-between fixed top-0 left-0 right-0 bg-white z-50"
      }
    >
      <div className={"w-full"}>
        <Sheet>
          <SheetTrigger className={"flex justify-start"}>
            <IoIosMenu className="text-4xl" />
          </SheetTrigger>
          <SheetContent
            className={
              "bg-[#202020] border-none !w-full overflow-y-auto !text-left"
            }
            side={"left"}
          >
            <SheetHeader>
              <img className={"w-[165px]"} src="/logo.svg" alt="" />
            </SheetHeader>
            <div
              className={
                "pt-10 w-full h-[calc(100svh-95px)] flex flex-col justify-between"
              }
            >
              <ul className={"text-white flex flex-col gap-2"}>
                <Link href="/protected">
                  <li className="w-full p-1 hover:bg-primary hover:text-black font-bold flex items-center gap-2">
                    <FaHome />
                    Inicio
                  </li>
                </Link>
                <Link href="/protected/academico">
                  <li className="w-full p-1 hover:bg-primary hover:text-black font-bold flex items-center gap-2">
                    <FaBookBookmark /> Academico
                  </li>
                </Link>
                <Link href="/protected/perfil">
                  <li className="w-full p-1 hover:bg-primary hover:text-black font-bold flex items-center gap-2">
                    <FaUser /> Perfil
                  </li>
                </Link>
                <Link href="/protected/contacto">
                  <li className="w-full p-1 hover:bg-primary hover:text-black font-bold flex items-center gap-2">
                    <RiContactsBook2Fill /> Contacto
                  </li>
                </Link>
                {user &&
                  (user.role === "secretario" ||
                    user.role === "administrador") && (
                    <>
                      <Link href="/protected/alumnos">
                        <li className="w-full p-1 hover:bg-primary hover:text-black font-bold flex items-center gap-2">
                          <RiContactsBook2Fill /> Usuarios regristrados
                        </li>
                      </Link>
                      <Link href="/protected/signup">
                        <li className="w-full p-1 hover:bg-primary hover:text-black font-bold flex items-center gap-2">
                          <RiContactsBook2Fill /> Agregar alumnos
                        </li>
                      </Link>
                    </>
                  )}
              </ul>
              <Button
                className="w-full p-1"
                onClick={() => signOut()}
                variant={"secondary"}
              >
                Cerrar Sesion
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className={"w-full hidden sm:block sm:text-center"}>
        <h1>
          Panel del <span className="capitalize">{user?.role}</span>
        </h1>
      </div>
      <div className={"w-full pr-1"}>
        <h2 className={"text-right flex items-center gap-2 justify-end"}>
          <span className={"md:block hidden"}>Perfil academico:</span>{" "}
          <span className={"font-semibold"}>{user?.dni}</span>{" "}
        </h2>
      </div>
    </div>
  );
};

export default Nav;
