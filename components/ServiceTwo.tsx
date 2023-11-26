import React, { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { CompaniesLogo } from "@/constants";
import { FaArrowAltCircleLeft,FaArrowAltCircleRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ServiceTwo = () => {
  const sliderRef = useRef();

  const sliderSettings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:px-[150px] bg-white w-[100%] pb-10">
        <div className="lg:px-20 flex-col justify-center h-[400px] py-7 lg:py-[180px]">
          <h1 className="flex gap-2 text-3xl lg:text-4xl font-light">
            Leading companies trust us
          </h1>
          <h1 className="flex gap-2 text-4xl lg:text-5xl font-semibold mt-4">
            to develop software
          </h1>
          <p className="my-10 text-base">
            We{" "}
            <span className="purple font-bold">add development capacity</span>{" "}
            to tech teams. Our value isn’t limited to building teams but is
            equally distributed across the project lifecycle. We are a custom
            software development company that guarantees the successful delivery
            of your project.
          </p>
        </div>
        <div className="flex items-center justify-center lg:py-[100px] overflow-hidden rounded-md">
          <Image
            src="/team.jpg"
            width={600}
            height={400}
            alt="hero"
            className="rounded-xl"
          />
        </div>
        <div>
          <hr />
          <h1 className="flex gap-2 text-3xl lg:text-4xl font-extralight mt-4">
            Meet the People
          </h1>

          <h1 className="flex gap-2 text-4xl lg:text-5xl font-semibold mt-4">
            We are Working With
          </h1>
        </div>
        <div className=" align-baseline justify-end gap-2 hidden lg:flex">
          <button className="custom-slider-button-next text-4xl purple" onClick={handleNext}>
          <FaArrowAltCircleLeft />          
          </button>
          <button className="custom-slider-button-prev text-4xl purple" onClick={handlePrev}>
            <FaArrowAltCircleRight/>
          </button>
        </div>
      </div>

      <div className="w-[100%] gray p-3">
        <Slider ref={sliderRef} {...sliderSettings}>
          {CompaniesLogo.map((item) => (
            <div key={item.image}>
              <Image src={item.image} alt="logo" width={90} height={50} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ServiceTwo;
