import React from "react";

const WhatDoYouLearn = ({ whatDoYouLearn }: any) => {
  return (
    <section className="flex bg-[#f3f3f3] h-full p-2 sm:p-5 md:px-10 justify-center relative overflow-hidden">
      <div className="max-w-7xl w-full relative z-10">
        <div className={"pb-10 col-span-3 md:col-span-2"}>
          <div>
            <h3 className="font-bold text-3xl md:text-5xl">Que aprendes</h3>
            <div className="h-1 max-w-40 md:max-w-60 bg-primary"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 px-2 md:px-10 gap-5 z-10 relative">
          {whatDoYouLearn.cards.map((item: any, index: any) => (
            <div key={index} className="shadow-xl cursor-pointer hover:shadow-2xl relative z-10">
              <div className="w-full h-1 bg-secondary"></div>
              <div className="bg-white h-full p-5 flex flex-col sm:flex-row items-center gap-3 justify-between">
                <div className="w-full h-full">
                  <img
                    className={"object-cover h-full"}
                    src={item.image}
                    alt=""
                  />
                </div>
                <div className="w-full h-full">
                  <h5 className="text-xl font-bold">{item.title}</h5>
                  <p className="text-xs pt-5">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={"pt-10"}>
          <h4 className="font-bold text-3xl md:text-3xl">
            Lenguajes y Software
          </h4>
          <p className={"pt-5"}>
            {whatDoYouLearn.lenguajes}
          </p>
        </div>
      </div>
      <div className="absolute top-32 -left-[500px] z-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 690 630"
          className="w-[700px] text-blue-700"
        >
          <path fill="currentColor">
            <animate
              dur="12s"
              repeatCount="indefinite"
              attributeName="d"
              values="M150.3 142.5c48-6.2 95 5.3 141.5-10.7C332 117.9 364.3 91 393 62.9 429 27.7 475-5.6 531.4.8c72.5 8.3 123.5 68.8 147.4 126.6 32.5 78.4-6.7 161-19.3 241.2-5.4 34.6 5 71.2 10.6 105.3 4.8 29.6 7.1 60.6-3.7 88.9-19.3 50.9-79.2 67.9-133.9 67.9-159.6 0-190-134.4-286.5-217.8-44.1-38.2-99.9-37.4-153.1-61-51.5-22.9-109-63.6-88.7-122 3.7-10.7 9.5-20.3 16.9-28.9 29.5-34.4 83.9-52.6 129.2-58.5z; M96.4 111.8c18-68 32.9-90.7 79.3-106.7C216-8.8 317.2 8.6 355.1 21.8c114.7 40 93.6 64.9 150 71.3 72.5 8.3 76.7-81.3 147.3-6 58 61.9-63.5 96.5-76 176.7-5.4 34.6 50.7 64.7 79.3 103.3 17.9 24.1 14.3 177.8-12.6 191.8-83.4 43.5-70.7-9.8-128.1 24.8-136.6 82.6-191.3 17.3-266.7-12-54.4-21.2-18-67.3-119.3-100.7C75.6 453.5 33.3 366.9 3.1 313c-16-28.5 34.6-98.6 42-107.2 29.5-34.4 39.7-49.9 51.3-94z; M150.3 142.5c48-6.2 95 5.3 141.5-10.7C332 117.9 364.3 91 393 62.9 429 27.7 475-5.6 531.4.8c72.5 8.3 123.5 68.8 147.4 126.6 32.5 78.4-6.7 161-19.3 241.2-5.4 34.6 5 71.2 10.6 105.3 4.8 29.6 7.1 60.6-3.7 88.9-19.3 50.9-79.2 67.9-133.9 67.9-159.6 0-190-134.4-286.5-217.8-44.1-38.2-99.9-37.4-153.1-61-51.5-22.9-109-63.6-88.7-122 3.7-10.7 9.5-20.3 16.9-28.9 29.5-34.4 83.9-52.6 129.2-58.5z"
              fill="freeze"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
            ></animate>
          </path>
        </svg>
      </div>
      <div className="absolute bottom-0  -right-72 z-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 690 630"
          className="w-[500px] text-blue-700"
        >
          <path fill="currentColor">
            <animate
              dur="12s"
              repeatCount="indefinite"
              attributeName="d"
              values="M150.3 142.5c48-6.2 95 5.3 141.5-10.7C332 117.9 364.3 91 393 62.9 429 27.7 475-5.6 531.4.8c72.5 8.3 123.5 68.8 147.4 126.6 32.5 78.4-6.7 161-19.3 241.2-5.4 34.6 5 71.2 10.6 105.3 4.8 29.6 7.1 60.6-3.7 88.9-19.3 50.9-79.2 67.9-133.9 67.9-159.6 0-190-134.4-286.5-217.8-44.1-38.2-99.9-37.4-153.1-61-51.5-22.9-109-63.6-88.7-122 3.7-10.7 9.5-20.3 16.9-28.9 29.5-34.4 83.9-52.6 129.2-58.5z; M96.4 111.8c18-68 32.9-90.7 79.3-106.7C216-8.8 317.2 8.6 355.1 21.8c114.7 40 93.6 64.9 150 71.3 72.5 8.3 76.7-81.3 147.3-6 58 61.9-63.5 96.5-76 176.7-5.4 34.6 50.7 64.7 79.3 103.3 17.9 24.1 14.3 177.8-12.6 191.8-83.4 43.5-70.7-9.8-128.1 24.8-136.6 82.6-191.3 17.3-266.7-12-54.4-21.2-18-67.3-119.3-100.7C75.6 453.5 33.3 366.9 3.1 313c-16-28.5 34.6-98.6 42-107.2 29.5-34.4 39.7-49.9 51.3-94z; M150.3 142.5c48-6.2 95 5.3 141.5-10.7C332 117.9 364.3 91 393 62.9 429 27.7 475-5.6 531.4.8c72.5 8.3 123.5 68.8 147.4 126.6 32.5 78.4-6.7 161-19.3 241.2-5.4 34.6 5 71.2 10.6 105.3 4.8 29.6 7.1 60.6-3.7 88.9-19.3 50.9-79.2 67.9-133.9 67.9-159.6 0-190-134.4-286.5-217.8-44.1-38.2-99.9-37.4-153.1-61-51.5-22.9-109-63.6-88.7-122 3.7-10.7 9.5-20.3 16.9-28.9 29.5-34.4 83.9-52.6 129.2-58.5z"
              fill="freeze"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
            ></animate>
          </path>
        </svg>
      </div>
    </section>
  );
};

export default WhatDoYouLearn;
