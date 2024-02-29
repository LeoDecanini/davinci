import React from "react";
import HeroSection from "@/components/shared/HeroSection";
import Info from "@/components/Carreras/info";
import Certifications from "@/components/Carreras/Certifications";
import Because from "@/components/Carreras/Because";
import WhatDoYouLearn from "@/components/Carreras/WhatDoYouLearn";
import About from "@/components/Carreras/About";
import Slider from "@/components/Carreras/Slider";
import Course from "@/components/Carreras/Course";

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
    about: [
      {
        img1: "/recibidos-1.png",
        img2: "/recibidos-2.png",
        img3: "/recibidos-3.png",
        title: "Talleres",
        subtitle: "Talleres Especiales",
        description1:
          "Hoy en día la industria del diseño, la animación y la programación busca profesionales con capacidad de producir. Escuela Da Vinci tiene la mayor infraestructura tecnológica del país y sus egresados son creativos, productores y desarrolladores con capacidad de trabajar utilizando las herramientas de última generación que se piden hoy en el mercado laboral.",
        description2:
          "Cada semestre podés elegir los que más te interesen de entre la oferta específica de ese período. A manera de ejemplo, algunos de los últimos talleres ofrecidos son: efectos especiales y maquillaje de caracterización, iluminación y cámara con Chroma Key, desarrollo mobile con Flex, pre-imprenta y maquetación, tipografía, programación para redes sociales, fotografía, Motion Capture (captura de movimiento), técnicas de encuadernación, construcción del guión de ficción, Real Flow, armado de demo-reel, y animación en Stop-Motion.\n",

        buttonLabel: "Ver mas",
      },
      {
        img1: "/trabajo-1.png",
        img2: "/trabajo-2.png",
        img3: "/trabajo-3.png",
        title: "Trabajo",
        subtitle: "Campo Laboral",
        description1:
          "Estudiar la carrera de Diseño Multimedial en Escuela Da Vinci te convierte en un profesional capaz de trabajar y liderar equipos en importantes agencias de publicidad transmedia, estudios de diseño gráfico, canales de televisión y streaming, posproducción de películas, desarrolladoras de apps, videojuegos, webs, y productos interactivos, departamentos de comunicación de empresas, editoriales, empresas de tecnología y espectáculos, organismos gubernamentales y ONGs.",
        description2:
          "Teniendo en cuenta que las compañías buscan profesionales con una formación orgánica y que muchos de nuestros egresados trabajan de manera independiente, creando sus propias empresas y agencias digitales, Escuela Da Vinci ofrece un programa pensado para que puedas desarrollar tu estilo personal y concretar tus propios proyectos.",
        buttonLabel: "Ver mas",
      },
    ],
    orgullo: [
      {
        titulo: "Facundo Brunella",
        autor: "Leonardo Decanini",
        imagen: "/diseno-grafico/orgullo-1.webp",
        subtitulo: "Egresado de Escuela Da Vinci",
        descripcion:
          "Facundo es actualmente Motion Designer en la prestigiosa agencia 2veinte, que realizó los videoclips animados para Katy Perry, The Strokes y Spotify. Entre sus clientes se encuentra Disney Japan, la Liga Australiana de Fútbol, Adidas y Nike.",
      },
      {
        titulo: "Agustín Sapio",
        autor: "Leonardo Decanini",
        imagen: "/diseno-grafico/orgullo-2.webp",
        subtitulo: "Egresado de Escuela Da Vinci",
        descripcion:
          "Fundó Agencia Ego, su propia agencia de desarrollo y marketing digital, que cuenta con más de 30 empleados en la actualidad. Establecido en Barcelona, fundó The Undefined Project, y cuenta entre sus clientes a Nike, The Coca-Cola Company, Banco Santander Río y más.",
      },
      {
        titulo: "Mauro Serei",
        autor: "Leonardo Decanini",
        imagen: "/diseno-grafico/orgullo-3.webp",
        subtitulo: "Egresado de Escuela Da Vinci",
        descripcion:
          "Fue Lead Animator en 100 Bares, la productura de Juan José Campanella, y en la película Metegol. En Canadá trabajó como Animador y Supervisor de Animación de Personajes para SONY Pictures en películas como Cigüeñas y Angry Birds. Actualmente se estableció en Delaware y fundó su agencia: United Skills.",
      },
      {
        titulo: "Joaquín Braga",
        autor: "Leonardo Decanini",
        imagen: "/diseno-grafico/orgullo-4.webp",
        subtitulo: "Egresado de Escuela Da Vinci",
        descripcion:
          "Director de 3D, Motion Graphics y Animador de Steinbranding para FOX, Hallmark, ESPN, MTV y otros canales de TV. Fundó Animac 3D, su propia agencia de servicios de animación. Su corto Tanguito ganó numerosos premios en festivales alrededor del mundo.",
      },
    ],
  },
];

const Page = ({ params }: any) => {
  const slug = params.slug;
  const carrera = carrerasData.find((carrera) => carrera.slug === slug);

  if (!carrera) {
    return <p>Carrera no encontrada</p>;
  }

  const {
    heroSection,
    info,
    certifications,
    because,
    whatDoYouLearn,
    about,
    orgullo,
  } = carrera;

  return (
    <>
      <HeroSection {...heroSection} />
      <Info data={info} />
      <Certifications data={certifications} />
      <Because because={because} />
      <WhatDoYouLearn whatDoYouLearn={whatDoYouLearn} />
      <About about={about} />
      <Slider orgullo={orgullo} />
      <Course/>
    </>
  );
};

export default Page;
