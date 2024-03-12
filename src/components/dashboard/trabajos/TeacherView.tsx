import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Entregado from "@/components/dashboard/trabajos/Entregado";
import NoEntregado from "@/components/dashboard/trabajos/NoEntregado";
import ChatButton from "@/components/dashboard/trabajos/ChatButton";

const TeacherView = () => {
  return (
    <>
      <div className={"w-full shadow p-5 col-span-1 rounded-md"}>
        <div className={"flex items-center justify-between"}>
          <h2 className={"text-lg font-semibold"}>Trabajos</h2>
          <Badge variant={"outline"}>todos</Badge>
        </div>
        <div className={"py-2 gap-2 flex flex-col"}>
          <span>Entregados: 1</span>
          <span>No entregados: 35</span>
        </div>
        <Sheet>
          <SheetTrigger
            className={`mt-2 w-full ${buttonVariants({ variant: "outline" })}`}
          >
            Ver trabajos
          </SheetTrigger>
          <SheetContent
            className={
              "bg-[#202020] border-none !w-full overflow-y-auto !text-left"
            }
            side={"right"}
          >
            <SheetHeader>
              <h2 className={"text-lg font-semibold text-white pt-3"}>
                Trabajos de la clase
              </h2>
            </SheetHeader>
            <div className={"pt-5 w-full h-[calc(100svh-95px)]"}>
              <div>
                <span className={"text-white"}>Trabajos entregados:</span>
                <div className={"mt-4 flex flex-col gap-4"}>
                  <Entregado />
                </div>
              </div>
              <div className={"mt-4"}>
                <span className={"text-white"}>Trabajos no entregados:</span>
                <div className={"mt-4 flex flex-col gap-4"}>
                  <NoEntregado />
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className={"w-full mt-5 shadow p-5 col-span-1 rounded-md"}>
        <div className={"flex items-center justify-between"}>
          <h2 className={"text-lg font-semibold"}>Chats</h2>
          <Badge variant={"outline"}>privados</Badge>
        </div>
        <div className={"flex flex-col"}>
          <ChatButton />
          <ChatButton />
          <ChatButton />
        </div>
      </div>
    </>
  );
};

export default TeacherView;
