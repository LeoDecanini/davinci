import React from "react";
import { FaCircle } from "react-icons/fa6";

const Course = () => {
  const cuatrimestres = [
    {
      titulo: "Primer Año",
      imagen: "/diseno-grafico/studio1.webp",
      cuatrimestres: [
        {
          titulo: "1er. Cuatrimestre",
          asignaturas: [
            "Ilustración Digital",
            "Tratamiento Digital de la Imagen I",
            "Lógica de la Programación",
            "Diseño Gráfico I",
            "Representación Gráfica",
            "Psicología de la Comunicación",
          ],
        },
        {
          titulo: "2do. Cuatrimestre",
          asignaturas: [
            "Guión y Narrativa",
            "Edición de Sonido y Video",
            "Maquetado y Desarrollo Web",
            "Diseño Gráfico II",
            "Tratamiento Digital de la Imagen II",
            "Semiología de la Imagen",
          ],
        },
      ],
    },
    {
      titulo: "Segundo Año",
      imagen: "/diseno-grafico/studio2.webp",
      cuatrimestres: [
        {
          titulo: "3er. Cuatrimestre",
          asignaturas: [
            "Producción y Realización Audiovisual",
            "Posproducción de Sonido y Musicalización",
            "Experiencia de Usuario",
            "Desarrollo de Videojuegos",
            "Diseño y Programación Web I",
            "Animación en 2D y 3D",
          ],
        },
        {
          titulo: "4to. Cuatrimestre",
          asignaturas: [
            "Postproducción y Efectos Visuales I",
            "Cultura y medios de Comunicación",
            "Plataformas de Desarrollo",
            "Marketing Digital",
            "Diseño y Programación Web II",
            "Modelado 3D",
          ],
        },
      ],
    },
    {
      titulo: "Tercer Año",
      imagen: "/diseno-grafico/studio3.webp",
      cuatrimestres: [
        {
          titulo: "5to. Cuatrimestre",
          asignaturas: [
            "Posproducción y Efectos Visuales II",
            "Ética y Deontología Profesional",
            "Desarrollo de Aplicaciones Multiplataforma",
            "Campañas Publicitarias",
            "Texturas, iluminación y Render 3D",
            "Animación de Personajes 3D",
          ],
        },
        {
          titulo: "6to. Cuatrimestre",
          asignaturas: [
            "Desarrollo Multimedial",
            "Realidad Virtual",
            "Emprendimientos de Negocios",
            "Simulación de Fluidos 3D",
            "Proyecto Transmedia",
          ],
        },
      ],
    },
  ];

  return (
    <section className="flex h-full p-2 sm:p-5 md:px-10 py-10 justify-center">
      <div className="max-w-7xl w-full">
        <div>
          <span className="font-bold text-xl">Plan de Estudio</span>
          <div>
            <h3 className="font-bold text-3xl md:text-5xl">
              Carrera de Diseño Multimedial
            </h3>
            <div className={`h-1 max-w-40 md:max-w-60 bg-primary`}></div>
          </div>
        </div>
        <div className={"grid sm:grid-cols-2 md:grid-cols-3 gap-4 pt-5"}>
          {cuatrimestres.map((ano, index) => (
            <>
              <div
                key={index}
                className="bg-white w-full flex flex-col justify-between shadow-lg transition-shadow hover:cursor-pointer hover:shadow-2xl"
              >
                <div>
                  <div className={"w-full py-3 bg-muted to-pink-500 mt-5"}>
                    <h2
                      className={
                        "text-2xl font-bold w-full text-center text-white"
                      }
                    >
                      {ano.titulo}
                    </h2>
                  </div>
                  <img className={"w-full"} src={ano.imagen} alt="" />
                  {ano.cuatrimestres.map((cuatrimestre, i) => (
                    <div key={i} className="bg-white">
                      <div className={"p-5"}>
                        <h3 className="pb-3 text-2xl font-bold">
                          {cuatrimestre.titulo}
                        </h3>
                        <ul>
                          {cuatrimestre.asignaturas.map((asignatura, j) => (
                            <li key={j} className={"flex items-center gap-3"}>
                              <FaCircle className={"w-2 text-primary"} />
                              {asignatura}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div
                        className={`h-0.5 mx-5 bg-gray-200 my-3 ${i === 1 && "hidden"}`}
                      ></div>
                    </div>
                  ))}
                </div>
                <div className="h-2 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Course;
