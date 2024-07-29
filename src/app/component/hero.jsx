"use client"
import React from 'react'
import Image from 'next/image';
import Carousel from './carousel';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import Appdrop from './dropment';
import Button from './button';

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
        <div className=' flex justify-center w-[95%] m-auto h-full text-black py-28'>
            <div className=' flex flex-col items-center justify-center'>
              <h2 className=' text-[40px] font-bold'>Elevate Your Brand Experience</h2>
              <div>
                <Button/>
              </div>
            </div>
        </div>

        {/* fourth hero */}
        <div className=' flex justify-center w-[95%] m-auto h-full text-black py-'>
            <div>
            <div className=' flex items-start'> 
              <h2 className=' text-purple-950 font-extrabold text-2xl'>Trending now:</h2>
            </div>
              <div className="flex items-center justify-center h-full ">
                  <Carousel />
              </div>
            </div>
        </div>

        {/* fifth hero */}
        <div className=' h-[70vh]'>
          <div className=' flex flex-col items-center justify-center py-10'>
            <h2 className=' text-2xl font-extrabold text-orange-600'>Bank on Cine-Go Experts </h2>
            <h3 className=' text-orange-600'>Expand your reach with top notch advertisement idea </h3>
          </div>
          <div className=' flex items-center justify-around m-auto w-[90%]'>
              <div>
                <Image src='/images/cine4.png' alt='writing some codes' width={400} height={200} className=' rounded-lg' />
              </div>
              <div className=' flex flex-col w-[50%]'>
                <h2 className=' text-black'>Dive into a world of enless possibilities as you explore the diverse array of advert tips awaiting you on CineGo</h2>
                <div className=' flex items-center justify-center py-5 gap-8'>
                  <button className=' bg-orange-600 p-3 rounded-full font-bold  hover:bg-black hover:text-orange-600 hover:shadow-md hover:shadow-orange-500 text-black transition duration-500'>Explore Advert Tips</button>
                  <button className=' bg-orange-600 p-3 rounded-full font-bold hover:bg-black hover:text-orange-600 hover:shadow-md hover:shadow-orange-500 text-black transition duration-500'>Get started</button>
                </div>
              </div>  
          </div>
        </div>

        {/* sixth hero */}
        <div>
          <div>
                  <div className=' text-black flex flex-col items-center justify-center h-[70vh]'>
                    <div className=' font-bold text-4xl'>
                      <h2>What do people say about us</h2>
                    </div>
                    <div className=' flex flex-row items-center  justify-between w-[70%] m-auto'>
                      
                      <div className=' flex flex-col w-[15vw] rotate-12'>
                        
                          <h3 className=' flex flex-row w-[100%] gap-1 text-[10px] py-2'><span className=' text-6xl '>&#8223;</span>The range at which my campaign was covered on CineGo is impressive. From engagement to sales and returns, like it measured up and more  thank you guys<span className=' text-6xl'>&#8222;</span></h3>
                          <div className=' relative'>
                            <Image src='/images/girl1.jpeg' width={200} height={100} alt='' className='w-full rounded-br-lg rounded-bl-lg'/>
                            <p className=' absolute bottom-2 left-2 text-white font-bold'>Cynthia Kenneth</p>
                          </div>
                      </div>
                      <div className=' flex flex-col w-[15vw] pb-8'>
                        
                          <h3 className=' flex flex-row w-[100%] gap-1 text-[10px] py-2'><span className=' text-6xl '>&#8223;</span>The engagements on CineGo are true. My strategy worked and im honestly grateful.<span className=' text-6xl'>&#8222;</span></h3>
                          <div className=' relative'>
                            <Image src='/images/girl2.jpeg' width={200} height={100} alt='' className='w-full rounded-br-lg rounded-bl-lg'/>
                            <p className=' absolute bottom-2 left-2 text-white font-bold'>Josh Azubuike</p>
                          </div>
                      </div>
                      <div className=' flex flex-col w-[15vw] -rotate-12 '>
                        
                          <h3 className=' flex flex-row w-[100%] gap-1 text-[10px] py-2'><span className=' text-6xl '>&#8223;</span>CineGo gets beyond just reach, it drives brand credibility and for me, that means more. Thank you CineGo for the opportunities.<span className=' text-6xl'>&#8222;</span></h3>
                          <div className=' relative'>
                            <Image loading='eager' src='/images/girl3.jpeg' width={200} height={100} alt='' className='w-full rounded-br-lg rounded-bl-lg'/>
                            <p className=' absolute bottom-2 left-2 text-white font-bold'>Helen Nwanchukwu</p>
                          </div>
                      </div>
                      
                    </div>
                  </div>
          </div>  
        </div>
        {/* seventh hero */}
        <div>
            <div className=' h-fit py-10 '>
              <div className=' flex w-[50%] m-auto items-center justify-center'>
                <h2 className=' text-orange-600 font-bold text-3xl tracking-normal'>Frequently Asked Questions</h2>
              </div>
              <div className='p-4 m-auto w-[70%] '>
                  <Appdrop title=' What is CineGo?' answer=' CineGo is a subscription video on-demand over-the-top streaming service. The service primarily distributes original and acquired films and television shows from various genres, and it is available internationally in multiple languages.'/>
                  <Appdrop title='What is included in my CineGo membership' answer='CineGo is a subscription video on-demand over-the-top streaming service. The service primarily distributes original and acquired films and television shows from various genres, and it is available internationally in multiple languages.'/>
                  <Appdrop title='Which classes is right for me?' answer='CineGo is a subscription video on-demand over-the-top streaming service. The service primarily distributes original and acquired films and television shows from various genres, and it is available internationally in multiple languages.'/>
                  <Appdrop title='Can I sell on CineGo?' answer='CineGo is a subscription video on-demand over-the-top streaming service. The service primarily distributes original and acquired films and television shows from various genres, and it is available internationally in multiple languages.'/>
                  <Appdrop title='How much does CineGo cost?' answer='CineGo is a subscription video on-demand over-the-top streaming service. The service primarily distributes original and acquired films and television shows from various genres, and it is available internationally in multiple languages.'/>
                  <Appdrop title='Will I be charged taxes?' answer='CineGo is a subscription video on-demand over-the-top streaming service. The service primarily distributes original and acquired films and television shows from various genres, and it is available internationally in multiple languages.'/>
                  <Appdrop title='What skill-level is required for sessions?' answer='CineGo is a subscription video on-demand over-the-top streaming service. The service primarily distributes original and acquired films and television shows from various genres, and it is available internationally in multiple languages.'/>
              </div>
            </div>
        </div>

        {/* eight hero */}
        <div>
          <div className=' h-[60vh] bg-green-300 flex  items-center justify-around'>
              <div className=' flex flex-col gap-10 items-center '>
                  <div>
                    <h2 className=' text-orange-600 text-2xl font-bold'>
                      Get our Newsletter, Latest offer, Updates
                    </h2>
                  </div>
                  <form action="" className=" flex items-center rounded-3xl relative w-max   ">
                        <input type="email" name="email" id="email" className=" relative w-[90%] h-10 border cursor-text pl-5 focus:pl-5 outline-none rounded-l-3xl" placeholder='Email Address'/>

                        <button className=' flex items-center justify-center bg-orange-500 w-56 rounded-r-3xl inset-y-0 my-auto px-auto h-10   stroke-gray-500 text-gray-700 font-bold'>Subscribe Now</button>
                  </form>
                  
              </div>

              <div>
                <Image src='/images/cine3.png' width={180} height={150} alt='' className=' rounded-xl' />
              </div>
          </div>
        </div>
    </div>
  )
}
