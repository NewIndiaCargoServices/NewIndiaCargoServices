import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'

// Ensure your assets file exports the video, e.g.:
// export const assets = { vid1: require('./videos/vid1.mp4'), /* ... */ }

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ always: true }}
      className="flex flex-col items-center justify-center container mx-auto px-6 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    ><br /><br /><br />
      <div className="pt-16" />
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        About <span className="underline underline-offset-4 decoration-1 font-light">Us</span>
      </h1>
      <p className="text-lg text-gray-800 mb-6">Leading logistics and supply chain solutions provider</p>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20 w-full">

        {/* Video Section */}
        <div className="w-full sm:w-1/2 max-w-lg max-h-lg">
          <video
            className="fade-in w-full h-full rounded-lg shadow-lg"
            autoPlay
            loop
            muted
            playsInline
            controls={false}
          >
            <source src={assets.vidh1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Stats & Description */}
        <div className="flex flex-col items-center md:items-start w-full">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-10 text-center w-full">
            <div>
              <p className="text-4xl font-semibold text-gray-900">10+</p>
              <p>Years of Excellence</p>
            </div>
            <div>
              <p className="text-4xl font-semibold text-gray-900">12+</p>
              <p>Warehouses</p>
            </div>
            <div>
              <p className="text-4xl font-semibold text-gray-900">20+</p>
              <p>Fleet Vehicles</p>
            </div>
            <div>
              <p className="text-4xl font-semibold text-gray-900">100+</p>
              <p>Shipments Handled Daily</p>
            </div>
          </div>
          <div className="mt-6 text-lg leading-relaxed">
            <p>
              <span className="text-violet-900 font-bold">New</span>
              <span className="text-green-600 font-bold">I</span>
              <span className="text-violet-900 font-bold">ndia</span>
              <span className="text-blue-900 font-bold">Ca</span>
              <span className="text-violet-900 font-bold">rgo</span>
              <span className="text-violet-900 font-bold">Services</span>
              &nbsp;is a leading logistics and supply chain solutions provider.
            </p>
            <p className="mt-4">
              <span className="text-violet-900 font-bold">N</span>
              <span className="text-green-600 font-bold">I</span>
              <span className="text-blue-900 font-bold">C</span>
              <span className="text-violet-900 font-bold">S</span>
              &nbsp;provides a "One-Stop-Solution" to meet all of your Domestic & International logistics requirements.
            </p>
            <ul className="list-disc list-inside mt-4">
              <li>Freight forwarding (air, sea, and land)</li>
              <li>Last-mile delivery</li>
              <li>Warehousing & inventory management</li>
              <li>Real-time logistics tracking</li>
            </ul>
            <p className="mt-4">All backed by smart technology and a skilled operations team.</p>
          </div>
          <button className="mt-6 bg-blue-600 text-white px-8 py-2 rounded-full shadow-md hover:bg-blue-700 transition">
            Contact Us
          </button>
        </div>
      </div><br /> <br />
    </motion.div>
  )
}

export default About;
