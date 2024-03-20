import React from "react";
import Calendar from "@/components/dashboard/home/Calendar";
import { useUser } from "@/context/UserContext";

const InfoDashboard = () => {
  const { user } = useUser();
  const paragraphs = [
    {
      color: "#FF5733",
      title: "Ilustracion grafica",
      commission: "24.1 DWM4AH",
      teacher: "Mariano Ezequiel Mazone",
      text: "Ilustración Digital",
    },
    {
      color: "#6A5ACD",
      title: "Tratamiento Digital de la Imagen I",
      commission: "24.1 DWM4AH",
      teacher: "Mariano Ezequiel Mazone",
      text: "Tratamiento Digital de la Imagen I",
    },
    {
      color: "#8B008B",
      title: "Lógica de la Programación",
      commission: "24.1 DWM4AH",
      teacher: "Mariano Ezequiel Mazone",
      text: "Lógica de la Programación",
    },
    {
      color: "#048f04",
      title: "Diseño Gráfico I",
      commission: "24.1 DWM4AH",
      teacher: "Mariano Ezequiel Mazone",
      text: "Diseño Gráfico I",
    },
    {
      color: "#948018",
      title: "Representación Gráfica",
      commission: "24.1 DWM4AH",
      teacher: "Mariano Ezequiel Mazone",
      text: "Representación Gráfica",
    },
    {
      color: "#4169E1",
      title: "Psicología de la Comunicación",
      commission: "24.1 DWM4AH",
      teacher: "Mariano Ezequiel Mazone",
      text: "Psicología de la Comunicación",
    },
  ];

  return (
    <div className={"col-span-1 p-1"}>
      <Calendar />

      <div className={"pt-10"}>
        {user && user.role === "alumno" && (
          <>
            <h4 className={"text-xl font-semibold pb-3"}>
              Materias inscriptas
            </h4>
            <div>
              <div className={"w-full flex flex-col gap-4 h-[200px]"}>
                {paragraphs.map((paragraph, i) => (
                  <div
                    key={i}
                    className="shadow-xl cursor-pointer hover:shadow-2xl relative z-10"
                  >
                    <div
                      className="w-full h-1"
                      style={{ backgroundColor: paragraph.color }}
                    ></div>
                    <div className="bg-white h-full p-3 flex flex-col sm:flex-row items-center gap-3 justify-between">
                      <p className={"text-xs font-semibold"}>
                        {paragraph.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
        {user && user.role === "profesor" && (
          <>
            <h4 className={"text-xl font-semibold pb-3"}>Materias dictadas</h4>
            <div>
              <div className={"w-full flex flex-col gap-4 h-[200px]"}>
                {paragraphs.map((paragraph, i) => (
                  <div
                    key={i}
                    className="shadow-xl cursor-pointer hover:shadow-2xl relative z-10"
                  >
                    <div
                      className="w-full h-1"
                      style={{ backgroundColor: paragraph.color }}
                    ></div>
                    <div className="bg-white h-full p-3 flex flex-col sm:flex-row items-center gap-3 justify-between">
                      <p className={"text-xs font-semibold"}>
                        {paragraph.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default InfoDashboard;
