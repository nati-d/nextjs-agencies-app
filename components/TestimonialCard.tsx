import React from 'react'
import Image from 'next/image'
import { type } from 'os'

type TestimonyProps ={
    comment:string;
    name:string;
    job:string;
}

const TestimonialCard = ({comment, name,job}:TestimonyProps) => {
  return (
    <div>
       <div
          key={name}
          className="mt-16 flex-col items-center w-[500px] justify-center p-8 rounded-lg shadow-lg"
        >
          <span className="font-extrabold text-5xl text-purple-500">“</span>
          <p className="text-center text-base font-thin px-5">
            {comment}
          </p>
          <span className="font-extrabold text-5xl text-purple-500 flex justify-end mt-5">
            “
          </span>
        
          <div className="overflow-hidden rounded-full w-20 h-20 bg-red-400 mx-auto mt-9 shadow-md">
            <Image
              src="/web-dev.png"
              width={80}
              height={80}
              alt="pic"
              className="rounded-full object-cover"
            />
          </div>
          <h2 className="text-center font-bold text-purple-700 mt-4 text-lg">
            {name}
          </h2>
          <h2 className="text-center font-light text-sm text-gray-500">
            {job}
          </h2>
        </div>
    </div>
  )
}

export default TestimonialCard
