import React from "react";
import { FaCircle } from "react-icons/fa6";

const Licenciatures = ({ licenciatures }: any) => {
  return (
    <section className="flex h-full relative bg-[url('/fondo-licenciaturas.webp')] bg-gray-50 bg-no-repeat bg-cover bg-center  px-2 sm:px-5 md:px-10 py-10 justify-center">
      <div className={"max-w-7xl w-full"}>
        <div>
          <h3 className="font-bold text-3xl md:text-5xl">
            {licenciatures.title}
          </h3>
          <div className={`h-1 max-w-40 md:max-w-60 bg-primary`}></div>
        </div>
        <div className={"gap-6 flex flex-col pt-6"}>
          <p>{licenciatures.description}</p>

          <p>{licenciatures.institutionsTitle}</p>

          <ul className={"pl-5 flex flex-col gap-3"}>
            {licenciatures.institutions.map((institution: any, index: any) => (
              <li key={index} className={"flex items-center gap-3"}>
                <FaCircle className={"w-2 text-primary"} />
                <span className={"font-bold"}>{institution.name}</span>: {institution.program} (
                {institution.duration})
              </li>
            ))}
          </ul>

          <p>{licenciatures.discountInfo}</p>
        </div>
      </div>
    </section>
  );
};

export default Licenciatures;
