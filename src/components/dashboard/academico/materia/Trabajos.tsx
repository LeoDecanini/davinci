import React from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import Link from "next/link";
import BannerMateria from "@/components/dashboard/academico/materia/BannerMateria";
import AddTask from "@/components/dashboard/trabajos/AddTask";
import { useUser } from "@/context/UserContext";

const Trabajos = ({ paragraphs, trabajos, pending }: any) => {
  const currentTime = Date.now();
  const { user } = useUser();
  return (
    <div>
      <div className={"pt-10"}>
        <BannerMateria tablon={false} trabajo={true} material={false} />
      </div>
      <div
        className={`pt-10 ${pending ? "grid lg:grid-cols-4" : " max-w-5xl mx-auto"}`}
      >
        <div className={`${pending ? "col-span-3 px-2 sm:px-5" : "w-full"}`}>
          {trabajos.map((grupoTrabajos: any, index: any) => (
            <div key={index} className={` ${index > 0 ? "py-5" : "pb-5"}`}>
              <div className={"flex items-center gap-5"}>
                <h3 className={"text-3xl font-semibold"}>
                  {grupoTrabajos.title}
                </h3>
                {user && user.role !== "alumno" && <AddTask />}
              </div>
              <div className={"h-1 w-28 bg-[#FF5733] mb-5"}></div>
              <div className={"flex flex-col gap-5"}>
                {grupoTrabajos.trabajos.map((trabajo: any, i: any) => (
                  <Link
                    href={trabajo.link}
                    key={i}
                    className={
                      "shadow p-3 hover:shadow-2xl hover:transition-shadow hover:duration-300 cursor-pointer rounded-md flex items-center gap-2"
                    }
                  >
                    <div className={"p-3 rounded-full bg-[#FF5733]"}>
                      <IoDocumentTextOutline
                        className={"text-2xl bg-[#FF5733] text-white"}
                      />
                    </div>
                    <div className={"flex flex-col sm:flex-row gap-4 item center w-full"}>
                      <h3 className={"text-xl font-semibold w-full"}>
                        {trabajo.title}
                      </h3>
                      <p className={"w-full text-xl sm:text-end"}>
                        {trabajo.infodate} {trabajo.date}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        {pending && (
          <div className={"hidden lg:block col-span-1"}>
            <h4 className={"text-xl font-semibold pb-3"}>Próximas entregas</h4>
            <div>
              <div className={"w-full flex flex-col gap-4 h-[200px]"}>
                {paragraphs.map((paragraph: any, i: any) => (
                  <div
                    key={i}
                    className={`shadow-xl cursor-pointer hover:shadow-2xl relative z-10 ${
                      paragraph.date < currentTime
                        ? "bg-red-500 text-red-500"
                        : "bg-orange-500"
                    }`}
                  >
                    <div className={`w-full h-1`}></div>
                    <div className="bg-white h-full p-3 flex flex-col sm:flex-row items-center gap-3 justify-between">
                      <p className={"text-xs font-semibold"}>
                        {paragraph.date < currentTime
                          ? `Entrega atrasada | ${paragraph.title}`
                          : `${paragraph.title}`}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Trabajos;
