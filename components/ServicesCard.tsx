import Image from 'next/image';
import React, { useState } from 'react';

type ServiceProps = {
  title: string;
  description: string;
  img: string;
};

const ServicesCard = ({ title, description, img }: ServiceProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`shadow-lg w-96 bg-white p-5 space-y-6 ${isHovered?'hover:mt-1 border-2 border-indigo-600':''} transition-all`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='p-3 border-2 border-indigo-500 rounded-full w-[max-content]'>
        <Image src={`/${img}`} width={30} height={30} alt='services' />
      </div>
      <h2 className={`text-lg font-semibold ${isHovered?'text-indigo-500':''}`}>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ServicesCard;
