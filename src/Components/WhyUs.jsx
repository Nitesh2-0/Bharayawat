import React, { useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FaHandshake, FaShieldAlt, FaRocket, FaPeopleArrows, FaLaptopCode } from 'react-icons/fa';

const WhyUs = () => {
  const cardAnimation = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -50, scale: 0.95 }, // Fade out and move up on exit
  };

  // Create refs and in-view hooks for each card
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);

  const inView1 = useInView(ref1, { threshold: 0.3 });
  const inView2 = useInView(ref2, { threshold: 0.3 });
  const inView3 = useInView(ref3, { threshold: 0.3 });
  const inView4 = useInView(ref4, { threshold: 0.3 });
  const inView5 = useInView(ref5, { threshold: 0.3 });

  const cards = [
    { ref: ref1, inView: inView1, icon: <FaShieldAlt className="text-5xl text-indigo-600" />, title: "Trust & Reliability", description: "We prioritize transparency and reliability in all our engagements to ensure your peace of mind." },
    { ref: ref2, inView: inView2, icon: <FaRocket className="text-5xl text-red-600" />, title: "Innovative Solutions", description: "Our team brings cutting-edge technology to the table, ensuring your business stays ahead." },
    { ref: ref3, inView: inView3, icon: <FaPeopleArrows className="text-5xl text-green-600" />, title: "Client-Centered Approach", description: "We place your needs at the forefront, tailoring solutions that align with your vision." },
    { ref: ref4, inView: inView4, icon: <FaLaptopCode className="text-5xl text-blue-600" />, title: "Expert Team", description: "Our team of professionals brings diverse expertise and knowledge, ensuring top-notch results." },
    { ref: ref5, inView: inView5, icon: <FaHandshake className="text-5xl text-yellow-600" />, title: "Long-Term Partnerships", description: "We believe in building lasting partnerships, ensuring ongoing success and growth." },
  ];

  return (
    <section className="py-20 px-4 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">
          Why Choose Us?
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          Discover the values that set us apart and make us the right choice for your business.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <AnimatePresence>
            {cards.map((card, index) => (
              <motion.div
                ref={card.ref}
                key={index}
                initial="hidden"
                animate={card.inView ? "visible" : "hidden"}
                exit="exit"
                variants={cardAnimation}
                transition={{ duration: 0.7, delay: index * 0.15, type: "spring" }}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transform transition-transform duration-300 hover:scale-105"
              >
                <div className="flex justify-center mb-4">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
