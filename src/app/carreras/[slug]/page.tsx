import React from "react";
import HeroSection from "@/components/shared/HeroSection";
import Info from "@/components/Carreras/DiseñoMultimedial/info";
import Certifications from "@/components/Carreras/DiseñoMultimedial/Certifications";
import Because from "@/components/Carreras/DiseñoMultimedial/Because";
import WhatDoYouLearn from "@/components/Carreras/DiseñoMultimedial/WhatDoYouLearn";

const carrerasData = [
  {
    name: "Diseño Multimedia",
    slug: "diseno-multimedial",
    heroSection: {
      backgroundImage: "/Carrera-de-Diseño-Multimedia_01.webp",
      title: `Carrera de Diseño Multimedia`,
      subtitle: "Elegí Cómo Estudiar: Modalidad Presencial o A Distancia.",
      buttonText: "Ver charlas informativas",
      instinctText: "SEGUÍ TU INSTINTO",
    },
    info: [
      {
        title:
          "20% Off en Inscripción. Cursá Online o Presencial. Inicio en Marzo. ¡Consultanos!",
        description:
          "Descuento para alumnos ingresantes vigente hasta el 9 de Marzo.",
        color: "primary",
        buttonText: "contactanos",
      },
      {
        title: "Por qué estudiar Diseño Multimedial.",
        description:
          "Charlas Orientativas: El Futuro del Empleo Fecha: Jueves 14 de Marzo a las 18:30",
        color: "blue-700",
        buttonText: "Ver charla",
      },
    ],
    certifications: {
      sectionTitle: "Certificaciones",
      certificationsTitle: "Títulos y Certificaciones",
      certificationsDividerColor: "primary",
      data: [
        {
          title: "Título Oficial: Diseñador Multimedial (3 años)",
          description: "Res. 16/SSPECT/2019 - Ministerio de Educación.",
        },
        {
          title:
            "Certificación Intermedia: Certificación Profesional en Diseño Digital y Producción Audiovisual (3 cuatrimestres)",
        },
        {
          title:
            "Licenciaturas: Licenciatura en Comunicación Digital e Interactiva.",
          description:
            "Articulación Universidad Católica Argentina (+1 año) entre otras.",
        },
      ],
    },
    because: {
      title: "Por Qué Estudiar Multimedia",
      reasons: [
        {
          title: "Alta Demanda en el Mercado Laboral",
          description: [
            "La carrera de Diseño Multimedial en Escuela Da Vinci es altamente demandada en el mercado laboral actual, ofreciendo un amplio abanico de oportunidades profesionales tanto en empresas como en medios digitales.",
            "Con un enfoque tecnológico e interdisciplinario, nuestro programa combina conocimientos de diversas áreas creativas y técnicas, preparando a los estudiantes para destacarse en el siglo XXI.",
            "Nuestros profesores, destacados profesionales en actividad, guían a los alumnos en diversas habilidades, desde comunicación transmedia hasta desarrollo de aplicaciones y animación 3D. Además, hemos incorporado Inteligencia Artificial para agilizar procesos creativos. Da Vinci ofrece un entorno estimulante y equipamiento tecnológico avanzado, junto con un sólido sistema de conexiones laborales.",
          ],
        },
        {
          title: "Modalidades de Cursada",
          description: [
            "Online o Presencial. Vos elegís. En el caso de estudiar la carrera a distancia, siempre es con clases en vivo, acceso virtual a materiales, y seguimiento personalizado. También podés cursar en la sede de Escuela Da Vinci en pleno centro de Buenos Aires, Argentina.",
          ],
        },
        {
          title:
            "Por Qué Multimedia es Considerada una de las Carreras del Futuro",
          description: [
            "Según el World Economic Forum, habilidades como la creatividad, la resolución de problemas y el trabajo en equipo serán fundamentales en los próximos años, destacando la importancia de la formación en áreas digitales. La demanda de artistas multimediales se proyecta a aumentar significativamente en la próxima década, superando la ya alta demanda actual en un 15%.",
            "Durante la pandemia de COVID-19, el trabajo remoto y las habilidades tecnológicas especializadas se volvieron esenciales, resaltando la relevancia de la educación digital. El campo del multimedia, al ser el eje central de la creación de contenido audiovisual para diversos formatos, desde publicidad hasta Realidad Virtual y Aumentada, ofrece oportunidades en una amplia gama de industrias. Además, nuestro equipamiento tecnológico de vanguardia proporciona un entorno propicio para la experimentación y el aprendizaje.",
          ],
        },
        {
          title: "Prácticas Profesionales Durante la Carrera",
          description: [
            "Nuestros alumnos participan en prácticas profesionales con empresas líderes de la industria, como Nvidia, MercadoLibre y Globant, donde adquieren experiencia invaluable trabajando junto a profesionales establecidos. Esta exposición directa al mundo laboral real proporciona una formación integral que complementa su aprendizaje académico.",
            "Para aquellos que buscan ingresar rápidamente al mercado laboral, nuestro programa de Diseño Multimedial ofrece una alternativa intensiva y actualizada. Además de obtener habilidades prácticas y teóricas, nuestro título oficial abre la puerta para seguir estudios superiores en universidades asociadas y obtener una Licenciatura.",
          ],
        },
      ],
      videoSrc: "https://www.youtube.com/embed/2ql5H_dz-G4",
      images: [
        "/galeria_home_1.webp",
        "/galeria_home_2.webp",
        "/galeria_home_3.webp",
        "/galeria_home_4.webp",
        "/galeria_home_5.webp",
        "/galeria_home_6.webp",
      ],
    },
    whatDoYouLearn: [
      {
        title: "Diseño Gráfico e Ilustración Digital",
        image: "/diseno-grafico/1.jpg",
        description:
          "Explotá al máximo tus capacidades creativas con el uso de tabletas Wacom, y aprendé lenguaje visual con software especializado como Adobe Photoshop e Illustrator, para la realización de composiciones digitales, fotomontajes y retoques fotográficos profesionales.",
      },
      {
        title: "Desarrollo de Páginas Web y Apps",
        image: "/diseno-grafico/2.jpg",
        description:
          "Aprendé a programar sitios web y aplicaciones para celulares, con herramientas como HTML5, CSS3, Javascript, PHP, Wordpress y Jquery Mobile, para trabajar, emprender y desarrollarte en el mundo digital actual.",
      },
      {
        title: "Efectos Visuales y Modelado y Animación 3D",
        image: "/diseno-grafico/3.jpeg",
        description:
          "Realizá Motion Graphics combinando After Effects y animación 3D avanzada para televisión, publicidad, web y cine. Descubrí cómo realizar Video Mapping sobre superficies reales, como fachadas de edificios, utilizando técnicas innovadoras.",
      },
      {
        title: "Animación con Motion Capture",
        image: "/diseno-grafico/4.jpeg",
        description:
          "Escuela Da Vinci cuenta con uno de los pocos y más completos equipos de MOCAP (Motion Capture o Captura de Movimiento) para que aprendas en una situación real de captura de movimiento para videojuegos, animación y cine, entre otras áreas.",
      },
      {
        title: "Realidad Aumentada y Realidad Virtual 360",
        image: "/diseno-grafico/5.jpeg",
        description:
          "Realizá una experiencia interactiva con HTC VIVE (lentes de RV), en un entorno virtual con apariencia real. Aprendé a crear aplicaciones en realidad virtual y realidad aumentada usando Unity, a implementar campañas 360 y desarrollos orientados al entretenimiento, publicidad y educación haciendo una experiencia totalmente inmersiva.",
      },
      {
        title: "Marketing Digital y Social Media",
        image: "/diseno-grafico/6.jpeg",
        description:
          "Desarrollá campañas digitales para Google Ads, Instagram, Facebook, Twitter, Linkedin y Youtube, y aprendé a implementar un plan estratégico publicitario de manera integral, SEO y cómo tener presencia en redes y medios. Colaborá con reconocidos directores de arte, especializados en producciones digitales multiplataforma, en nuestras prácticas profesionales.",
      },
    ],
  },
];

const Page = ({ params }: any) => {
  const slug = params.slug;
  const carrera = carrerasData.find((carrera) => carrera.slug === slug); // Buscar la carrera por el slug

  if (!carrera) {
    return <p>Carrera no encontrada</p>;
  }

  const { heroSection, info, certifications, because, whatDoYouLearn } =
    carrera;

  return (
    <>
      <HeroSection {...heroSection} />
      <Info data={info} />
      <Certifications data={certifications} />
      <Because because={because} />
      <WhatDoYouLearn whatDoYouLearn={whatDoYouLearn} />
    </>
  );
};

export default Page;
