import React from 'react';
import { badgeVariants } from "@/components/ui/badge";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

interface Paragraph {
    color: string;
    title: string;
    commission: string;
    teacher: string;
    text: string;
    link: string;
}

const Slider: React.FC<{ paragraphs: Paragraph[] }>  = ({paragraphs}) => {
    return (
        <div className={"max-w-4xl w-full shadow rounded-md mt-5"}>
            <div className="p-2 w-full flex gap-3">
                <Swiper
                    modules={[Autoplay]}
                    className="w-full"
                    spaceBetween={10}
                    freeMode={true}
                    mousewheel={{invert: false}}
                    slidesPerView={"auto"}
                >
                    {paragraphs.map((paragraph, i) => (
                        <SwiperSlide className={"!w-auto"} key={i}>
                            <p
                                style={{background: paragraph.color}}
                                className={`${badgeVariants({variant: "secondary"})} cursor-pointer`}
                            >
                                {paragraph.text}
                            </p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Slider;