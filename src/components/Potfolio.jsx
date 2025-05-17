import React, { useRef } from 'react';
import { assets, portfolioData } from '../assets/assets';
import {motion} from 'motion/react'
const Potfolio = () => {
  const sliderRef = useRef(null);

  const scrollToWithEase = (element, distance, duration = 500, easingFunc = easeInOutQuad) => {
    const start = element.scrollLeft;
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = easingFunc(progress);

      element.scrollLeft = start + distance * ease;

      if (elapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  const easeInOutQuad = (t) =>
    t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

  const scrollLeft = () => {
    if (sliderRef.current) {
      scrollToWithEase(sliderRef.current, -300, 600);
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      scrollToWithEase(sliderRef.current, 300, 600);
    }
  };

  return (
    
    <motion.div 
    initial={{opacity: 0, y:100}}
        transition={{duration: 1.5}}
        whileInView={{opacity: 1, y:0}}
        viewport={{always: true}}
    
    className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='Potfolio'>
      <br /><br />
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        Portfolio <span className='underline underline-offset-4 decoration-1 font-light'>of Excellence</span>
      </h1>
      <p className='text-lg text-gray-800 mb-6 text-center'>
        High quality and demonstrate exceptional skill or achievement
      </p>

      {/* Slider Container with Buttons on Sides */}
      <div className='relative'>
        {/* Previous Button (Left) */}
        <button
          id="previous"
          onClick={scrollLeft}
          className='absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full'
        >
          <img src={assets.left_arrow} alt="Previous" />
        </button>

        {/* Next Button (Right) */}
        <button
          id="next"
          onClick={scrollRight}
          className='absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full'
        >
          <img src={assets.right_arrow} alt="Next" />
        </button>

        {/* Portfolio Slider */}
        <div
          ref={sliderRef}
          className='flex gap-8 overflow-x-auto no-scrollbar px-10'
        >
          {portfolioData.map((Portfolio, index) => (
            <div key={index} className='relative flex-shrink-0 w-72'>
              <img
                src={Portfolio.image}
                alt={Portfolio.title}
                className='w-full h-auto mb-14 rounded-lg shadow-md'
              />
              <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                  <h2 className='text-xl font-semibold text-gray-800'>
                    {Portfolio.title}
                  </h2>
                  <p className='text-gray-500 text-sm'>
                    <span>{Portfolio.text}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div></div>
        <div style={{ fontSize: '24px' }}>At&nbsp;
        <span className="text text-violet-900">N</span>
    <span className="text text-green-600">I</span>
    <span className="text text-blue-900">C</span>
    <span className="text text-violet-900">S,</span>&nbsp;
          We take pride in the logistics solutions we've delivered for businesses across industries. Explore some of our key projects, successful case studies, and client partnerships below.  <br /> <br />
          Over the years, <span className="text-violet-900">New</span>
  <span className="text-green-600">I</span>
  <span className="text-violet-900">ndia</span>
  <span className="text-blue-900">Ca</span>
  <span className="text-violet-900">rgo</span>
  <span className="text-violet-900">Services</span> has successfully executed logistics solutions for a wide range of clients — from startups to global enterprises. <br /> <br /> We’ve partnered with clients across industries to streamline operations, reduce costs, and deliver goods faster. From high-volume freight to time-sensitive last-mile deliveries, our solutions have powered businesses locally and globally.
  </div><br />
      
    </motion.div>
  );
};

export default Potfolio;
