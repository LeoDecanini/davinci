import React from "react";
import { FaCircle } from "react-icons/fa6";

const Course = ({ course }: any) => {
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
          {course.map((ano: any, index: any) => (
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
                  {ano.cuatrimestres.map((cuatrimestre: any, i: any) => (
                    <div key={i} className="bg-white">
                      <div className={"p-5"}>
                        <h3 className="pb-3 text-2xl font-bold">
                          {cuatrimestre.titulo}
                        </h3>
                        <ul>
                          {cuatrimestre.asignaturas.map((asignatura: any, j: any) => (
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
