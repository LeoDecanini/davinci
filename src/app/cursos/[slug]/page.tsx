import React from "react";
import cursosData from "@/models/cursosData.json";
import HeroSection from "@/components/shared/HeroSection";
import Info from "@/components/Carreras/info";
import IconList from "@/components/cursos/IconList";
import Introduction from "@/components/cursos/Introduction";
import Course1 from "@/components/cursos/Course1";
import Course2 from "@/components/cursos/Course2";
import Course3 from "@/components/cursos/Course3";

interface Card {
  icon: string;
  titulo: string;
  type: string;
  descripcion: string;
  recomendado?: boolean;
  new?: boolean;
}

const Page = ({ params }: any) => {
  const slug = params.slug;
  const curso = cursosData.find((curso) => curso.slug === slug);
  if (!curso) {
    return <p>Carrera no encontrada</p>;
  }
  const { heroSection, info, introduction, cursos, cursos2, cursos3 } = curso;

  return (
    <>
      <HeroSection {...heroSection} />
      <Info data={info} />
      <Introduction introduction={introduction} />
      <Course1 cursos={cursos} />
        {cursos2 && <Course2 course2={cursos2} />}
        {cursos3 && <Course3 cursos3={cursos3} />}
    </>
  );
};

export default Page;
