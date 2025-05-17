import React, { useState } from "react";
import { motion } from "framer-motion";
import { testimonialsData } from "../assets/assets";
import starIcon from "../assets/star_icon.svg"; // Ensure this exists

// Testimonials component (for the static testimonial section)
const Testimonials = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3, // Stagger time between each item
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50, // Start from below
    },
    visible: {
      opacity: 1,
      y: 0, // Move to normal position
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
    initial={{opacity: 0, y:100}}
        transition={{duration: 1.5}}
        whileInView={{opacity: 1, y:0}}
        viewport={{always: true}}
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden bg-white"
      id="Testomonial"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Customer{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Testimonials
        </span>
      </h1>
      <p className="text-lg text-gray-800 mb-6 text-center">
        Real Stories from Those Who Found with Us
      </p>
<br /><br /><br />
      <motion.div
        className="flex flex-wrap justify-center gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={index}
            className="max-w-[340px] border shadow-lg rounded px-8 py-12 text-center bg-white"
            variants={itemVariants}
            style={{
              perspective: "1000px", // Add perspective to the parent
            }}
          >
            <motion.div
              className="relative"
              style={{
                transformStyle: "preserve-3d", // Ensure 3D effect is preserved
                transition: "transform 0.3s ease-in-out", // Smooth transition for tilt
              }}
              whileHover={{
                rotateY: 10, // Rotate on Y-axis
                rotateX: -10, // Rotate on X-axis
              }}
            >
              <img
                className="w-20 h-20 rounded-full mx-auto mb-4"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <h2 className="text-xl text-gray-700 font-medium">{testimonial.name}</h2>
              <p className="text-gray-500 mb-4 text-sm">{testimonial.title}</p>
              <div className="flex justify-center gap-1 text-red-500 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, idx) => (
                  <img key={idx} src={starIcon} alt="rating" className="w-4 h-4" />
                ))}
              </div>
              <p className="text-gray-600">{testimonial.text}</p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
      <br /><br /><br />
      <br />
    </motion.div>
  );
};

export default Testimonials;
