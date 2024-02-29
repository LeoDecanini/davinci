import React from "react";

const Because = ({ because }: any) => {
  return (
      <section className="flex h-full p-2 sm:p-5 md:px-10 py-10 justify-center">
        <div className="max-w-7xl h-full w-full">
          <div className={"grid grid-cols-3"}>
            <div className={"py-10 col-span-3 md:col-span-2"}>
              <div>
                <h3 className="font-bold text-3xl md:text-5xl">
                  {because.title}
                </h3>
                <div className="h-1 max-w-40 md:max-w-60 bg-primary"></div>
              </div>
              {because.reasons.map((reason: any, index: any) => (
                  <div className={"pt-10"} key={index}>
                    <h4 className="font-bold text-3xl md:text-3xl">{reason.title}</h4>
                    <div className={"pt-10 md:pr-14 flex flex-col gap-5"}>
                      {reason.description.map((desc: any, idx: any) => (
                          <p key={idx}>{desc}</p>
                      ))}
                    </div>
                    {index === 2 && (
                        <div className={`h-full w-full pt-10 md:pr-10`}>
                          <iframe
                              className="w-full h-full min-h-40 min-[425px]:min-h-96 sm:min-h-[420px] md:min-h-[260px] lg:min-h-[360px] xl:min-h-[460px]"
                              src={because.videoSrc}
                              title="YouTube video player"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          ></iframe>
                        </div>
                    )}
                  </div>
              ))}
            </div>
            <div className={"w-full pt-10 hidden md:block"}>
              {because.images.map((image: any, index: any) => (
                  <img
                      key={index}
                      className={"aspect-square object-cover object-top w-80"}
                      src={image}
                      alt=""
                  />
              ))}
            </div>
          </div>
        </div>
      </section>
  );
};

export default Because;
