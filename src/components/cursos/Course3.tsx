import React from "react";
import IconList from "@/components/cursos/IconList";

const Course3 = ({ cursos3 }: any) => {
  return (
    <section className="flex min-h-screen relative bg-[url('/fondo-orgullo.webp')] bg-no-repeat bg-cover bg-top px-2 sm:px-5 md:px-10 py-10 justify-center">
      <div className="absolute inset-0 bg-black opacity-10"></div>

      <div className="max-w-7xl w-full relative">
        {cursos3.map((curso: any, i: any) => (
          <div key={i} className={`${i > 0 && "pt-20"}`}>
            <div>
              <div>
                <h3 className="font-bold text-3xl md:text-5xl">
                  {curso.titulo}
                </h3>
                <div className={`h-1 w-full bg-primary`}></div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 px-2 md:px-10 gap-5 mt-10 z-10 relative">
                {curso.cards.map((card: any, i: any) => (
                  <div
                    key={i}
                    className="shadow-xl cursor-pointer hover:shadow-2xl relative z-10"
                  >
                    {curso.titulo === "Pre-Universitarios" && (
                      <div className={`w-full h-1 bg-orange-500`}></div>
                    )}

                    {curso.titulo === "Academia Artística/Tecnológica" && (
                      <div className={`w-full h-1 bg-cyan-400`}></div>
                    )}

                    {curso.titulo === "Cursos de Videojuegos para Chicos" && (
                      <div className={`w-full h-1 bg-fuchsia-500`}></div>
                    )}

                    <div className="bg-white min-h-[188px] h-full p-5 flex flex-col sm:flex-row items-center gap-3 justify-between">
                      <div className="w-1/3 flex justify-center  h-full">
                        <IconList icon={card.icon} />
                      </div>
                      <div className="w-full h-full">
                        <h5 className="text-xl font-bold">{card.titulo}</h5>
                        <p className="pt-3 pb-2">
                          <span className={"font-bold"}>{card.type}</span> -{" "}
                          {card.descripcion}
                        </p>
                        {card.recomendado && (
                          <span className={"p-1 bg-primary"}>
                            Curso Recomendado
                          </span>
                        )}
                        {card.new && (
                          <span className={"p-1 bg-primary"}>Curso Nuevo</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Course3;
