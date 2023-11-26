import React from "react";
import ServicesCard from "./ServicesCard";
import { ServiceList } from "@/constants";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";
import ServiceTwo from "./ServiceTwo";
import ServiceThree from "./ServiceThree";

const Services = () => {
  return (
      <section className="pt-10 gray" id="services">
        <h1 className="font-semibold text-3xl text-center my-10 ">
          Services We Offer
        </h1>
        <div className="flex gap-12 ">
          <Swiper
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            {ServiceList.map((list) => (
              <SwiperSlide key={list.title} className="px-10">
                <ServicesCard
                  title={list.title}
                  description={list.description}
                  img={list.image}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <ServiceTwo />
        <ServiceThree />
      </section>
  );
};

export default Services;
