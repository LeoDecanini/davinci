import React from "react";
import Info from "@/components/users/Home/Info";
import Events from "@/components/users/Home/Events";
import News from "@/components/users/Home/News";
import Stats from "@/components/users/Home/Stats";
import InfoStats from "@/components/users/Home/InfoStats";
import ExplorePage from "@/components/users/Home/ExplorePage";
import Inscriptions from "@/components/users/Home/Inscriptions";
import About1 from "@/components/users/Home/About1";
import Sponsors from "@/components/users/Home/Sponsors";
import SponsorsList from "@/components/users/Home/SponsorsList";
import HeroSection from "@/components/users/shared/HeroSection";

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
