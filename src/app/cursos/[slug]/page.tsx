import React from "react";
import cursosData from "@/models/cursosData.json";
import HeroSection from "@/components/shared/HeroSection";
import Info from "@/components/Carreras/info";

const Page = ({ params }: any) => {
  const slug = params.slug;
  const curso = cursosData.find((curso) => curso.slug === slug);
  if (!curso) {
    return <p>Carrera no encontrada</p>;
  }
  const { heroSection, info } = curso;
  return (
    <>
      <HeroSection {...heroSection} />
      <Info data={info} />
    </>
  );
};

export default Page;
