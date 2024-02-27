import React from "react";
import Info from "@/components/Home/Info";
import Events from "@/components/Home/Events";
import News from "@/components/Home/News";
import Stats from "@/components/Home/Stats";
import InfoStats from "@/components/Home/InfoStats";
import ExplorePage from "@/components/Home/ExplorePage";
import Inscriptions from "@/components/Home/Inscriptions";
import About1 from "@/components/Home/About1";

const Home = () => {
  return (
    <>
      <section className="h-[calc(100vh-94px)] bg-[url('/fondo-inicio-1.webp')] bg-no-repeat bg-cover bg-center relative">
        <div className="absolute text-white bg-black/40 backdrop-blur p-10 w-full max-w-2xl md:left-[23rem] left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
          <span className=" font-bold text-xl block">
            Delivering beautiful digital products
          </span>
          <h1 className="text-3xl pt-5 font-bold">
            Carreras y Cursos Que Integran Tecnología, Comunicación, Arte y
            Diseño
          </h1>
          <p className="py-5 font-bold">
            Títulos Oficiales • Modalidad de Estudio &#34;A Distancia&#34; o
            &#34;Presencial&#34;
          </p>
          <button className="px-8 py-3 font-bold text-white bg-secondary hover:bg-[#b30c67]">
            Contactanos
          </button>
        </div>
      </section>
      <Info />
      <Events />
      <News />
      <Stats />
      <InfoStats />
      <ExplorePage />
      <Inscriptions />
      <About1 />
    </>
  );
};

export default Home;
