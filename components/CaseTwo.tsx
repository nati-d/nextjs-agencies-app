import Image from "next/image";
import React from "react";

const CaseTwo = () => {
  return (
    <div className="bg-white w-full mt-24" id="how_it_works">
      <div className="flex items-center flex-col pt-20">
        <hr />
        <h1 className="font-light text-3xl mt-6">Way of building</h1>
        <h1 className="font-bold text-3xl">Great Software</h1>
      </div>

      <div className="flex-col lg:px-20 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center mb-5">
          {/* first grid component */}
          <div className="lg:px-40 flex-col justify-center h-[400px] py-7  items-center lg:py-[100px]">
            <h1 className="flex gap-2 text-2xl lg:text-2xl font-semibold">
              Build the right team to scale
            </h1>
            <p className="my-10 text-base">
              Finding the right talent is not easy. We help you find the talent
              that suits your needs, follows your processes, and sticks with you
              long term (not the case with freelancers
            </p>
            <p className="my-10 text-base">
              Our delivery model helps you cut costs and deliver within budget.
            </p>
            <div className="border-l-4 border-purple-600 px-5 py-7">
              <p className="purple text-sm font-semibold">
                "Simform is quick to identify larger problem with the Software
                so we decided to expand our scope to build new modules"
              </p>
            </div>
            <div className="flex gap-3 mt-6">
              <div>
                <Image
                  src="/web-dev.png"
                  width={64}
                  height={64}
                  alt="photo"
                  className="rounded-full"
                />
              </div>
              <div>
                <h1 className="font-semibold">Nathnael Desalegn</h1>
                <span className="font-light">CEO</span>
              </div>
            </div>
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
        </div>
        {/* second grid component */}

        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center">
          <div className="flex items-center justify-center lg:py-[100px] overflow-hidden rounded-md">
            <Image
              src="/team.jpg"
              width={600}
              height={400}
              alt="hero"
              className="rounded-xl"
            />
          </div>
          <div className="lg:px-40 flex-col justify-center h-[400px] py-7  items-center lg:py-[100px]">
            <h1 className="flex gap-2 text-2xl lg:text-2xl font-semibold">
              Build the right team to scale
            </h1>
            <p className="my-10 text-base">
              Finding the right talent is not easy. We help you find the talent
              that suits your needs, follows your processes, and sticks with you
              long term (not the case with freelancers
            </p>
            <p className="my-10 text-base">
              Our delivery model helps you cut costs and deliver within budget.
            </p>
            <div className="border-l-4 border-purple-600 px-5 py-7">
              <p className="purple text-sm font-semibold">
                "Simform is quick to identify larger problem with the Software
                so we decided to expand our scope to build new modules"
              </p>
            </div>
            <div className="flex gap-3 mt-6">
              <div>
                <Image
                  src="/web-dev.png"
                  width={64}
                  height={64}
                  alt="photo"
                  className="rounded-full"
                />
              </div>
              <div>
                <h1 className="font-semibold">Nathnael Desalegn</h1>
                <span className="font-light">CEO</span>
              </div>
            </div>
          </div>
        </div>
        
                  {/* Third grid component */}
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center">
          
          <div className="lg:px-40 flex-col justify-center h-[400px] py-7  items-center lg:py-[100px]">
            <h1 className="flex gap-2 text-2xl lg:text-2xl font-semibold">
              Build the right team to scale
            </h1>
            <p className="my-10 text-base">
              Finding the right talent is not easy. We help you find the talent
              that suits your needs, follows your processes, and sticks with you
              long term (not the case with freelancers
            </p>
            <p className="my-10 text-base">
              Our delivery model helps you cut costs and deliver within budget.
            </p>
            <div className="border-l-4 border-purple-600 px-5 py-7">
              <p className="purple text-sm font-semibold">
                "Simform is quick to identify larger problem with the Software
                so we decided to expand our scope to build new modules"
              </p>
            </div>
            <div className="flex gap-3 mt-6">
              <div>
                <Image
                  src="/web-dev.png"
                  width={64}
                  height={64}
                  alt="photo"
                  className="rounded-full"
                />
              </div>
              <div>
                <h1 className="font-semibold">Nathnael Desalegn</h1>
                <span className="font-light">CEO</span>
              </div>
            </div>
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
        </div>
        
                  {/* end */}

      </div>
    </div>
  );
};

export default CaseTwo;
