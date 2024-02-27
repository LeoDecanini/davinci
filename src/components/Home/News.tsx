import React from "react";

const News = () => {
  const noticias = [
    {
      id: 1,
      titulo: "Carreras: este es el equipo mínimo...",
      autor: "Leonardo Decanini",
      imagen: "/noticia-1.webp",
      subtitulo: "La base informática fundamental",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo laborum iusto totam praesentium nam deserunt labore vel ullam laudantium? Veniam incidunt itaque dolorum molestiae officiis maiores provident magni ipsum ex!",
    },
    {
      id: 2,
      titulo: "Review de Días perfectos",
      autor: "Emilio Gola",
      imagen: "/noticia-2.jpg",
      subtitulo: "Los mundos dentro de este mundo",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo laborum iusto totam praesentium nam deserunt labore vel ullam laudantium? Veniam incidunt itaque dolorum molestiae officiis maiores provident magni ipsum ex!",
    },
  ];

  return (
    <section className="flex h-full relative bg-[url('/fondo-noticias-1.webp')] bg-no-repeat bg-cover bg-center pb-10 justify-center">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="max-w-7xl w-full relative">
        <div>
          <h3 className="font-bold text-5xl pt-10">Noticias</h3>
          <div className="h-1 max-w-40 bg-primary"></div>
        </div>
        <div className="grid grid-cols-2 gap-5 pt-10">
          {noticias.map((noticia) => (
            <div
              className="bg-white shadow-lg transition-shadow hover:cursor-pointer hover:shadow-2xl"
              key={noticia.id}
            >
              <img src={noticia.imagen} alt={noticia.titulo} />
              <div className="p-5 bg-white">
                <h3 className="pb-5 text-2xl font-bold">{noticia.titulo}</h3>
                <span className="font-semibold text-xl">
                  {noticia.subtitulo}
                </span>
                <p className="pt-5">{noticia.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
