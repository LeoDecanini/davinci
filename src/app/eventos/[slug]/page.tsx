import React from "react";
import eventosData from "@/models/eventosData.json";
import { FaRegClock } from "react-icons/fa";
import { BsCalendarDate } from "react-icons/bs";
import { RiMapPin2Line } from "react-icons/ri";
import Link from "next/link";
import Inscripcion from "@/components/users/eventos/Inscripcion";

const Page = ({ params }: any) => {
  const slug = params.slug;
  const eventos = eventosData.find((evento) => evento.slug === slug);
  if (!eventos) {
    return <p>Carrera no encontrada</p>;
  }
  const { imagen, info } = eventos;

  return (
    <>
      <img
        className={"h-[80svh] object-cover w-full h-full mt-[94px]"}
        src={imagen}
        alt="evento 1"
      />
      <section className="flex h-full p-2 sm:p-5 md:p-10 justify-center">
        <div className="max-w-7xl w-full">
          <div className={"pb-10"}>
            <span className="font-bold text-xl">Eventos</span>
            <div>
              <h3 className="font-bold text-3xl md:text-5xl">{info.title}</h3>
              <div className="h-1 max-w-40 md:max-w-[500px] bg-primary"></div>
            </div>
            <div className={"pt-5"}>
              <h4 className="font-bold text-xl md:text-2xl">{info.subtitle}</h4>
              {info.text.map((text, index) => (
                <p key={index} className={"pt-3"}>
                  {text}
                </p>
              ))}
            </div>
          </div>
          <div
            className={
              "px-20 py-10 border border-secondary flex justify-center items-center gap-20"
            }
          >
            <div className={"flex items-center gap-2 text-2xl"}>
              <FaRegClock className={"text-secondary"} />
              {info.datos.horaio}
            </div>
            <div className={"flex items-center gap-2 text-2xl"}>
              <BsCalendarDate className={"text-secondary"} />
              {info.datos.dia}
            </div>
            <div className={"flex items-center gap-2 text-2xl"}>
              <RiMapPin2Line className={"text-secondary"} />
              {info.datos.lugar}
            </div>
          </div>

          {info.inscripcion && (
            <div className={"pt-5"}>
              <h4 className="font-bold text-xl md:text-2xl">
                Como registrarse
              </h4>
              {info.inscripcion.map((text, index) => (
                <p key={index} className={"pt-3"}>
                  {text}
                </p>
              ))}
            </div>
          )}

          {info.extra && (
            <div className={"pt-5"}>
              <h4 className="font-bold text-xl md:text-2xl">
                {info.extra.title}
              </h4>

              <div className={"pt-5"}>
                <Link
                  className={"text-secondary font-bold hover:underline"}
                  href={info.extra.url}
                >
                  {info.extra.link}
                </Link>
                {info.extra.text.map((text, index) => (
                  <p key={index} className={"pt-3"}>
                    {text}
                  </p>
                ))}
              </div>
            </div>
          )}

          {info.cronograma && (
            <div className={"pt-5"}>
              <h4 className="font-bold text-xl md:text-3xl">Cronograma</h4>
              <div className={"flex justify-center items-center w-full h-full"}>
                <div className={"pt-10 max-w-4xl w-full"}>
                  <img className={"w-full"} src={info.cronograma.img} alt="" />
                </div>
              </div>
              {info.cronograma.datos.map((info, index) => (
                <div key={index} className={"pt-10"}>
                  <h5 className={"font-bold text-xl md:text-2xl"}>
                    <span className={"text-secondary"}>►</span> {info.title}
                  </h5>
                  <p className={"pt-5"}>{info.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <Inscripcion info={info} />
    </>
  );
};

export default Page;
