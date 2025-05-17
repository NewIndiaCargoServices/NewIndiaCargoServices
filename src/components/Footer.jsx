import React from 'react'
import {assets} from '../assets/assets'
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <motion.div 
    this is not working initial={{opacity: 0, y:100}}
        transition={{duration: 1.5}}
        whileInView={{opacity: 1, y:0}}
        viewport={{always: true}}
    className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
            <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                <img src={assets.logo} alt="" />
                <p className='text-gray-400 mt-4'>We provide end-to-end logistics solutions — from warehousing to last-mile delivery — all powered by smart technology and a dedicated team.</p>
            </div>
            <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
                <ul className='flex flex-col gap-2 text-gray-400'>
                    <a href="#Header" className='hover:text-white'>Home</a>
                    <a href="#About" className='hover:text-white'>About Us</a>
                    <a href="#Potfolio" className='hover:text-white'>Potfolio</a>
                    <a href="#Pricing" className='hover:text-white'>Pricing</a>
                    <a href="#Testimonial" className='hover:text-white'>Testimonial</a>
                    <a href="#FAQs" className='hover:text-white'>FAQs</a>
                    <a href="#Contact" className='hover:text-white'>Contact Us</a>
                    <a href="#Privacy" className='hover:text-white'>Privacy & Policy</a>
                </ul>
            </div>
            <div className='w-full md:w-1/3'>
            <h3 className='text-white text-lg font-bold mb-4'>Subscribe to Blog</h3>
            <p className='text-gray-400 mb-4 max-w-80'> The latest news, article, and resource, sent to your inbox weakly</p>
            <div className='flex gap-2'>
                <input type="email" placeholder='Enter your E-mail' className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto'/>
                <button className='py-2 px-4 rounded bg-blue-500 text-white'>Suscribe</button>
            </div>
            </div>
        </div>
        <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500 '>
            Copyright 2025 © NewIndiaCargoServices. <br /> All Right Reaserved
        </div>
    </motion.div>
  )
}

export default Footer
