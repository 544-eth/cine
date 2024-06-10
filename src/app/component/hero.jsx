"use client"
import React from 'react'
import Image from 'next/image';
import Carousel from './carousel';
import { FaCheckCircle } from 'react-icons/fa';

export default function HeroSection() {

  const images = [
    '/images/2.png',
    '/images/1.png',
    '/images/3.png',
    '/images/4.png',
    '/images/5.png'
  ];

  const picture = [
    '/images/7.jpeg',
    '/images/6.jpeg',
  ]
    
  return (
    <div>
        {/* first hero */}
        <div className='w-[95%] mx-auto py-5 h-[100vh]'>
          <div className="flex flex-row items-center justify-center">
            {images.map((image, index) => (
              <div key={index} className="relative  ">
                <Image src={image} width={500} height={500} alt={`Image ${index + 1}`} className=" w-[211px] h-[457px] " />
                <div className="absolute inset-0 bg-black opacity-65"></div>
                
              </div>
              
            ))}
          </div>
          <div className=''>
              <div className="absolute inset-0 pb-56 flex flex-col items-center justify-center gap-5 ">
                    <h2 className="text-white text-5xl font-extrabold ">Elevate your experience, </h2>
                    <h2 className="text-white text-5xl font-extrabold ">Expand your reach</h2>
              </div>
              <div className=' absolute inset-0 text-[16px] flex flex-col items-center justify-center gap-1'>
                <h2>Our platform offers brands across the globe with access to a multi-culture</h2>
                <h2>demographic, unlocking new opportunities for engagement, visibility and reach.</h2>
              </div>
              <div className="absolute inset-0 pt-[200px] flex items-center justify-center">
                    <h2 className="text-black text-xl bg-white rounded-2xl p-2">Get started</h2>
              </div>
          </div>
        </div>


        {/* second hero */}
        <div className=' w-[90%] m-auto justify-center'>
          <div className=' flex items-center justify-between gap-20'>
              <div className=' w-[50%] m-auto text-black'>
                <h2 className=' font-bold pb-10'>Why Choose Us?</h2>
                  <div className=' flex gap-5'>
                    <FaCheckCircle className=' w-16 text-orange-600'/>
                    <p>Extensive Subscribe Base: CinGo has a massive global subscriber base, spanning across various countries and demographics. Advertising on cineGo provides access to millions of users, allowing you to reach a diverse audience with different interest and preferences.</p>
                  </div>
                  <div className=' flex gap-5 pb-10'>
                    <FaCheckCircle className=' w-8  text-orange-600'/>
                    <p>User Behaviour Data: CineGq leverages advanced algorithms to analyse users behaviour and preferences. This data-driven approach</p>
                  </div>
                  <button className=' bg-orange-600 p-3 rounded-full text-white font-bold'>Learn More</button>
              </div>
              <div></div>
              <div className=' w-[50%] m-auto '>

                <div className=' flex flex-row items-center gap-10'>
                  {picture.map((imagee, indexx) => (
                    <div key={indexx} className=' '>
                        <Image src={imagee} alt='' width={200} height={400} className=' rounded-md'/>
                    </div>
                  ))}
                </div>
              </div>
          </div>
        </div>

        {/* third hero */}
        <div className=' flex justify-center w-[95%] m-auto h-full text-black'>
            <div className=' flex flex-col items-center justify-center'>
              <h2 className=' text-[40px] font-bold'>Elevate Your Brand Experience</h2>
              <div className=' grid-cols-8 grid gap-5 p-5 '>
                <button className=' bg-orange-600 p-2 font-bold hover:bg-black hover:text-orange-600 rounded-full transition duration-300 gap-5'>Action</button>
                <button className=' bg-orange-600 p-2 font-bold hover:bg-black hover:text-orange-600 rounded-full transition duration-300 gap-5'>Thriller</button>
                <button className=' bg-orange-600 p-2 font-bold hover:bg-black hover:text-orange-600 rounded-full transition duration-300 gap-5'>Adventure</button>
                <button className=' bg-orange-600 p-2 font-bold hover:bg-black hover:text-orange-600 rounded-full transition duration-300 gap-5'>Animation</button>
                <button className=' bg-orange-600 p-2 font-bold hover:bg-black hover:text-orange-600 rounded-full transition duration-300 gap-5'>Comedy</button>
                <button className=' bg-orange-600 p-2 font-bold hover:bg-black hover:text-orange-600 rounded-full transition duration-300 gap-5'>Crime</button>
                <button className=' bg-orange-600 p-2 font-bold hover:bg-black hover:text-orange-600 rounded-full transition duration-300 gap-5'>Historical</button>
                <button className=' bg-orange-600 p-2 font-bold hover:bg-black hover:text-orange-600 rounded-full transition duration-300 gap-5'>Drama</button>
                <button className=' bg-orange-600 p-2 font-bold hover:bg-black hover:text-orange-600 rounded-full transition duration-300 gap-5'>Psychological</button>
                <button className=' bg-orange-600 p-2 font-bold hover:bg-black hover:text-orange-600 rounded-full transition duration-300 gap-5'>Science Fiction</button>
                <button className=' bg-orange-600 p-2 font-bold hover:bg-black hover:text-orange-600 rounded-full transition duration-300 gap-5'>Romance</button>
                <button className=' bg-orange-600 p-2 font-bold hover:bg-black hover:text-orange-600 rounded-full transition duration-300 gap-5'>Mystery</button>
                <button className=' bg-orange-600 p-2 font-bold hover:bg-black hover:text-orange-600 rounded-full transition duration-300 gap-5'>War</button>
                <button className=' bg-orange-600 p-2 font-bold hover:bg-black hover:text-orange-600 rounded-full transition duration-300 gap-5'>Musical</button>
                <button className=' bg-orange-600 p-2 font-bold hover:bg-black hover:text-orange-600 rounded-full transition duration-300 gap-5'>Horror</button>
                <button className=' bg-orange-600 p-2 font-bold hover:bg-black hover:text-orange-600 rounded-full transition duration-300 gap-5'>Fantasy</button>
                <button className=' bg-orange-600 p-2 font-bold hover:bg-black hover:text-orange-600 rounded-full transition duration-300 gap-5'>Biography</button>
                <button className=' bg-orange-600 p-2 font-bold hover:bg-black hover:text-orange-600 rounded-full transition duration-300 gap-5'>Documentary</button>
                <button className=' bg-orange-600 p-2 font-bold hover:bg-black hover:text-orange-600 rounded-full transition duration-300 gap-5'>Family</button>
              </div>
            </div>
        </div>

        {/* fourth hero */}
        <div className=' flex justify-center w-[95%] m-auto h-full text-black'>
            <div>
              <h2>Trending now:</h2>
              <div className="flex items-center justify-center h-screen ">
                  <Carousel />
              </div>
            </div>
        </div>
    </div>
  )
}
