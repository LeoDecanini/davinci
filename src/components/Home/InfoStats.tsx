import React from "react";

const InfoStats = () => {
  return (
    <section className="flex h-full bg-black/80 py-10 justify-center w-full">
        <div className="grid grid-cols-3 gap-10 w-full max-w-7xl">
            <div className="text-center">
                <p className="text-primary font-extrabold text-5xl">+10.500 mts2</p>
                <span className="text-white font-bold">en Av. Corrientes</span>
            </div>
            <div className="text-center">
                <p className="text-primary font-extrabold text-5xl">+6.800</p>
                <span className="text-white font-bold">estudiantes activos</span>
            </div>
            <div className="text-center">
                <p className="text-primary font-extrabold text-5xl">+300</p>
                <span className="text-white font-bold">profesores</span>
            </div>
            <div className="text-center">
                <p className="text-primary font-extrabold text-5xl">+1.200</p>
                <span className="text-white font-bold">computadoras</span>
            </div>
            <div className="text-center">
                <p className="text-primary font-extrabold text-5xl">+80</p>
                <span className="text-white font-bold">eventos anuales</span>
            </div>
            <div className="text-center">
                <p className="text-primary font-extrabold text-5xl">+30</p>
                <span className="text-white font-bold">años enseñando</span>
            </div>
        </div>
    </section>
  );
};

export default InfoStats;
