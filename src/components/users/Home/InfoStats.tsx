import React from "react";

const InfoStats = () => {
    const statsData = [
        { value: "+10.500 mts2", label: "en Av. Corrientes" },
        { value: "+6.800", label: "estudiantes activos" },
        { value: "+300", label: "profesores" },
        { value: "+1.200", label: "computadoras" },
        { value: "+80", label: "eventos anuales" },
        { value: "+30", label: "años enseñando" },
    ];

    return (
        <section className="flex h-full bg-black/80 px-2 sm:px-5 md:px-10 py-10 justify-center w-full">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">
                {statsData.map((stat, index) => (
                    <div key={index} className="text-center">
                        <p className="text-primary font-extrabold text-5xl">{stat.value}</p>
                        <span className="text-white font-bold">{stat.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default InfoStats;
