import React from 'react';
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {FaRegUser} from "react-icons/fa";

const UserView = () => {
    return (
        <>
            <div className={"w-full shadow p-5 col-span-1 rounded-md"}>
                <div className={"flex items-center justify-between"}>
                    <h2 className={"text-lg font-semibold"}>Tu trabajo</h2>
                    <Badge
                        className={"text-red-600 border-red-600"}
                        variant={"outline"}
                    >
                        Sin entregar
                    </Badge>
                </div>
                <Button
                    variant={"outline"}
                    className={
                        "px-3 py-2 w-full mt-3 h-32 border rounded-md flex items-center gap-2"
                    }
                >
                    Añadir archivo
                </Button>
            </div>
            <div className={"w-full shadow mt-5 p-5 col-span-1 rounded-md"}>
                <div className={"flex items-center gap-2"}>
                    <FaRegUser className={"text-xl"} />
                    <h2 className={"text-lg font-semibold"}>
                        Mensajes privados
                    </h2>
                </div>
                <Button
                    variant={"outline"}
                    className={
                        "px-3 py-2 w-full mt-3 border rounded-md flex items-center gap-2"
                    }
                >
                    Enviar un comentario al profesor
                </Button>
            </div>
        </>
    );
};

export default UserView;