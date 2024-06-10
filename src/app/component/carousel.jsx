import React from 'react'
import Image from 'next/image'
import { useEffect,useState } from 'react'

const slidingImages = [
    '/images/8.png',
    '/images/9.jpg',
    '/images/10.png',
    '/images/11.png',
    '/images/12.jpeg',
    '/images/13.jpg'
];

export default function Carousel() {
const [currentIndex, setCurrentIndex] = useState(0)

useEffect(() => {
    const interval = setInterval(() => {
        setCurrentIndex((preIndex) =>
            preIndex  === slidingImages.length - 1 ? 0 : preIndex + 1
        );
    }, 3000);

    return () => clearInterval(interval)
}, [])
  return (
    <div className=' relative w-full h-64 overflow-hidden'>
        <div className=' flex transition-transform duration-1000' 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
            {slidingImages.map((src, index) => (
                <div key={index} className=' min-w-full h-64 flex-shrink-0'>
                    <Image src={src} width={500} height={600} alt={`Slide ${index + 1}`} className=' w-[500px] h-[800px] object-cover'/>
                </div>
            ))}
        </div>
        <div className=' absolute bottom-0 left-0 right-0 flex justify-center mb-4'>
            {slidingImages.map((_, index) => (
                <div key={index} className={` w-2 h-2 rounded-full mx-1 ${index === currentIndex ? 'bg-white' : ' bg-gray-300'}`}></div>
            ))}
        </div>
    </div>
  )
}
