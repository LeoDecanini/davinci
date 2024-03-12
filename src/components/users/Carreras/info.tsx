import React from "react";

const Info = ({ data }: any) => {
  return (
      <section className={"w-full text-white bg-muted justify-center flex items-center"}>
        <div className={"max-w-7xl w-full gap-20 px-3 py-10 grid xl:grid-cols-2"}>
          {data.map((item: any, index: any) => (
              <div
                  key={index}
                  className={"flex flex-col md:flex-row gap-10 w-full justify-between md:items-center"}
              >
                <div className={"flex h-full gap-3 items-center"}>
                  <div className={`h-full w-1 bg-${item.color}`}></div>
                  <div>
                    <h3 className={"font-bold sm:text-2xl"}>
                      {item.title}
                    </h3>
                    <p className={"text-xs"}>
                      {item.description}
                    </p>
                  </div>
                </div>
                <button className="px-8 py-3 font-bold text-white bg-secondary hover:bg-[#b30c67]">
                  {item.buttonText}
                </button>
              </div>
          ))}
        </div>
      </section>
  );
};

export default Info;
