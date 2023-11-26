import React from "react";
import TestimonialCard from "./TestimonialCard";

const ServiceThree = () => {
  return (
      <div className="bg-white flex flex-col items-center pb-14">
        <div className="flex items-center flex-col pt-20">
          <hr />
          <h1 className="font-light text-3xl mt-6">Why customers love</h1>
          <h1 className="font-bold text-3xl">working with us</h1>
        </div>
        <div>
          <div>
            <TestimonialCard
              comment="Without any doubt I recommend MyDev Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else."
              name="Abebe Kebede"
              job="Software Engineer"
            />
          </div>
        </div>
      </div>
  );
};

export default ServiceThree;
