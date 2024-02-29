import React from "react";
import HeroSection from "@/components/shared/HeroSection";
import Info from "@/components/Carreras/info";
import Certifications from "@/components/Carreras/Certifications";
import Because from "@/components/Carreras/Because";
import WhatDoYouLearn from "@/components/Carreras/WhatDoYouLearn";
import About from "@/components/Carreras/About";
import Slider from "@/components/Carreras/Slider";
import Course from "@/components/Carreras/Course";
import Licenciatures from "@/components/Carreras/Licenciatures";
import Teams from "@/components/Carreras/Teams";
import Sponsors from "@/components/Home/Sponsors";
import SponsorsList from "@/components/Home/SponsorsList";

import carrerasData from "@/models/carrerasData.json";

const Page = ({ params }: any) => {
  const slug = params.slug;
  const carrera = carrerasData.find((carrera) => carrera.slug === slug);

  if (!carrera) {
    return <p>Carrera no encontrada</p>;
  }

  const {
    heroSection,
    info,
    certifications,
    because,
    whatDoYouLearn,
    about,
    orgullo,
    course,
    licenciatures,
    teams,
  } = carrera;

  return (
    <>
      <HeroSection {...heroSection} />
      <Info data={info} />
      <Certifications data={certifications} />
      <Because because={because} />
      <WhatDoYouLearn whatDoYouLearn={whatDoYouLearn} />
      <About about={about} />
      <Slider orgullo={orgullo} />
      <Course course={course} />
      <Licenciatures licenciatures={licenciatures} />
      <Teams teams={teams} />
      <Sponsors />
      <SponsorsList />
    </>
  );
};

export default Page;
