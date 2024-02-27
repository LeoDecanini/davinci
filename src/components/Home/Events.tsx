import React from "react";

const Events = () => {
  const eventos = [
    {
      imagen: "/evento-1.webp",
      titulo: "Por qué estudiar Cine de Animación",
      descripcion:
        "Gracias a las nuevas tecnologías, la animación expande su alcance y diversifica su público. Conocé una carrera cuyas tareas profesionales se pueden realizar tanto de manera presencial como a distancia.",
    },
    {
      imagen: "/evento-2.jpg",
      titulo: "Por qué estudiar Analista de Sistemas",
      descripcion:
        "El dato, el software y la seguridad informática han transformado los modelos empresariales. En ese marco, el analista de sistemas es un rol que no puede faltar. Conocelo en esta charla.",
    },
    {
      imagen: "/evento-3.jpg",
      titulo: "Por qué estudiar Diseño y Programación Web",
      descripcion:
        "Descubrí una carrera que te permite crear las mejores experiencias digitales para el mundo de hoy y el de mañana. Consultá todo acerca de la creciente salida laboral en el campo de la programación web.",
    },
  ];

  return (
    <section className="flex h-full py-10 justify-center">
      <div className="max-w-7xl w-full">
        <div>
          <span className="font-bold text-xl">Eventos</span>
          <h3 className="font-bold text-5xl pt-5">
            Charlas Informativas y Eventos Gratuitos
          </h3>
          <p className="py-5 max-w-5xl">
            Conocé los eventos que organizamos durante todo el año, abiertos al
            público y con entrada gratuita: Charlas Informativas de Carreras,
            Conferencias, Workshops, Masterclasses, Invitados Internacionales,
            Torneos y más...
          </p>
          <button className="px-8 py-3 font-bold text-white bg-secondary hover:bg-[#b30c67]">
            Ver eventos
          </button>
        </div>
        <div className="grid grid-cols-3 gap-5 pt-10">
          {eventos.map((evento, index) => (
            <div
              className="shadow-lg h-full transition-shadow hover:cursor-pointer hover:shadow-2xl"
              key={index}
            >
              <img src={evento.imagen} alt="" />
              <div className="p-4">
                <h4 className="text-xl pb-5 font-bold">{evento.titulo}</h4>

                <span className="font-semibold">
                  Charlas Orientativas: El Futuro del Empleo
                </span>

                <p className="pt-5">{evento.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
