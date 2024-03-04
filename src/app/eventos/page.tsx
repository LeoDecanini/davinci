"use client";
import React, { useState, useRef } from "react";
import HeroSection from "@/components/shared/HeroSection";
import Introduction from "@/components/cursos/Introduction";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Link from "next/link";

const Page: React.FC<{}> = () => {
  const noticias = [
    {
      id: 1,
      titulo: "Por qué estudiar Diseño Gráfico Artístico Digital",
      autor: "Leonardo Decanini",
      imagen: "/eventos/evento-1.webp",
      subtitulo: "Charlas Orientativas: El Futuro del Empleo",
      link: "/eventos/por-que-estudiar-diseno-grafico-artistico-digital",
      descripcion:
        "La comunicación visual es algo fundamental hoy día, y el mundo del diseño es un factor imprescindible en nuestra vida diaria. Conocé sus aspectos fundamentales y los trabajos que ofrece.",
    },
    {
      id: 2,
      titulo: "Serie de Masterclasses de Historieta",
      autor: "Emilio Gola",
      imagen: "/eventos/evento-2.jpg",
      subtitulo: "4 clases que repasan los grandes géneros del cómic",
      link: "/eventos/serie-de-masterclasses-de-historieta",
      descripcion:
        "No te pierdas una serie de jornadas dedicadas al mundo de la viñeta y el diálogo. Terror, ciencia ficción y autobiografía serán ejes de las primeras clases, ¡y en la última habrá una votación para elegir el tema!",
    },
    {
      id: 3,
      titulo: "El Terror en los Cómics: El Miedo al Silencio",
      autor: "Emilio Gola",
      imagen: "/eventos/evento-3.jpg",
      subtitulo: "Los mundos dentro de este mundo",
      link: "/eventos/el-terror-en-los-comics",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo laborum iusto totam praesentium nam deserunt labore vel ullam laudantium? Veniam incidunt itaque dolorum molestiae officiis maiores provident magni ipsum ex!",
    },/*
    {
      id: 4,
      titulo: "Por qué estudiar Cine y Nuevos Formatos Audiovisuales",
      autor: "Leonardo Decanini",
      imagen: "/eventos/evento-4.webp",
      subtitulo: "Charla Orientativa",
      link: "/eventos/",
      descripcion:
        "El 7º arte tiene nuevas tecnologías, formas de contar historias y estéticas. En esta charla podrás conocer cómo es el plan de estudios para llegar a una industria renovada en todas las pantallas.",
    },
    {
      id: 5,
      titulo: "Por qué estudiar Diseño y Programación de Videojuegos",
      autor: "Emilio Gola",
      imagen: "/eventos/evento-5.jpg",
      subtitulo: "Charlas Orientativas: El Futuro del Empleo",
      link: "/eventos/",
      descripcion:
        "Te invitamos a conocer las salidas laborales de la industria más grande del mundo, una totalmente interdisciplinaria y que rompe una y otra vez las fronteras de lo audiovisual.",
    },
    {
      id: 6,
      titulo: "Por qué estudiar Diseño Multimedial",
      autor: "Emilio Gola",
      imagen: "/eventos/evento-6.jpg",
      subtitulo: "Charlas Orientativas: El Futuro del Empleo",
      link: "/eventos/",
      descripcion:
        "Una carrera fundamental, versátil y con posibilidad de llegar a cualquier tipo de pantalla. Si querés conocerla, conectate a esta charla y consultá a nuestros coordinadores.",
    },*/
  ];
  const ref = useRef<any>(null);
  const eventos = {
    introduction: [
      "Escuela Da Vinci ofrece ciclos de eventos gratuitos en diversas temáticas vinculadas con diseño, tecnología, arte digital, programación, web, diseño gráfico editorial y publicitario, cine, animación 3d y 2d, videojuegos, diseño de indumentaria, edición de video y sonido, social media y marketing, entre otras.",
      "La entrada es gratuita con inscripción previa online. Para inscribirte o informarte más acerca de un evento en particular, seleccionalo en la lista de abajo.",
      "El acceso es por orden de llegada y hasta agotar el espacio de la sala. Les agradecemos su colaboración.",
    ],
  };

  const eventosPorPagina = 2;
  const [paginaActual, setPaginaActual] = useState(1);

  const indiceInicio = (paginaActual - 1) * eventosPorPagina;
  const eventosPagina = noticias.slice(
    indiceInicio,
    indiceInicio + eventosPorPagina,
  );

  const totalPaginas = Math.ceil(noticias.length / eventosPorPagina);

  const cambiarPagina = (pagina: number) => {
    if (pagina >= 1 && pagina <= totalPaginas) {
      setPaginaActual(pagina);
      if (ref.current) {
        const elementPosition = ref?.current?.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - 130;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <>
      <HeroSection
        backgroundImage="/eventos/fondo-eventos.webp"
        title={`Eventos Gratuitos`}
        subtitle={
          "Sumerjete en las charlas y eventos orientativos que tenemos para ofrecerte."
        }
        buttonText="Contactanos"
        instinctText="Delivering beautiful digital products"
      />
      <Introduction introduction={eventos.introduction} />
      <section className="flex h-full relative bg-[url('/fondo-noticias-1.webp')] bg-no-repeat bg-cover bg-center px-2 sm:px-5 md:px-10 py-10 justify-center">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div ref={ref} className="max-w-7xl w-full relative">
          <div>
            <h3 className="font-bold text-3xl md:text-5xl">Eventos</h3>
            <div className="h-1 max-w-20 md:max-w-40 bg-primary"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-5 pt-10">
            {eventosPagina.map((noticia) => (
              <Link
                href={noticia.link}
                className="bg-white shadow-lg transition-shadow hover:cursor-pointer hover:shadow-2xl"
                key={noticia.id}
              >
                <img
                  className={"w-full"}
                  src={noticia.imagen}
                  alt={noticia.titulo}
                />
                <div className="p-5 bg-white">
                  <h3 className="pb-5 text-2xl font-bold">{noticia.titulo}</h3>
                  <span className="font-semibold text-xl">
                    {noticia.subtitulo}
                  </span>
                  <p className="pt-5">{noticia.descripcion}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className={"pt-10"}>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => cambiarPagina(paginaActual - 1)}
                  />
                </PaginationItem>
                {Array.from({ length: totalPaginas }, (_, i) => (
                  <PaginationItem key={i}>
                    <PaginationLink
                      onClick={() => {
                        cambiarPagina(i + 1);
                      }}
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext
                    onClick={() => cambiarPagina(paginaActual + 1)}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
