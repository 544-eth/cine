import React from 'react'
import { FaPlay } from "react-icons/fa";
import styles from './index.module.css' 


export default function Footer() {
  return (
    <footer>
        <div className=' bg-gray-100 h-full py-10'>
            <div className='p-4 text-black '> 
                <div className=' flex justify-around'>

                    <div className=' text-[35px]'>
                            <div className=' flex items-center pt-5 gap-4'>
                                <h1>
                                    <FaPlay/>
                                </h1> 
                                <h2 className={styles.font} >CineGo</h2>
                            </div>
                    </div>
                    
                    <div>
                        <h2 className=' font-bold text-orange-600 text-[19px]'>Categories</h2>
                        <ul className=''>
                            <li>About</li>
                            <li>What we offer</li>
                            <li>Classes</li>
                            <li>Pricing</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className=' font-bold text-orange-600 text-[19px]'>Socials</h2>
                        <ul className=''>
                            <li>Instagram</li>
                            <li>X (former Twitter)</li>
                            <li>Youtube</li>
                            <li>Facebook</li>
                        </ul>
                    </div>
                    <div>
                    <h2 className=' font-bold text-orange-600 text-[19px]'>Legals</h2>
                        <ul className=''>
                            <li>Terms</li>
                            <li>Privacy</li>
                        </ul>
                    </div>
                    <div>
                    <h2 className=' font-bold text-orange-600 text-[19px]'>Contact Us</h2>
                        <ul className=''>
                            <li>+2349038892581</li>
                            <li>Elioku18@gmail.com</li>
                        </ul>
                    </div>
                  
                </div>
                
            </div>
        </div>
    </footer>
  )
}
