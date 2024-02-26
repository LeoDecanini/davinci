import React from "react";

const Events = () => {
  return (
    <section className="flex h-full py-10 justify-center">
      <div className="max-w-7xl w-full">
        <div>
          <span className="font-bold text-xl">Eventos</span>
          <h3 className="font-bold text-5xl pt-5">
            Charlas Informativas y Eventos Gratuitos
          </h3>
          <p className="pt-5">
            Conocé los eventos que organizamos durante todo el año, abiertos al
            público y con entrada gratuita: Charlas Informativas de Carreras,
            Conferencias, Workshops, Masterclasses, Invitados Internacionales,
            Torneos y más...
          </p>
        </div>
        <div className="grid grid-cols-3 gap-5 pt-10">
          <div className="shadow-lg h-full">
            <img src="/evento-1.webp" alt="" />
            <div className="p-4">
              <h4 className="text-xl pb-5 font-bold">
                Por qué estudiar Cine de Animación
              </h4>

              <span className="font-semibold">
                Charlas Orientativas: El Futuro del Empleo
              </span>

              <p className="pt-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
                vel, nulla praesentium architecto fugiat maiores quisquam aut
                recusandae voluptatem, dolores eum, sit saepe! Explicabo,
                dignissimos quidem cum rerum similique ab.
              </p>
            </div>
          </div>
          <div className="shadow-lg h-full">
            <img src="/evento-1.webp" alt="" />
            <div className="p-4">
              <h4 className="text-xl pb-5 font-bold">
                Por qué estudiar Cine de Animación
              </h4>

              <span className="font-semibold">
                Charlas Orientativas: El Futuro del Empleo
              </span>

              <p className="pt-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
                vel, nulla praesentium architecto fugiat maiores quisquam aut
                recusandae voluptatem, dolores eum, sit saepe! Explicabo,
                dignissimos quidem cum rerum similique ab.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
