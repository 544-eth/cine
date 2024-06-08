import React from 'react'
import Image from 'next/image'
import { FaPlay } from "react-icons/fa";


export default function Footer() {
  return (
    <footer>
        <div className=' bg-gray-100 h-[20vh]'>
            <div className='p-4 text-black '> 
                <div className=' flex justify-around'>

                    <div className=' text-[35px]'>
                            <div className=' flex items-center pt-8 gap-1'>
                                <div className=' bg-orange-400 p-2 rounded-full place-items-center'>
                                    <FaPlay/>
                                </div> 
                                <h2 className='' >CineGo</h2>
                            </div>
                    </div>
                    <ul className=''>
                        <li>Games</li>
                        <li>Football</li>
                        <li>Basket Ball</li>
                        <li>Volley</li>
                    </ul>
                    <ul className=''>
                        <li>Games</li>
                        <li>Football</li>
                        <li>Basket Ball</li>
                        <li>Volley</li>
                    </ul>
                    <ul className=''>
                        <li>Games</li>
                        <li>Football</li>
                        <li>Basket Ball</li>
                        <li>Volley</li>
                    </ul>
                    <ul className=''>
                        <li>Games</li>
                        <li>Football</li>
                        <li>Basket Ball</li>
                        <li>Volley</li>
                    </ul>
                </div>
                
            </div>
        </div>
    </footer>
  )
}
