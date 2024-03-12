import React from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import Link from "next/link";
import BannerMateria from "@/components/dashboard/academico/materia/BannerMateria";
import { CiCirclePlus } from "react-icons/ci";
import { useUser } from "@/context/UserContext";
import AddTask from "@/components/dashboard/trabajos/AddTask";

const Material = ({ trabajos }: any) => {
  const currentTime = Date.now();
  const { user } = useUser();
  return (
    <div>
      <div className={"pt-10"}>
        <BannerMateria tablon={false} trabajo={false} material={true} />
      </div>
      <div className={`pt-10 max-w-5xl mx-auto`}>
        <div className={`w-full`}>
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
                    <div className={"flex gap-4 item center w-full"}>
                      <h3 className={"text-xl font-semibold w-full"}>
                        {trabajo.title}
                      </h3>
                      <p className={"w-full text-xl text-end"}>
                        {trabajo.infodate} {trabajo.date}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Material;
