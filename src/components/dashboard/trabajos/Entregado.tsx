import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button, buttonVariants} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {FaRegFile} from "react-icons/fa6";

const Entregado = () => {
    return (
        <Dialog>
            <DialogTrigger
                className={`${buttonVariants({ variant: "outline" })} bg-transparent border w-full text-white`}
            >
                Leonardo Decanini -
                <span className={"font-bold pl-1"}>6/10</span>
            </DialogTrigger>
            <DialogContent className={"w-[95%] max-w-2xl"}>
                <DialogHeader>
                    <DialogTitle
                        className={
                            "flex gap-3 flex-col sm:flex-row justify-between w-full items-center"
                        }
                    >
                        <h2>Trabajo de clase 2 - Decanini Leonardo</h2>
                        <Badge
                            className={"text-green-600 border-green-600 mr-4"}
                            variant={"outline"}
                        >
                            Calificado
                        </Badge>
                    </DialogTitle>
                    <DialogDescription>
                        <div className={"pt-2"}>
                            <h2 className={"font-semibold"}>
                                Archivos entregados:
                            </h2>
                            <div
                                className={
                                    "mt-2 grid sm:grid-cols-2 md:grid-cols-3 gap-5"
                                }
                            >
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
                                <Button
                                    variant={"outline"}
                                    className={
                                        "px-3 py-2 border rounded-md flex items-center gap-2"
                                    }
                                >
                                    <FaRegFile className={"text-xl"} />
                                    <span className={"max-w-32 truncate"}>
                                Mensajes privados
                              </span>
                                </Button>
                            </div>
                        </div>
                        <div className={"mt-4 w-full border-t-2"}></div>
                        <div className={"mt-4"}>
                            <h2 className={"font-semibold"}>Calificar entrega</h2>
                            <div className="mt-2 flex flex-wrap gap-3">
                                <Button
                                    variant={"outline"}
                                    className={
                                        "px-4 py-2 border rounded-md flex items-center gap-2"
                                    }
                                >
                                    <span className={"max-w-32 truncate"}>1</span>
                                </Button>
                                <Button
                                    variant={"outline"}
                                    className={
                                        "px-4 py-2 border rounded-md flex items-center gap-2"
                                    }
                                >
                                    <span className={"max-w-32 truncate"}>2</span>
                                </Button>
                                <Button
                                    variant={"outline"}
                                    className={
                                        "px-4 py-2 border rounded-md flex items-center gap-2"
                                    }
                                >
                                    <span className={"max-w-32 truncate"}>3</span>
                                </Button>
                                <Button
                                    variant={"outline"}
                                    className={
                                        "px-4 py-2 border rounded-md flex items-center gap-2"
                                    }
                                >
                                    <span className={"max-w-32 truncate"}>4</span>
                                </Button>
                                <Button
                                    variant={"outline"}
                                    className={
                                        "px-4 py-2 border rounded-md flex items-center gap-2"
                                    }
                                >
                                    <span className={"max-w-32 truncate"}>5</span>
                                </Button>
                                <Button
                                    variant={"outline"}
                                    className={
                                        "px-4 py-2 border rounded-md border-green-600 bg-green-600 text-white  flex items-center gap-2"
                                    }
                                >
                                    <span className={"max-w-32 truncate"}>6</span>
                                </Button>
                                <Button
                                    variant={"outline"}
                                    className={
                                        "px-4 py-2 border rounded-md flex items-center gap-2"
                                    }
                                >
                                    <span className={"max-w-32 truncate"}>7</span>
                                </Button>
                                <Button
                                    variant={"outline"}
                                    className={
                                        "px-4 py-2 border rounded-md flex items-center gap-2"
                                    }
                                >
                                    <span className={"max-w-32 truncate"}>8</span>
                                </Button>
                                <Button
                                    variant={"outline"}
                                    className={
                                        "px-4 py-2 border rounded-md flex items-center gap-2"
                                    }
                                >
                                    <span className={"max-w-32 truncate"}>9</span>
                                </Button>
                                <Button
                                    variant={"outline"}
                                    className={
                                        "px-3 py-2 border rounded-md flex items-center gap-2"
                                    }
                                >
                                    <span className={"max-w-32 truncate"}>10</span>
                                </Button>
                            </div>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default Entregado;