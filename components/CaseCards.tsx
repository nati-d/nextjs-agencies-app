import React from 'react'
import Image from 'next/image'
type CaseProps = {
    title:string;
    description:string;
    image:string;
    bg:string;
}

const CaseCards = ({title, description, image,bg}:CaseProps) => {
  return (
    <div className=" md:flex lg:w-[900px] lg:mx-auto rounded-xl overflow-hidden " >
    <Image src={image} alt="case1" width={350} height={200} className='rounded-lg' />
    <div className={`py-16 px-6 space-y-5 ${bg}`}  >
      <h1 className="font-bold text-xl">{title}</h1>
      <p className="font-light text-sm">
       {description}
      </p>
      <span className="purple justify-end font-semibold text-sm cursor-pointer flex">Know More</span>
    </div>
  </div>
  )
}

export default CaseCards
