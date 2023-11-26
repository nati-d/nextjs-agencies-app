import React from "react";
import Button from "./Button";

const Hire = () => {
  return (
      <section className="bg-white lg:px-32 mb-10 " id="hire">
        <div className="flex flex-wrap justify-center lg:justify-around items-center lg:w[80%] mx-auto py-16 px-9 gray rounded-lg">
          <h1 className="text-2xl font-semibold mb-2 text-center">
            Hire the best developers and designers around!
          </h1>
          <Button type="button" title="Hire top developers" variant="orange" />
        </div>
      </section>
  );
};

export default Hire;
