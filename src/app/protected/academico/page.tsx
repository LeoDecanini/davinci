"use client";
import { useUser } from "@/context/UserContext";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import SearchInput from "@/components/dashboard/academico/SearchInput";
import Slider from "@/components/dashboard/academico/Slider";
import Materias from "@/components/dashboard/academico/Materias";

interface Paragraph {
  color: string;
  title: string;
  commission: string;
  teacher: string;
  text: string;
  link: string;
}

const Academico: React.FC = () => {
  const { user } = useUser();

  const paragraphs = [
    {
      color: "#FF5733",
      title: "Ilustracion grafica",
      commission: "24.1 DWM4AH",
      teacher: "Mariano Ezequiel Mazone",
      text: "Ilustración grafica",
      link: "/protected/academico/ilustracion-grafica",
    },
    {
      color: "#6A5ACD",
      title: "Tratamiento Digital de la Imagen I",
      commission: "24.1 DWM4AH",
      teacher: "Mariano Ezequiel Mazone",
      text: "Tratamiento Digital de la Imagen I",
      link: "/protected/academico/tratamiento-digital-de-la-imagen-1",
    },
    {
      color: "#8B008B",
      title: "Lógica de la Programación",
      commission: "24.1 DWM4AH",
      teacher: "Mariano Ezequiel Mazone",
      text: "Lógica de la Programación",
      link: "/protected/academico/lógica-de-la-programación",
    },
    {
      color: "#048f04",
      title: "Diseño Gráfico I",
      commission: "24.1 DWM4AH",
      teacher: "Mariano Ezequiel Mazone",
      text: "Diseño Gráfico I",
      link: "/protected/academico/diseno-grafico-1",
    },
    {
      color: "#948018",
      title: "Representación Gráfica",
      commission: "24.1 DWM4AH",
      teacher: "Mariano Ezequiel Mazone",
      text: "Representación Gráfica",
      link: "/protected/academico/representacion-grafica",
    },
    {
      color: "#4169E1",
      title: "Psicología de la Comunicación",
      commission: "24.1 DWM4AH",
      teacher: "Mariano Ezequiel Mazone",
      text: "Psicología de la Comunicación",
      link: "/protected/academico/psicologia-de-la-comunicacion",
    },
  ];



  return (
    <section
      className={
        "w-full h-full min-h-[calc(100svh-60px)] mt-[60px] flex justify-center"
      }
    >
      <div className="max-w-7xl w-full flex items-center flex-col">
        <div className={"py-10 text-center"}>
          <h3 className="font-bold text-xl sm:text-3xl md:text-4xl underline decoration-secondary underline-offset-8">
            Panel Acedemico
          </h3>
        </div>
        <SearchInput />
        <Slider paragraphs={paragraphs} />
        <Materias paragraphs={paragraphs} />
      </div>
    </section>
  );
};

export default Academico;
