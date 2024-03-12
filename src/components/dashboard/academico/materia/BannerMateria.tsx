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

const BannerMateria = ({ tablon, trabajo, material }: any) => {
  const { user } = useUser();
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
            "text-white text-4xl font-semibold truncate flex items-center gap-2 w-auto"
          }
        >
          <span className={"truncate"}>Ilustracion grafica</span>
        </h1>
        <p className={"text-white font-semibold"}>
          Mariano Ezequiel Mazone | Lu 11:10 - 13:00 & Ju 11:10 - 13:00
        </p>
      </div>
      <div className={"absolute top-5 right-5"}>
        {user && user.role === "profesor" && (
          <>
            {tablon && (
              <Dialog>
                <DialogTrigger
                  className={`${buttonVariants({ variant: "outline" })} flex gap-2 items-center`}
                >
                  <FaPlus className={"text-xs"} /> Agregar un anuncio
                </DialogTrigger>
                <DialogContent className={"w-full max-w-2xl"}>
                  <h2 className={"text-xl font-semibold"}>Agregar anuncio</h2>
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
                  </div>
                </DialogContent>
              </Dialog>
            )}
            {trabajo && (
                <Dialog>
                  <DialogTrigger
                      className={`${buttonVariants({ variant: "outline" })} flex gap-2 items-center`}
                  >
                    <FaPlus className={"text-xs"} /> Agregar seccion
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
                    </div>
                  </DialogContent>
                </Dialog>
            )}
            {material && (
                <Dialog>
                  <DialogTrigger
                      className={`${buttonVariants({ variant: "outline" })} flex gap-2 items-center`}
                  >
                    <FaPlus className={"text-xs"} /> Agregar material
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
