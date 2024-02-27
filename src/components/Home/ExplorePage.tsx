import React from "react";

const ExplorePage = () => {
  const noticias = [
    {
      id: 1,
      imageSrc: "/noticia-2.jpg",
      title: "Noticia 1",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit risus conubia magnis.",
    },
    {
      id: 2,
      imageSrc: "/noticia-2.jpg",
      title: "Noticia 2",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit risus conubia magnis.",
    },
    {
      id: 3,
      imageSrc: "/noticia-2.jpg",
      title: "Noticia 3",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit risus conubia magnis.",
    },
    {
      id: 44,
      imageSrc: "/noticia-2.jpg",
      title: "Noticia 1",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit risus conubia magnis.",
    },
    {
      id: 5,
      imageSrc: "/noticia-2.jpg",
      title: "Noticia 2",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit risus conubia magnis.",
    },
    {
      id: 6,
      imageSrc: "/noticia-2.jpg",
      title: "Noticia 3",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit risus conubia magnis.",
    },
  ];

  return (
      <section className="flex px-2 sm:px-5 md:px-10 py-10 justify-center">
        <div className="max-w-7xl w-full">
          <div>
            <span className="font-bold text-xl">Conoce</span>
            <div>
              <h3 className="font-bold text-3xl md:text-5xl">
                Explorá Da Vinci y sus organizaciones.
              </h3>
              <div className="h-1 max-w-40 md:max-w-[500px] bg-primary"></div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 pt-10">
            {noticias.map((noticia) => (
                <div key={noticia.id} className="relative mb-12">
                  <div className="overflow-hidden rounded-[10px]">
                    <img src={noticia.imageSrc} alt="portfolio" className="w-full" />
                  </div>
                  <div className="relative shadow-xl z-10 mx-2 -mt-10 rounded-lg bg-white dark:bg-dark-2 py-6 px-3 text-center shadow-portfolio dark:shadow-box-dark">
                    <h3 className="text-dark dark:text-white text-3xl font-bold">{noticia.title}</h3>
                    <p className="text-left pt-3">{noticia.description}</p>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default ExplorePage;
