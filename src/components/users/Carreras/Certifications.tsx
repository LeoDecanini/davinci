import React from "react";

const Certifications = ({ data }: any) => {
  return (
    <section className="flex h-full p-2 sm:p-5 md:px-10 py-10 justify-center">
      <div className="max-w-7xl w-full">
        <div>
          <span className="font-bold text-xl">{data.sectionTitle}</span>
          <div>
            <h3 className="font-bold text-3xl md:text-5xl">
              {data.certificationsTitle}
            </h3>
            <div
              className={`h-1 max-w-40 md:max-w-60 bg-${data.certificationsDividerColor}`}
            ></div>
          </div>
        </div>
        <div className={"flex justify-center"}>
          <div className="pt-10 flex flex-col justify-center max-w-4xl gap-10">
            {data.data.map((certification: any, index: number) => (
              <div
                key={index}
                className={"flex flex-col sm:flex-row gap-10 items-center"}
              >
                <div
                  className={`py-5 ${index === 0 ? "px-8" : "px-7"} text-3xl font-bold text-white rounded-full bg-secondary`}
                >
                  {index + 1}
                </div>
                <div className={"w-full"}>
                  <h4 className={"md:text-2xl flex flex-col"}>
                    <span className={"font-bold"}>{certification.title}</span>{" "}
                    {certification.description && (
                      <span>{certification.description}</span>
                    )}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
