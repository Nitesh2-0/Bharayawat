import React from 'react';
import { motion } from 'framer-motion';
import { FaSquareWhatsapp } from "react-icons/fa6";
import About from './About';
import WhyUs from '../Components/WhyUs';

const Home = () => {
  return (
    <div className="w-full min-h-[calc(100vh-9vh)]  p-9 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-300">
      <div id="home" className="w-full mx-auto flex flex-col lg:flex-row items-center lg:space-x-8 h-full">

        {/* Left Section - Headline and CTA */}
        <div className="w-full lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-indigo-800 dark:text-indigo-300 leading-tight break-words">
              Empowering Your Business with <span className="text-indigo-600">Innovative Solutions</span>
            </h1>
            <p className="mt-4 text-lg lg:text-xl text-gray-700 dark:text-gray-400 lg:max-w-md break-words">
              Bharyawat specializes in top-tier Web Development, Android Solutions, and Data-Driven Market Research to drive your business forward.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <div className='md:flex items-center space-y-4 md:space-y-0 gap-4'>
            <motion.a
              href="#"
              className="inline-block bg-indigo-600 text-white text-lg font-medium py-3 px-8 rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              Discover More
            </motion.a>

            <motion.a
              href="#"
              className="inline-block bg-indigo-600 text-white text-lg font-medium py-3 px-8 rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              Get in Touch
            </motion.a>

            <motion.div
              className='#'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <a
                href="https://wa.me/919155061725"
                target="_blank"
                rel="noopener noreferrer"
                className='flex items-center justify-center'
              >
                <FaSquareWhatsapp className='text-green-600 hidden md:block text-6xl bottom-5 cursor-pointer transition-transform transform hover:scale-125' />
              </a>
            </motion.div>

            <a
              href="https://wa.me/919155061725"
              target="_blank"
              rel="noopener noreferrer"
              className='flex items-center justify-center'
            >
              <FaSquareWhatsapp className='text-green-600 text-4xl md:hidden fixed z-50 bg-white rounded-md right-3 bottom-5 cursor-pointer transition-transform transform hover:scale-125' />
            </a>

          </div>
        </div>

        {/* Right Section - Hero Image */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
        >
          <div className="relative w-full max-w-md">
            <img
              src="/LandingPage_Img.webp"
              alt="Bharyawat Solutions"
              className="rounded-lg shadow-2xl max-w-full h-full"
            />
            <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 500 500" preserveAspectRatio="none">
              <motion.path
                d="M0 300 Q 250 100 500 300 V 500 H 0 Z"
                fill="rgba(255, 255, 255, 0.2)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </svg>
          </div>
        </motion.div>
      </div>
      <div id="about">
        <About />
      </div>
      <div id="whyus">
        <WhyUs />
      </div>
    </div>
  );
};

export default Home;
