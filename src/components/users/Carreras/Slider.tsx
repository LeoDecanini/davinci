"use client";
import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Autoplay, Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider = ({orgullo}: any) => {
    return (
        <section
            className="flex h-full relative bg-[url('/fondo-orgullo.webp')] bg-no-repeat bg-cover bg-center px-2 sm:px-5 md:px-10 py-10 justify-center">
            <div className="absolute inset-0 bg-black opacity-10"></div>

            <div className="max-w-7xl w-full relative">
                <div>
                    <span className="font-bold text-xl">Alumnos</span>
                    <div>
                        <h3 className="font-bold text-3xl md:text-5xl">
                            Orgullo Da Vinci
                        </h3>
                        <div
                            className={`h-1 max-w-40 md:max-w-60 bg-primary`}
                        ></div>
                    </div>
                </div>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{
                        clickable: true,
                        bulletClass: "prismate-bullet",
                        bulletActiveClass: "prismate-bullet-active",
                    }}
                    className="w-full mt-10"
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    spaceBetween={10}
                    loop={true}
                    freeMode={true}
                    mousewheel={{invert: false}}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 2,
                        },
                        1280: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {orgullo.map((o: any, i: any) => (
                        <SwiperSlide
                            className="bg-white mb-20 h-full min-h-[550px] w-full shadow-lg transition-shadow hover:cursor-pointer hover:shadow-2xl"
                            key={i}
                        >
                            <img className={"w-full"} src={o.imagen} alt={o.titulo}/>
                            <div className="p-5 bg-white">
                                <h3 className="pb-5 text-2xl font-bold">{o.titulo}</h3>
                                <span className="font-semibold text-xl">{o.subtitulo}</span>
                                <p className="pt-5">{o.descripcion}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Slider;
