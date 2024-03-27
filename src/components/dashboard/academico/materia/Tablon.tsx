import React from "react";
import BannerMateria from "@/components/dashboard/academico/materia/BannerMateria";
import SearchInput from "@/components/dashboard/academico/SearchInput";
import Notificaciones from "@/components/dashboard/academico/materia/Notificaciones";
import Calendar from "@/components/dashboard/home/Calendar";

const Tablon = () => {
  const task = [
    {
      pending: true,
      title: "Entrega de TP1",
      date: 1709823000000,
    },
    {
      pending: true,
      title: "Bocetos para proyecto de ilustración",
      date: 1709823000000,
    },
    {
      pending: true,
      title: "Digitalización de bocetos",
      date: 1709995800000,
    },
    {
      pending: true,
      title: "Correcciones finales de ilustraciones",
      date: 1709995800000,
    },
    {
      pending: true,
      title: "Entrega final de proyecto de ilustración",
      date: 1709995800000,
    },
  ];

  const currentTime = Date.now();
  console.log(currentTime);

  return (
    <div className={"grid lg:grid-cols-4 gap-5"}>
      <div className={"pt-7 col-span-3"}>
        <BannerMateria tablon={true} trabajo={false} material={false} />
        <div className={"pt-5 pb-4"}>
          <SearchInput />
        </div>
        <Notificaciones />
      </div>
      <div className={"hidden lg:block col-span-1"}>
        <div className={"pb-5"}>
          <Calendar />
        </div>
        <h4 className={"text-xl font-semibold pb-3"}>Próximas entregas</h4>
        <div>
          <div className={"w-full flex flex-col gap-4 h-[200px]"}>
            {task.map((task: any, i: any) => (
              <div
                key={i}
                className={`shadow-xl cursor-pointer hover:shadow-2xl relative z-10 ${
                  task.date < currentTime
                    ? "bg-red-500 text-red-500"
                    : "bg-orange-500"
                }`}
              >
                <div className={`w-full h-1`}></div>
                <div className="bg-white h-full p-3 flex flex-col sm:flex-row items-center gap-3 justify-between">
                  <p className={"text-xs font-semibold"}>
                    {task.date < currentTime
                      ? `Entrega atrasada | ${task.title}`
                      : `${task.title}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tablon;
