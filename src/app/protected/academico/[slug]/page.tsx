"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Tablon from "@/components/dashboard/academico/materia/Tablon";
import Trabajos from "@/components/dashboard/academico/materia/Trabajos";
import ListaPersonas from "@/components/dashboard/academico/personas/ListaPersonas";
import Material from "@/components/dashboard/academico/material";
import GrillaEvaluatoria from "@/components/dashboard/academico/GrillaEvaluatoria";
import { useUser } from "@/context/UserContext";

const Page = ({ params }: any) => {
  const slug = params.slug;
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
  const trabajos = [
    {
      title: "Trabajos de clase",
      trabajos: [
        {
          title: "Trabajo clase 1",
          infodate: "Fecha de entrega:",
          date: "10 oct 2023, 23:59",
          link: "/protected/academico/ilustracion-grafica/trabajo-clase-1",
        },
        {
          title: "Trabajo clase 2",
          infodate: "Fecha de entrega:",
          date: "20 oct 2023, 23:59",
          link: "/protected/academico/ilustracion-grafica/trabajo-clase-2",
        },
      ],
    },
    {
      title: "Evalucaciones",
      trabajos: [
        {
          title: "Trabajo practico 1",
          infodate: "Fecha de entrega:",
          date: "10 oct 2023, 23:59",
          link: "/protected/academico/ilustracion-grafica/trabajo-practico-1",
        },
        {
          title: "Trabajo practico 2",
          infodate: "Fecha de entrega:",
          date: "20 oct 2023, 23:59",
          link: "/protected/academico/ilustracion-grafica/trabajo-practico-2",
        },
      ],
    },
  ];
  const material = [
    {
      title: "Material primera instancia",
      trabajos: [
        {
          title: "clase 1",
          infodate: "Fecha de publicacion:",
          date: "10 oct 2023, 23:59",
          link: "/protected/academico/ilustracion-grafica/material/trabajo-clase-1",
        },
        {
          title: "clase 2",
          infodate: "Fecha de publicacion:",
          date: "20 oct 2023, 23:59",
          link: "/protected/academico/ilustracion-grafica/material/trabajo-clase-2",
        },
        {
          title: "clase 3",
          infodate: "Fecha de publicacion:",
          date: "20 oct 2023, 23:59",
          link: "/protected/academico/ilustracion-grafica/material/trabajo-clase-2",
        },
        {
          title: "clase 4",
          infodate: "Fecha de publicacion:",
          date: "20 oct 2023, 23:59",
          link: "/protected/academico/ilustracion-grafica/material/trabajo-clase-2",
        },
        {
          title: "clase 5",
          infodate: "Fecha de publicacion:",
          date: "20 oct 2023, 23:59",
          link: "/protected/academico/ilustracion-grafica/material/trabajo-clase-2",
        },
      ],
    },
    {
      title: "Material segunda instancia",
      trabajos: [
        {
          title: "clase 6",
          infodate: "Fecha de publicacion:",
          date: "10 oct 2023, 23:59",
          link: "/protected/academico/ilustracion-grafica/material/trabajo-clase-1",
        },
        {
          title: "clase 7",
          infodate: "Fecha de publicacion:",
          date: "20 oct 2023, 23:59",
          link: "/protected/academico/ilustracion-grafica/material/trabajo-clase-2",
        },
        {
          title: "clase 8",
          infodate: "Fecha de publicacion:",
          date: "20 oct 2023, 23:59",
          link: "/protected/academico/ilustracion-grafica/material/trabajo-clase-2",
        },
        {
          title: "clase 9",
          infodate: "Fecha de publicacion:",
          date: "20 oct 2023, 23:59",
          link: "/protected/academico/ilustracion-grafica/material/trabajo-clase-2",
        },
        {
          title: "clase 10",
          infodate: "Fecha de publicacion:",
          date: "20 oct 2023, 23:59",
          link: "/protected/academico/ilustracion-grafica/material/trabajo-clase-2",
        },
      ],
    },
  ];

  return (
    <section
      className={
        "w-full h-full min-h-[calc(100svh-60px)] mt-[85px] flex justify-center"
      }
    >
      <div className="max-w-7xl w-full flex items-center flex-col">
        <div className={"py-8 w-full"}>
          <Tabs defaultValue="tablon">
            <div className={"w-full flex items-center justify-between"}>
              <TabsList>
                <TabsTrigger value="tablon">Tablon</TabsTrigger>
                <TabsTrigger value="trabajos">Trabajos</TabsTrigger>
                <TabsTrigger value="material">Material de clase</TabsTrigger>
                <TabsTrigger value="personas">Personas</TabsTrigger>
              </TabsList>
              {user && user.role !== "alumno" && <GrillaEvaluatoria />}
            </div>
            <TabsContent value="tablon">
              <Tablon />
            </TabsContent>
            <TabsContent value="trabajos">
              <Trabajos pending={true} paragraphs={task} trabajos={trabajos} />
            </TabsContent>
            <TabsContent value="material">
              <Material paragraphs={task} trabajos={material} />
            </TabsContent>
            <TabsContent value="personas">
              <ListaPersonas />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Page;
