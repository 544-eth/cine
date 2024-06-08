import React from 'react'
import HeroSection from './component/hero'

export default function Home() {
  return (
    <div className=' bg-gradient-to-tl from-gray-200 to-blue-200 h-full'>
      <div className=' h-[100vh]'>
        <HeroSection/>
      </div>
    </div>
  )
}
