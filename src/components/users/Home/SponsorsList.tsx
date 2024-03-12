import React from "react";
import Link from "next/link";

const SponsorsList = () => {
  const sponsors = [
    { src: "/logo_despegar.svg" },
    { src: "/logo_disney_channel.svg" },
    { src: "/logo_ea.svg" },
    { src: "/logo_el-planetario.svg" },
    { src: "/logo_etermax.svg" },
    { src: "/logo_gigabyte.svg" },
    { src: "/logo_globant.svg" },
    { src: "/logo_gobierno_de_la_ciudad.svg" },
    { src: "/logo_grupo-clarin.svg" },
    { src: "/logo_grupo_banco_provincia.svg" },
    { src: "/logo_infobae.svg" },
    { src: "/logo_la-nacion.svg" },
    { src: "/logo_lenovo.svg" },
    { src: "/logo_mercadolibre.svg" },
    { src: "/logo_nickelodeon.svg" },
    { src: "/logo_nvidia.svg" },
    { src: "/logo_swiss-medical.svg" },
    { src: "/logo_vorterix.svg" },
  ];

  return (
    <section className="flex h-full px-2 sm:px-5 md:px-10 py-10 justify-center">
      <div>
        <div className="max-w-7xl w-full">
          <div className={"pt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"}>
            {sponsors.map((sponsor, index) => (
              <div key={index}>
                <img className={"w-full"} src={sponsor.src} alt={sponsor.src} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsList;
