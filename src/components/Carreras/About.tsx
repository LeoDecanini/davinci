import React from "react";
import Link from "next/link";

const About = ({ about }: any) => {

  return (
    <section className={"py-10 flex flex-col gap-5"}>
      {about.map((section: any, index: any) => (
        <div key={index} className={`overflow-hidden`}>
          <div className="container mx-auto">
            <div
              className={`flex ${
                index % 2 !== 0 ? "flex-row-reverse" : ""
              } flex-wrap items-center justify-between -mx-4`}
            >
              <div className="w-full sm:px-20 md:px-40 lg:px-0 lg:w-6/12">
                <div className="flex justify-center items-center -mx-3 sm:-mx-4">
                  <div className="w-full px-3 sm:px-4 xl:w-1/2">
                    <div className="py-3 sm:py-4">
                      <img
                        src={section.img1}
                        alt=""
                        className="w-full rounded-2xl"
                      />
                    </div>
                    <div className="py-3 sm:py-4">
                      <img
                        src={section.img2}
                        alt=""
                        className="w-full rounded-2xl"
                      />
                    </div>
                  </div>
                  <div className="w-full px-3 sm:px-4 xl:w-1/2">
                    <div className="relative z-10 my-4">
                      <img
                        src={section.img3}
                        alt=""
                        className="w-full rounded-2xl"
                      />
                      <span className="absolute -right-7 -bottom-7 z-[-1]">
                        <img src="/circulo.svg" alt="" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full px-0 md:px-10 xl:px-0 lg:w-1/2 xl:w-5/12">
                <div className="mt-10 lg:mt-0">
                  <span className="block mb-4 text-lg font-semibold text-secondary">
                    {section.title}
                  </span>
                  <h2 className="mb-5 !text-5xl font-bold sm:text-[40px]/[48px]">
                    {section.subtitle}
                  </h2>
                  <p className="mb-5 text-base">{section.description1}</p>
                  <p className="mb-8 text-base">{section.description2}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default About;
