import React from 'react'
import { FcSearch } from "react-icons/fc";
import { GoQuestion } from "react-icons/go";


export default function Navbar() {
  return (
    <div className='  bg-gray-200 '>
        <div className=' h-20 w-[95%] m-auto flex flex-row items-center justify-between'>
            <div className=' flex flex-row items-center gap-20'>
                <div>
                    <h1 className='  text-orange-600 text-[30px] font-bold'>CineGo</h1>
                </div>
                <div className=' flex text-orange-600 '>
                    <h1 className=' '>Classes</h1>
                    <select className=' bg-transparent mr-16' />
                    <h1>Pricing</h1>
                </div>
            </div>
            <div className=' flex flex-row items-center gap-10'>
                    <div className=' flex flex-row gap-5 '>
                        <FcSearch className=' cursor-pointer text-[30px]'/>
                        <GoQuestion className=' cursor-pointer text-[30px] text-orange-600'/>
                    </div>
                    <div className=' flex flow-row gap-10'>
                        <button className=' ring-2 ring-orange-700 text-orange-600 p-2 w-40  rounded-3xl'>Log in</button>
                        <button className=' bg-orange-700 text-white  p-[10px] w-[160px] rounded-3xl'>Get Started</button>
                    </div>
            </div>
        </div>
    </div>
  )
}
