// data
import Image from "next/image";
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { SiReact } from "react-icons/si";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Pagination } from "swiper";
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Google Form",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
        {
          title: "title",
          path: "/thumb4.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb4.jpg",
        },
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[450px] md:h-[420px] lg:h-[480px] xl:h-[480px] 2xl-h-[480px] "
    >
      {workSlides.slides.map((items, index) => (
        <SwiperSlide key={index}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {items.images.map((items, index) => (
              <div key={index}>
                <div className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                  <Image
                    src={items.path}
                    width={500}
                    height={300}
                    alt=""
                    className=""
                    key={index}
                  />
                  <div className="absolute w-full h-full flex justify-center items-center gap-x-2 sm:gap-x-4 -bottom-52 group-hover:bottom-0 duration-300 opacity-80 bg-gradient-to-l  from-transparent via-[#e838cc] to-[#4a22bd] ">
                    <div className="translate-y-28 group-hover:translate-y-0  text-[8px] sm:text-[14px]  xl:text-[16px] duration-300 ">{items.title}</div>
                    <div className="translate-y-28 group-hover:translate-y-0 text-[8px] sm:text-[14px]  xl:text-[16px]    duration-1000 ">PROJECT</div>
                    <div className="translate-y-28 group-hover:translate-y-0 text-[8px] sm:text-[14px]  xl:text-[16px]    duration-300 ">logo</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))
      }
    </Swiper >
  );
};

export default WorkSlider;
