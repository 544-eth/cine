import React from 'react'
import Image from 'next/image';

export default function HeroSection() {

  const images = [
    '/images/2.png',
    '/images/1.png',
    '/images/3.png',
    '/images/4.png',
    '/images/5.png'
  ];
    
  return (
    <div>
        <div className='w-[90%] mx-auto py-5'>
          <div className="flex flex-row items-center justify-center">
            {images.map((image, index) => (
              <div key={index} className="relative w- ">
                <Image src={image} width={500} height={500} alt={`Image ${index + 1}`} className=" w-[211px] h-[457px] " />
                <div className="absolute inset-0 bg-black opacity-65"></div>
                
              </div>
              
            ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-white text-xl font-bold">Get started now</h2>
              </div>
        </div>
    </div>
  )
}
