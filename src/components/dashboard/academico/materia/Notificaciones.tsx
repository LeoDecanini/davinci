import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LuSendHorizonal } from "react-icons/lu";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Notificaciones = () => {
  const [messageTablon, setNotifications] = useState([
    {
      id: 1,
      img: "/dashboard/banner-notificaciones.jpg",
      title: "Recordatorio de reunión",
      content:
        "No olvides la reunión de equipo hoy a las 3:00 PM en la sala de conferencias.",
      teacher: "Mariano Ezequiel Mazone",
      color: "#FF5733",
      date: "3 mar 2023",
    },
    {
      id: 2,
      img: "/dashboard/banner-notificaciones.jpg",
      title: "Sesión de tutoría",
      content:
        "Recuerda que tienes una sesión de tutoría mañana a las 10:00 AM en la biblioteca. Estaremos discutiendo tus proyectos actuales y tu progreso.",
      teacher: "Juan Pérez",
      color: "#3366FF",
      date: "5 mar 2023",
    },
    {
      id: 3,
      img: "/dashboard/banner-notificaciones.jpg",
      title: "Próxima fecha límite",
      content:
        "La fecha límite para entregar el proyecto final se acerca rápidamente. Asegúrate de haber revisado todas las pautas y requisitos para evitar retrasos.",
      teacher: "Ana González",
      color: "#33FF6E",
      date: "8 mar 2023",
    },
    {
      id: 4,
      img: "/dashboard/banner-notificaciones.jpg",
      title: "Recordatorio de tarea",
      content:
        "No olvides completar la tarea asignada para esta semana. Puede encontrar todos los detalles en la sección de tareas de la plataforma.",
      teacher: "Laura Martínez",
      color: "#FFB233",
      date: "11 mar 2023",
    },
    {
      id: 5,
      img: "/dashboard/banner-notificaciones.jpg",
      title: "Anuncio importante",
      content:
        "¡Atención! Hay un cambio en el horario de clases para la próxima semana. Asegúrese de revisar el nuevo horario en la sección correspondiente.",
      teacher: "Roberto Sánchez",
      color: "#FF33E6",
      date: "14 mar 2023",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const messageTablonPerPage = 3;
  const totalPages = Math.ceil(messageTablon.length / messageTablonPerPage);

  const startIndex = (currentPage - 1) * messageTablonPerPage;
  const endIndex = Math.min(
    startIndex + messageTablonPerPage,
    messageTablon.length,
  );
  const currentNotifications = messageTablon.slice(startIndex, endIndex);

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {currentNotifications.map((notification, i) => (
        <div key={i} className={"shadow rounded-md mb-8"}>
          <div className={"flex p-5 items-center gap-2"}>
            <Avatar className={"w-12 h-12"}>
              <AvatarImage />
              <AvatarFallback
                className={"text-white font-bold text-xl"}
                style={{ background: notification.color }}
              >
                {notification.teacher.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className={"flex flex-col"}>
              <p className={"text-xl"}>{notification.teacher}</p>{" "}
              <span className={"text-xs"}>{notification.date}</span>
            </div>
          </div>
          <div className={"mt-5 pb-5 px-5 w-full"}>
            <div className={"bg-slate-50 p-2 rounded-md"}>
              <h4 className={"font-semibold text-xl pb-3"}>
                {notification.title}
              </h4>
              <p className={"w-full"}>{notification.content}</p>
            </div>
          </div>
          <div className={"w-full p-4 border-t"}>
            <div className={"w-full rounded-md flex items-center gap-2 p-2"}>
              <div>
                <Avatar className={"w-12 h-12"}>
                  <AvatarImage />
                  <AvatarFallback
                    className={"text-white font-bold text-xl bg-fuchsia-600"}
                  >
                    L
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="w-full">
                <div className="px-2 w-full mx-auto">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Añade un comentario de clase"
                      className="w-full border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-secondary"
                    />
                  </div>
                </div>
              </div>
              <div>
                <LuSendHorizonal
                  className={"text-3xl hover:cursor-pointer text-gray-400"}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
      <Pagination>
        <PaginationContent>
          {currentPage > 1 && (
            <PaginationItem>
              <PaginationPrevious
                href="#"
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
                href="#"
                onClick={() => handlePageChange(currentPage + 1)}
              />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default Notificaciones;
