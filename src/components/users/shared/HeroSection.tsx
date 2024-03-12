import React from "react";

function HeroSection({
  backgroundImage,
  title,
  subtitle,
  buttonText,
  instinctText,
}: any) {
  return (
    <section
      className="h-[calc(100vh-94px)] mt-[94px] bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundColor: "#000",
      }}
    >
      <div className="absolute text-white bg-black/40 backdrop-blur p-10 w-full max-w-2xl md:left-[23rem] left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
        {instinctText && (
          <span className="font-bold text-xl block">{instinctText}</span>
        )}
        <h1 className="text-3xl pt-5 font-bold">{title}</h1>
        <p className={`${buttonText ? "py-5" : "pt-5"} font-bold`}>{subtitle}</p>
        {buttonText && (
          <button className="px-8 py-3 font-bold text-white bg-secondary hover:bg-[#b30c67]">
            {buttonText}
          </button>
        )}
      </div>
    </section>
  );
}

export default HeroSection;
