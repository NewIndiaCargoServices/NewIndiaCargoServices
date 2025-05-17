import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets.js'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [showMobileMenu])

  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        {/* Wrap the logo with a Link component to navigate to the landing page */}
        <Link to="/">
          <img src={assets.logo} alt="logo" />
        </Link>

        <ul className='hidden md:flex gap-7 text-white'>
          <Link to={"#Header"} className='cursor-pointer hover:-underline hover:text-gray-400 '>Home</Link>
          <a href="#About" className='cursor-pointer hover:-underline hover:text-gray-400'>About</a>
          <a href="#Potfolio" className='cursor-pointer hover:-underline hover:text-gray-400'>Portfolio</a>
          <a href="#Pricing" className='cursor-pointer hover:-underline hover:text-gray-400'>Pricing</a>
          <a href="#Testomonial" className='cursor-pointer hover:-underline hover:text-gray-400'>Testimonial</a>
          <a href="#FAQs" className='cursor-pointer hover:-underline hover:text-gray-400'>FAQs</a>
          <a href="#Contact" className='cursor-pointer hover:text-grey-400 nav-contact'>Contact Us</a>
        </ul>

        {/* Menu Icon with Glassmorphism */}
        <div
          onClick={() => setShowMobileMenu(true)}
          className='md:hidden p-2 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 shadow-md cursor-pointer'
        >
          <img src={assets.menu_icon} className='w-6' alt='Menu' />
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden backdrop-blur-md bg-white/10 border border-white/20 shadow-lg transition-all`}>
        <div className='flex justify-end p-6 cursor-pointer'>
          <img src={assets.cross_icon} className='w-6' alt="Cross" onClick={() => setShowMobileMenu(false)} />
        </div>
        <ul className='flex flex-col items-center gap-2 px-5 text-lg font-medium '>
          {["Home", "About", "Portfolio", "Pricing", "Testimonial", "FAQs", "Contact Us"].map((text) => (
            <a key={text} onClick={() => setShowMobileMenu(false)} href="#Header" className='px-4 py-2 rounded-full inline-block'>
              {text}
            </a>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
