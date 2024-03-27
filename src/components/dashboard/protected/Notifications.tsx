import React, { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Button, buttonVariants } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useUser } from "@/context/UserContext";

const Notifications = () => {
  const { user } = useUser();
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      img: "/dashboard/banner-notificaciones.jpg",
      title: "Recordatorio de reunión",
      content:
        "No olvides la reunión de equipo hoy a las 3:00 PM en la sala de conferencias.",
    },
    {
      id: 2,
      img: "/dashboard/banner-notificaciones.jpg",
      title: "Tarea importante",
      content: "Recuerda completar la tarea asignada antes del viernes.",
    },
    {
      id: 3,
      img: "/dashboard/banner-notificaciones.jpg",
      title: "Anuncio del evento escolar",
      content:
        "El festival de arte escolar se llevará a cabo el próximo martes. ¡No te lo pierdas!",
    },
    {
      id: 4,
      img: "/dashboard/banner-notificaciones.jpg",
      title: "Actualización del calendario académico",
      content:
        "Se han realizado cambios en el calendario académico. Por favor, revisa la página web para más detalles.",
    },
    {
      id: 5,
      img: "/dashboard/banner-notificaciones.jpg",
      title: "Próximo feriado",
      content:
        "El próximo feriado nacional es el lunes 15 de abril. La escuela estará cerrada.",
    },
    {
      id: 6,
      img: "/dashboard/banner-notificaciones.jpg",
      title: "Proyecto de ciencias",
      content:
        "Se ha anunciado un nuevo proyecto de ciencias para todos los estudiantes de la escuela. Este proyecto es obligatorio y cuenta como una parte importante de la calificación final. Asegúrate de revisar los detalles y las fechas límite en la plataforma de aprendizaje en línea.",
    },
    {
      id: 7,
      img: "/dashboard/banner-notificaciones.jpg",
      title: "Concurso de poesía",
      content:
        "¡Participa en el concurso de poesía de la escuela! Todos los estudiantes están invitados a enviar sus poemas originales antes del próximo viernes. Los ganadores recibirán premios emocionantes y la oportunidad de recitar sus poemas en la asamblea escolar.",
    },
    {
      id: 8,
      img: "/dashboard/banner-notificaciones.jpg",
      title: "Sesión de tutoría",
      content:
        "Se llevará a cabo una sesión de tutoría para los estudiantes de último año el próximo martes. Esta sesión cubrirá temas importantes relacionados con la preparación para los exámenes finales y la planificación para la universidad. Todos los estudiantes son alentados a asistir.",
    },
    {
      id: 9,
      img: "/dashboard/banner-notificaciones.jpg",
      title: "Excursión al museo de historia natural",
      content:
        "Los estudiantes de biología realizarán una emocionante excursión al museo de historia natural el próximo sábado. Esta excursión es una oportunidad única para explorar la biodiversidad y aprender sobre la historia de la vida en la Tierra. ¡No te lo pierdas!",
    },
    {
      id: 10,
      img: "/dashboard/banner-notificaciones.jpg",
      title: "Presentación de teatro",
      content:
        "El club de teatro de la escuela presentará una emocionante obra de teatro el próximo mes. ¡Prepárate para una noche llena de drama, risas y talento! Las entradas estarán disponibles pronto en la oficina principal.",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const notificationsPerPage = 3;
  const totalPages = Math.ceil(notifications.length / notificationsPerPage);

  const startIndex = (currentPage - 1) * notificationsPerPage;
  const endIndex = Math.min(
    startIndex + notificationsPerPage,
    notifications.length,
  );
  const currentNotifications = notifications.slice(startIndex, endIndex);

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };
  return (
    <div className={"col-span-3"}>
      <div className="flex flex-col sm:flex-row gap-3 justify-between items-center px-2 sm:px-5">
        <h3 className="font-bold text-2xl sm:3text-xl md:text-2xl">Notificaciones</h3>
        {user && (user.role === "secretario" || user.role === "administrador") && (
            <Dialog>
              <DialogTrigger
                className={`${buttonVariants({ variant: "outline" })}`}
              >
                Agregar anuncio
              </DialogTrigger>
              <DialogContent className={"w-full max-w-2xl"}>
                <h2 className={"text-xl font-semibold"}>Agregar anuncio</h2>
                <div className={"grid grid-cols-2 gap-3"}>
                  <div>
                    <Label htmlFor="title">Titulo</Label>
                    <Input
                      type={"text"}
                      placeholder={"Título"}
                      id={"title"}
                      name={"title"}
                    />
                  </div>
                  <div>
                    <Label htmlFor="image">Imagen</Label>
                    <Input type={"file"} id={"image"} name={"image"} />
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
      </div>
      <div className={"w-full pt-5 md:px-10"}>
        {currentNotifications.map((notification) => (
          <div key={notification.id} className={"p-2 sm:p-5 shadow rounded-md mb-10"}>
            <div className={"w-full"}>
              <img
                className={"max-h-32 w-full object-cover rounded-md object-top"}
                src={notification.img}
                alt="asa"
              />
            </div>
            <h4 className={"text-xl font-semibold py-3"}>
              {notification.title}
            </h4>
            <p className={"p-2 bg-slate-100 rounded-md"}>
              {notification.content}
            </p>
          </div>
        ))}
        <Pagination>
          <PaginationContent>
            {currentPage > 1 && (
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => handlePageChange(currentPage - 1)}
                />
              </PaginationItem>
            )}
            {Array.from({ length: totalPages }).map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  href="#"
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            {currentPage < totalPages && (
              <PaginationItem>
                <PaginationNext
                  onClick={() => handlePageChange(currentPage + 1)}
                />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default Notifications;
