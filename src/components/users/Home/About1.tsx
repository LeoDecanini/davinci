import React from "react";
import Link from "next/link";

const About1 = () => {
  const sectionsInfo = [
    {
      img1: "/recibidos-1.png",
      img2: "/recibidos-2.png",
      img3: "/recibidos-3.png",
      title: "Why Choose Us",
      subtitle: "Títulos y Licenciaturas",
      description1:
        "Hoy en día la industria del diseño, la animación y la programación busca profesionales con capacidad de producir. Escuela Da Vinci tiene la mayor infraestructura tecnológica del país y sus egresados son creativos, productores y desarrolladores con capacidad de trabajar utilizando las herramientas de última generación que se piden hoy en el mercado laboral.",
      description2:
        "Son carreras especializadas, de rápida inserción laboral, tanto en el mercado nacional como en el internacional.\n" +
        "\n" +
        "Escuela Da Vinci ofrece Títulos Oficiales y ahora también Certificaciones Intermedias Oficiales en sus Carreras, además de convenios con las mejores instituciones de carreras universitarias, para que obtengas tu Licenciatura cursando pocas materias más.",
      buttonLabel: "Ver mas",
    },
    {
      img1: "/trabajo-1.png",
      img2: "/trabajo-2.png",
      img3: "/trabajo-3.png",
      title: "Why Choose Us",
      subtitle: "Inserción Laboral: las Carreras del Futuro",
      description1:
        "Las varias áreas de estudio que ofrecemos en Escuela Da Vinci son ámbitos de desarrollo creativo donde lo digital y lo virtual se conecta al diseño y el arte tradicional y a su aplicación en el mundo real. Las seis carreras que se estudian en Da Vinci son las llamadas “carreras del futuro” porque en todas ellas se evidencia un crecimiento exponencial en los puestos de trabajo cubiertos por nuestros egresados, y porque el crecimiento a futuro es aún mucho mayor.",
      description2:
        "Las carreras que ofrece Escuela Da Vinci tienen un alto grado de especialización y una rápida inserción laboral, tanto en el mercado nacional como en el internacional. En paralelo a las clases, los alumnos toman parte en proyectos de empresas en actividad por medio de prácticas profesionalizantes, durante las cuales tienen la oportunidad de trabajar con establecidos profesionales de la industria, aprendiendo de experiencias que sólo se obtienen en situaciones de trabajo reales.",
      buttonLabel: "Ver mas",
    },
  ];

  return (
    <section className={"py-10 flex flex-col gap-5"}>
      {sectionsInfo.map((section, index) => (
        <div key={index} className={`overflow-hidden`}>
          <div className="container mx-auto">
            <div
              className={`flex ${
                index % 2 !== 0 ? "flex-row-reverse" : ""
              } flex-wrap items-center justify-between -mx-4`}
            >
              <div className="w-full sm:px-20 md:px-40 lg:px-0 lg:w-6/12">
                <div className="flex justify-center items-center -mx-3 sm:-mx-4">
                  <div className="w-full px-3 sm:px-4 xl:w-1/2">
                    <div className="py-3 sm:py-4">
                      <img
                        src={section.img1}
                        alt=""
                        className="w-full rounded-2xl"
                      />
                    </div>
                    <div className="py-3 sm:py-4">
                      <img
                        src={section.img2}
                        alt=""
                        className="w-full rounded-2xl"
                      />
                    </div>
                  </div>
                  <div className="w-full px-3 sm:px-4 xl:w-1/2">
                    <div className="relative z-10 my-4">
                      <img
                        src={section.img3}
                        alt=""
                        className="w-full rounded-2xl"
                      />
                      <span className="absolute -right-7 -bottom-7 z-[-1]">
                        <img src="/circulo.svg" alt="" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full px-0 md:px-10 xl:px-0 lg:w-1/2 xl:w-5/12">
                <div className="mt-10 lg:mt-0">
                  <span className="block mb-4 text-lg font-semibold text-secondary">
                    {section.title}
                  </span>
                  <h2 className="mb-5 !text-5xl font-bold sm:text-[40px]/[48px]">
                    {section.subtitle}
                  </h2>
                  <p className="mb-5 text-base">{section.description1}</p>
                  <p className="mb-8 text-base">{section.description2}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default About1;
