import React from "react";
import hero from "../../assets/hero.png";
import { logos } from "../../Data";
import { motion } from "framer-motion";

const Home = () => {
  const textElement = document.getElementById("typewriter-text");

  // ... rest of your component code ...

  function typeWriter() {
    // ... your typewriter animation logic here ...
  }

  typeWriter(); // Call the function to initiate the animation

  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="section" id="home">
      <div className="md:flex items-center justify-center">
        <div className="md:w-[60%]">
          <img src={hero} alt="" className="w-full" />
        </div>
        <div className="md:w-[40%] md:pl-10 mt-8 md:mt-0">
          <div className="font-bold text-xs text-Teal mb-4 flex justify-center items-center h-full">
            your e-learning partner
          </div>
          <div
            id="typewriter-text"
            class="sm:text-red-500 text-red-400 font-bold mb-4 flex justify-center items-center h-full"
          >
            This is <br /> the new way <br /> to learn online
          </div>
          <p className="text-sm leading-7 text-gray max-w-sm mb-6  flex justify-center items-center h-full">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
            officia sit vitae quo, eum similique?
          </p>
          <div>
            <button
              className={`px-6 py-3 font-bold text-black bg-Teal rounded-lg mr-4 text-sm mb-4 hover:bg-red-500 hover:text-red-500 border border-solid border-gray rounded-lg`}
            >
              {" "}
              Get Started
            </button>
            <button
              className={`px-6 py-3 font-bold text-black bg-Teal rounded-lg mr-4 text-sm mb-4 hover:bg-red-500 hover:text-red-500 border border-solid border-gray rounded-lg`}
            >
              {" "}
              Discover
            </button>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center text-xl">
          We collaborate with{" "}
          <span className="text-Teal">
            100+ leading universities and companies
          </span>
        </p>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="flex items-center justify-center flex-wrap gap-8 p-2"
        >
          {logos.map((logo, index) => (
            <motion.div variants={item} className="w-28" key={index}>
              <img src={logo} alt="" className="w-full object-cover" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
