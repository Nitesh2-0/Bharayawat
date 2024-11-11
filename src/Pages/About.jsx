import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaAndroid, FaChartLine } from 'react-icons/fa';

const About = () => {
  const cardAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">
          Empowering Your Business with Innovative Solutions
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          At Bharyawat, we focus on client satisfaction by delivering powerful, customized solutions that drive your business forward—at a fraction of the market cost.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Web Development Card */}
          <motion.div
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
            variants={cardAnimation}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transform transition-transform duration-300"
          >
            <div className="flex justify-center mb-4">
              <FaCode className="text-4xl text-green-500" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Web Development
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Creating responsive, engaging websites that prioritize user experience and ensure your business shines online.
            </p>
          </motion.div>

          {/* Android Solutions Card */}
          <motion.div
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
            variants={cardAnimation}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transform transition-transform duration-300"
          >
            <div className="flex justify-center mb-4">
              <FaAndroid className="text-4xl text-blue-500" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Android Solutions
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Delivering top-quality, performance-focused Android solutions tailored to enhance client engagement and satisfaction.
            </p>
          </motion.div>

          {/* Data-Driven Market Research Card */}
          <motion.div
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
            variants={cardAnimation}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transform transition-transform duration-300"
          >
            <div className="flex justify-center mb-4">
              <FaChartLine className="text-4xl text-yellow-500" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Data-Driven Market Research
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Gain competitive advantage with data-driven insights, empowering you to make informed decisions and lead the market.
            </p>
          </motion.div>
        </div>

        <div className="mt-12">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Join us as we help transform businesses with powerful, innovative solutions that prioritize your success—at a cost-effective rate unmatched in the industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
