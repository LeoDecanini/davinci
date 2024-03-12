import React from "react";
import HeroSection from "@/components/users/shared/HeroSection";
import Info from "@/components/users/Carreras/info";
import Certifications from "@/components/users/Carreras/Certifications";
import Because from "@/components/users/Carreras/Because";
import WhatDoYouLearn from "@/components/users/Carreras/WhatDoYouLearn";
import About from "@/components/users/Carreras/About";
import Slider from "@/components/users/Carreras/Slider";
import Course from "@/components/users/Carreras/Course";
import Licenciatures from "@/components/users/Carreras/Licenciatures";
import Teams from "@/components/users/Carreras/Teams";
import Sponsors from "@/components/users/Home/Sponsors";
import SponsorsList from "@/components/users/Home/SponsorsList";

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
