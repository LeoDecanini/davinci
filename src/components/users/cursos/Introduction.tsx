import React from "react";

const Introduction = ({ introduction }: any) => {
  return (
    <section className="flex h-full p-2 sm:p-5 md:px-10 py-10 justify-center">
      <div className="max-w-7xl w-full">
        <div>
          <div>
            <h3 className="font-bold text-3xl md:text-5xl">Introducción</h3>
            <div className={`h-1 max-w-20 md:max-w-60 bg-primary`}></div>
          </div>
        </div>
        <div className={"flex justify-center"}>
          <div className="pt-10 pr-10 flex flex-col justify-center gap-4">
            {introduction && introduction.map((text: any, i: any) => (
                <p key={i}>{text}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
