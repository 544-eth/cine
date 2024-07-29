import React from 'react'
import Image from 'next/image'
import { useEffect,useState } from 'react'

const slidingImages = [
    '/images/8.png',
    '/images/9.jpg',
    '/images/10.png',
    '/images/11.png',
    '/images/12.jpeg',
    '/images/13.jpg',
    '/images/8.png',
    '/images/9.jpg',
    '/images/10.png',
    '/images/11.png',
    '/images/12.jpeg',
    '/images/13.jpg',
    '/images/8.png',
    '/images/9.jpg',
    '/images/10.png',
    '/images/11.png',
    '/images/12.jpeg',
    '/images/13.jpg'
];


const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slidingImages.length - 5 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-1000"
        style={{ transform: `translateX(-${currentIndex * 20}%)` }}
      >
        {slidingImages.map((src, index) => (
          <div key={index} className="w-1/5 flex-shrink-0">
            <Image src={src} width={300} height={300} alt={`Slide ${index + 1}`} className="w-[250px] h-[300px] rounded-2xl object-cover" />
          </div>
        ))}
      </div>
      <button
        onClick={() => setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 5 : prevIndex - 1))}
        className="absolute top-1/2 transform -translate-y-1/2 left-0 bg-gray-800 bg-opacity-50 text-white px-2 py-1 rounded"
      >
        &#10094;
      </button>
      <button
        onClick={() => setCurrentIndex((prevIndex) => (prevIndex === slidingImages.length - 5 ? 0 : prevIndex + 1))}
        className="absolute top-1/2 transform -translate-y-1/2 right-0 bg-gray-800 bg-opacity-50 text-white px-2 py-1 rounded"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;