import { Cases } from "@/constants";
import Image from "next/image";
import React from "react";
import CaseCards from "./CaseCards";
import CaseTwo from "./CaseTwo";

const CaseStudy = () => {
  return (
      <div className="gray flex flex-col items-center " id="case_studies">
        <div className="flex items-center flex-col pt-20">
          <hr />
          <h1 className="font-light text-3xl mt-6">Our recent</h1>
          <h1 className="font-bold text-3xl">Case studies</h1>
        </div>
        <div>
          <div className="mt-10 space-y-5">
            {Cases.map((item, index) => (
              <CaseCards
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
                bg={item.bg}
              />
            ))}
          </div>
        </div>
        <CaseTwo />
      </div>
  );
};

export default CaseStudy;
