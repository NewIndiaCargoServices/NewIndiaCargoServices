import React from "react";
import { motion } from "framer-motion";
// import {motion} from "motion/react";
// Pricing Section Wrapper
const Pricing = () => {
  return (
    
    <motion.div
    initial={{opacity: 0, y:100}}
        transition={{duration: 1.5}}
        whileInView={{opacity: 1, y:0}}
        viewport={{always: true}}
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="Pricing"
    ><br /><br />
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Affordable{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Pricing
        </span>
      </h1>
      <p className="text-lg text-gray-800 mb-6 text-center">
        Scale with Confidence - Fair Pricing Guaranteed
      </p>

      {/* Cards Grid */}
      <br /> <br />
      <div className="grid gap-12 justify-center md:grid-cols-2 lg:grid-cols-3">
      <SquishyCard
          title="Let's Talk"
          price="Know Us"
          subtitle="For Individuals"
          features={[
            "Counseling",
            "1:1 Meetings",
            "Discuss on Your Requirement",
          ]}
          onClick={() => alert("Contacting Custom Plan")}
        /><SquishyCard
        title="Start with Us"
        price="Custom"
        subtitle="For Individuals"
        features={[
          "Provide the Dedicated counsellor",
          "Tailored Development",
          "1:1 Client Meetings",
          "Flexible Payment Terms",
        ]}
        onClick={() => alert("Contacting Custom Plan")}
      />
        <SquishyCard
          title="Partner with Us"
          price="Enterprise"
          subtitle="For Businesses"
          features={[
            "End-to-End Solution",
            "Dedicated Support",
            "Advanced Analytics",
            "High Availability",
            "Scalable Infrastructure",
          ]}
          onClick={() => alert("Contacting Enterprise Plan")}
        /> <br /><br />
      </div>
    </motion.div>
  );
};

// Reusable Card with Squishy effect
const SquishyCard = ({ title, subtitle, price, features, onClick }) => {
  return (
    <motion.div
      whileHover="hover"
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
      variants={{
        hover: {
          scale: 1.05,
        },
      }}
      className="relative w-full max-w-[380px] h-[28rem] flex-shrink-0 overflow-hidden rounded-xl bg-indigo-500 p-8"
    >
      <div className="relative z-10 text-white">
        <span className="mb-2 block w-fit rounded-full bg-white/30 px-3 py-0.5 text-sm font-light">
          {title}
        </span>
        <motion.span
          initial={{ scale: 0.85 }}
          variants={{ hover: { scale: 1 } }}
          transition={{ duration: 1, ease: "backInOut" }}
          className="my-2 block origin-top-left font-mono text-5xl font-black leading-tight"
        >
          {price}
        </motion.span>
        <p className="text-sm font-light text-white/80 mb-4">{subtitle}</p>
        <ul className="space-y-2 text-white/90 text-sm">
          {features.map((f, i) => (
            <li key={i}>✔ {f}</li>
          ))}
        </ul>
      </div>

      <div className='space-x-6 mt-16'>
            <a href="#Contact" className="absolute bottom-4 left-4 right-4 z-20 rounded border-2 border-white bg-white py-2 text-center font-mono font-black uppercase text-neutral-800 backdrop-blur transition-colors hover:bg-white/30 hover:text-white">Contact Us</a>
          </div>
      <Background />
    </motion.div>
  );
};

// Decorative animated background
const Background = () => {
  return (
    <motion.svg
      width="320"
      height="384"
      viewBox="0 0 320 384"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 z-0"
      variants={{ hover: { scale: 1.5 } }}
      transition={{ duration: 1, ease: "backInOut" }}
    >
      <motion.circle
        variants={{
          hover: {
            scaleY: 0.5,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="160.5"
        cy="114.5"
        r="101.5"
        fill="#262626"
      />
      <motion.ellipse
        variants={{
          hover: {
            scaleY: 2.25,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="160.5"
        cy="265.5"
        rx="101.5"
        ry="43.5"
        fill="#262626"
      />
    </motion.svg>
  );
};

export default Pricing;
