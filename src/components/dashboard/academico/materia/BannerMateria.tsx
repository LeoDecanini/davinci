import React from "react";
import { Badge } from "@/components/ui/badge";
import { useUser } from "@/context/UserContext";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa6";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaInfo } from "react-icons/fa";
import Calendar from "@/components/dashboard/home/Calendar";

const BannerMateria = ({ tablon, trabajo, material }: any) => {
  const { user } = useUser();
  const task = [
    {
      pending: true,
      title: "Entrega de TP1",
      date: 1709823000000,
    },
    {
      pending: true,
      title: "Bocetos para proyecto de ilustración",
      date: 1709823000000,
    },
    {
      pending: true,
      title: "Digitalización de bocetos",
      date: 1709995800000,
    },
    {
      pending: true,
      title: "Correcciones finales de ilustraciones",
      date: 1709995800000,
    },
    {
      pending: true,
      title: "Entrega final de proyecto de ilustración",
      date: 1709995800000,
    },
  ];

  const currentTime = Date.now();
  return (
    <div
      className={
        "w-full bg-[#FF5733] min-h-56 rounded-md flex flex-col justify-between p-5 relative"
      }
    >
      <Badge className={"px-2 text-sm font-semibold w-fit bg-white text-black"}>
        24.1 DWM4AH
      </Badge>
      <div>
        <h1
          className={
            "text-white text-2xl sm:text-4xl font-semibold truncate flex items-center gap-2 w-auto"
          }
        >
          <span className={"truncate"}>Ilustracion grafica</span>
        </h1>
        <p className={"sm:text-base text-xs text-white font-semibold"}>
          Mariano Ezequiel Mazone | Lu 11:10 - 13:00 & Ju 11:10 - 13:00
        </p>
      </div>
      <div className={"absolute top-5 right-5"}>
        {user && user.role !== "alumno" && (
          <>
            {tablon && (
              <div className={"flex items-center gap-5"}>
                <Dialog>
                  <DialogTrigger
                    className={`${buttonVariants({ variant: "outline" })} flex gap-2 items-center`}
                  >
                    <FaPlus className={"text-xs"} />{" "}
                    <span className={"hidden sm:block"}>
                      Agregar un anuncio
                    </span>
                  </DialogTrigger>
                  <DialogContent className={"w-full max-w-2xl"}>
                    <div>
                      <h2 className={"text-xl font-semibold"}>
                        Agregar anuncio
                      </h2>
                      <div className={"grid grid-cols-2 gap-3"}>
                        <div className={"col-span-2"}>
                          <Label htmlFor="title">Titulo</Label>
                          <Input
                            type={"text"}
                            placeholder={"Título"}
                            id={"title"}
                            name={"title"}
                          />
                        </div>
                        <div className={"col-span-2"}>
                          <Label htmlFor="description">Descripcion</Label>
                          <Textarea
                            className={"col-span-2 resize-none"}
                            id={"description"}
                            placeholder="Descripcion del anuncio."
                          />
                        </div>
                        <div className={"col-span-2"}>
                          <Button className={"w-full"} variant={"secondary"}>
                            Enviar
                          </Button>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
                <Dialog>
                  <DialogTrigger
                    className={`${buttonVariants({ variant: "outline" })}  sm:hidden flex gap-2 items-center`}
                  >
                    <FaInfo className={"text-xs"} />
                  </DialogTrigger>
                  <DialogContent
                    className={
                      "w-full max-w-2xl h-full overscroll-y-auto overflow-y-auto"
                    }
                  >
                    <div className={""}>
                      <div className={"pb-5"}>
                        <Calendar />
                      </div>
                      <h4 className={"text-xl font-semibold pb-3"}>
                        Próximas entregas
                      </h4>
                      <div>
                        <div className={"w-full flex flex-col gap-4 h-[200px]"}>
                          {task.map((task: any, i: any) => (
                            <div
                              key={i}
                              className={`shadow-xl cursor-pointer hover:shadow-2xl relative z-10 ${
                                task.date < currentTime
                                  ? "bg-red-500 text-red-500"
                                  : "bg-orange-500"
                              }`}
                            >
                              <div className={`w-full h-1`}></div>
                              <div className="bg-white h-full p-3 flex flex-col sm:flex-row items-center gap-3 justify-between">
                                <p className={"text-xs font-semibold"}>
                                  {task.date < currentTime
                                    ? `Entrega atrasada | ${task.title}`
                                    : `${task.title}`}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className={"p-20"}></div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            )}
            {trabajo && (
              <div className={"flex items-center gap-5"}>
                <Dialog>
                  <DialogTrigger
                    className={`${buttonVariants({ variant: "outline" })} flex gap-2 items-center`}
                  >
                    <FaPlus className={"text-xs"} />{" "}
                    <span className={"hidden sm:block"}>Agregar seccion</span>
                  </DialogTrigger>
                  <DialogContent className={"w-full max-w-2xl"}>
                    <h2 className={"text-xl font-semibold"}>Agregar seccion</h2>
                    <div className={"grid grid-cols-2 gap-3"}>
                      <div className={"col-span-2"}>
                        <Label htmlFor="title">Titulo</Label>
                        <Input
                          type={"text"}
                          placeholder={"Título"}
                          id={"title"}
                          name={"title"}
                        />
                      </div>
                      <div className={"col-span-2"}>
                        <Button className={"w-full"} variant={"secondary"}>
                          Enviar
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
                <Dialog>
                  <DialogTrigger
                    className={`${buttonVariants({ variant: "outline" })}  sm:hidden flex gap-2 items-center`}
                  >
                    <FaInfo className={"text-xs"} />
                  </DialogTrigger>
                  <DialogContent
                    className={
                      "w-full max-w-2xl h-full overscroll-y-auto overflow-y-auto"
                    }
                  >
                    <div className={""}>
                      <h4 className={"text-xl font-semibold pb-3"}>
                        Próximas entregas
                      </h4>
                      <div>
                        <div className={"w-full flex flex-col gap-4 h-[200px]"}>
                          {task.map((task: any, i: any) => (
                            <div
                              key={i}
                              className={`shadow-xl cursor-pointer hover:shadow-2xl relative z-10 ${
                                task.date < currentTime
                                  ? "bg-red-500 text-red-500"
                                  : "bg-orange-500"
                              }`}
                            >
                              <div className={`w-full h-1`}></div>
                              <div className="bg-white h-full p-3 flex flex-col sm:flex-row items-center gap-3 justify-between">
                                <p className={"text-xs font-semibold"}>
                                  {task.date < currentTime
                                    ? `Entrega atrasada | ${task.title}`
                                    : `${task.title}`}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className={"p-20"}></div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            )}
            {material && (
              <Dialog>
                <DialogTrigger
                  className={`${buttonVariants({ variant: "outline" })} flex gap-2 items-center`}
                >
                  <FaPlus className={"text-xs"} />{" "}
                  <span className={"hidden sm:block"}>Agregar material</span>
                </DialogTrigger>
                <DialogContent className={"w-full max-w-2xl"}>
                  <h2 className={"text-xl font-semibold"}>Agregar material</h2>
                  <div className={"grid grid-cols-2 gap-3"}>
                    <div className={"col-span-2"}>
                      <Label htmlFor="title">Titulo</Label>
                      <Input
                        type={"text"}
                        placeholder={"Título"}
                        id={"title"}
                        name={"title"}
                      />
                    </div>
                    <div className={"col-span-2"}>
                      <Button className={"w-full"} variant={"secondary"}>
                        Enviar
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default BannerMateria;
