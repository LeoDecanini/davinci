import React from "react";
import Link from "next/link";

const Sponsors = () => {
  return (
    <section className="flex h-full bg-muted relative bg-[url('/fondo-stats.webp')] bg-no-repeat bg-cover px-2 sm:px-5 md:px-10 py-10 justify-center">
      <div>
        <div className="max-w-7xl w-full relative">
          <div>
            <h3 className="font-bold text-white text-xl sm:text-3xl md:text-5xl">
              Empresas que confían en nosotros
            </h3>
            <div className="h-1 max-w-20 md:max-w-40 bg-primary"></div>
            <div className={"pt-10 text-white flex flex-col gap-5"}>
              <p>
                Nuestros alumnos de carreras acceden a un sistema exclusivo de
                Bolsa de Trabajo que recibe más de 1500 ofertas anuales, para
                cubrir puestos en Argentina y en el exterior. Gracias a acuerdos
                de Escuela Da Vinci con empresas destacadas, estos avisos son
                enviados directamente a este sistema antes de publicarse en
                cualquier otro medio.
              </p>
              <p>
                Algunas de las empresas y organizaciones que nos contactaron
                incluyen a Nvidia, GeForce, Gigabyte, Vorterix, Globant,
                MercadoLibre, El Club de la Milanesa, CPM Cinemas, Argentina
                Game Show, TyC Sports, Grupo Clarín, La Nación, Aycron IT
                Solutions, I-SEC Information Security Inc., A.I.E.R.A., AXG
                Tecnonexo, EMERETAIL, Looppa SA., Interoptics S.A., IT
                CONVERGENCE (Oracle Partners), Axxon Solutions, Soft Agrega
                S.A., y otras.
              </p>
            </div>
            <div className={"w-full flex pt-10"}>
              <button className="px-8 py-3 font-bold text-white bg-secondary hover:bg-[#b30c67]">
                Ver sponsores
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
