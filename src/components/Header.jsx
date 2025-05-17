import React from 'react'
import Navbar from './Navbar'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div
      className='relative min-h-screen mb-4 bg-cover bg-center w-full overflow-hidden'
      style={{ backgroundImage: "url('/header_img.jpg')" }}
      id='Header'
    >
      {/* Overlay Glassmorphism Layer */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-md z-0"></div>

      {/* Content Layer */}
      <div className='relative z-10 flex flex-col items-center justify-center min-h-screen'>
        <Navbar />
        <motion.div 
        initial={{opacity: 0, y:100}}
        transition={{duration: 1.5}}
        whileInView={{opacity: 1, y:0}}
        viewport={{always: true}}
        className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white">
          <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>
            Explore that fit your Dreams
          </h2>
          <div className='space-x-6 mt-16'>
            <a href="#Potfolio" className='border border-white px-8 py-3 rounded hover:text-gray-400'>Portfolio</a>
            <a href="#Contact" className='bg-blue-500 px-8 py-3 rounded'>Contact Us</a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Header
