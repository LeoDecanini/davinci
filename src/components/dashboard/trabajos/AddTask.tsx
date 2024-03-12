import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { CiCirclePlus } from "react-icons/ci";
import { Textarea } from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";

const AddTask = () => {
  return (
    <Dialog>
      <DialogTrigger className={`flex gap-2 items-center`}>
        <CiCirclePlus className={"text-3xl font-semibold cursor-pointer"} />
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
            <Label htmlFor="description">Descripcion</Label>
            <Textarea
                className={"resize-none"}
                id={"description"}
                placeholder={"Descripcion"}
            />
          </div>
          <div className={"col-span-2"}>
            <Label htmlFor="file">Archivos</Label>
            <Input
                type={"file"}
                id={"file"}
                name={"file"}
                multiple
            />
          </div>
          <div className={"col-span-2"}>
            <Button variant={"secondary"} type={"submit"} className={"w-full mt-5"}>Enviar</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddTask;
