"use client";
import React from "react";
import Notifications from "@/components/dashboard/protected/Notifications";
import InfoDashboard from "@/components/dashboard/protected/InfoDashboard";
import { useUser } from "@/context/UserContext";

const Page = () => {
  const { user } = useUser();
  return (
    <section
      className={
        "w-full h-full min-h-[calc(100svh-60px)] mt-[60px] flex justify-center"
      }
    >
      <div className="max-w-7xl w-full flex items-center flex-col">
        <div className={"py-10 text-center"}>
          <h3 className="font-bold text-xl sm:text-3xl md:text-4xl underline decoration-secondary underline-offset-8">
            Bienvenidos al DV Carreras
          </h3>
        </div>
        <div className={"h-full w-full grid grid-cols-4 p-5"}>
          <Notifications />
          {user && user.role === "alumno" && <InfoDashboard />}
          {user && user.role === "profesor" && <InfoDashboard />}
          {user && user.role === "secretario" && <InfoDashboard />}
        </div>
      </div>
    </section>
  );
};

export default Page;
