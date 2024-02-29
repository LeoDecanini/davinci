import React from "react";
import Info from "@/components/Home/Info";
import Events from "@/components/Home/Events";
import News from "@/components/Home/News";
import Stats from "@/components/Home/Stats";
import InfoStats from "@/components/Home/InfoStats";
import ExplorePage from "@/components/Home/ExplorePage";
import Inscriptions from "@/components/Home/Inscriptions";
import About1 from "@/components/Home/About1";
import Sponsors from "@/components/Home/Sponsors";
import SponsorsList from "@/components/Home/SponsorsList";
import HeroSection from "@/components/shared/HeroSection";

const Home = () => {
  return (
    <>
      <HeroSection
        backgroundImage="/fondo-inicio-1.webp"
        title={` Carreras y Cursos Que Integran Tecnología, Comunicación, Arte y
            Diseño`}
        subtitle={
          ' Títulos Oficiales • Modalidad de Estudio "A Distancia" o "Presencial'
        }
        buttonText="Contactanos"
        instinctText="Delivering beautiful digital products"
      />
      <Info />
      <Events />
      <News />
      <Stats />
      <InfoStats />
      <ExplorePage />
      <Inscriptions />
      <About1 />
      <Sponsors />
      <SponsorsList />
    </>
  );
};

export default Home;
