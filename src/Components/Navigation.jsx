import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { IoMenuOutline } from "react-icons/io5";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";
import { motion } from 'framer-motion';

const Navigation = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "about", "whyus"];
    const observerOptions = { threshold: 0.3 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach(sectionId => {
      const section = document.getElementById(sectionId);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode);
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <>
      <div className={`w-full h-[9vh] flex items-center justify-between px-4 md:px-6 lg:px-8 sticky top-0 z-50 border-b dark:border-b-gray-700 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
        <div className="flex items-center gap-2 cursor-pointer group">
          <motion.img
            src="/Logo.png"
            alt="logo"
            className="w-10 h-10 rounded-full object-contain transition-transform transform group-hover:scale-110 duration-300"
            whileHover={{ rotate: 360, scale: 1.1 }}
          />
          <h1 className="font-extrabold text-3xl tracking-wider transition-colors duration-300 group-hover:text-green-600 leading-none">
            ʙʜᴀʀʏᴀ
            <span className="text-green-600">ᴡ</span>
            <span className="text-red-500">ᴀ</span>
            <span className="text-yellow-500">ᴛ</span>
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-6 text-lg">
            {['home', 'about', 'whyus'].map((sectionId, index) => (
              <NavLink
                key={index}
                to={`#${sectionId}`}
                className={`transition-colors duration-300 px-4 py-2 rounded-full ${activeSection === sectionId
                    ? 'font-bold bg-[#9bf694ec] text-sm dark:bg-gray-700 text-gray-800 dark:text-gray-100'
                    : 'hover:text-gray-800 text-sm text-gray-600 dark:text-gray-200'
                  }`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {sectionId === "whyus" ? "Why Us":sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}
              </NavLink>
            ))}
          </div>

          <a
            href="https://wa.me/919155061725"
            target="_blank"
            rel="noopener noreferrer"
            className='flex items-center justify-center'
          >
            <FaSquareWhatsapp className='text-green-600 mr-4 hidden md:flex text-3xl cursor-pointer transition-transform transform hover:scale-125' />
          </a>

          <button onClick={() => setIsDarkMode(prev => !prev)} className="rounded-full p-1">
            {isDarkMode ? <MdOutlineLightMode className="text-yellow-500" size={24} /> : <MdDarkMode className="text-gray-700" size={24} />}
          </button>

          <div className="md:hidden mt-1">
            <button onClick={toggleMenu}>
              {isMenuOpen ? <MdOutlineClose size={32} /> : <IoMenuOutline size={36} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-18 left-0 w-full bg-white dark:bg-gray-800 shadow-md z-40 md:hidden"
        >
          {['home', 'about', 'whyus'].map((sectionId, index) => (
            <NavLink
              key={index}
              to={`#${sectionId}`}
              className={`block px-4 py-2 text-lg ${activeSection === sectionId
                  ? 'font-bold bg-[#9bf694ec] dark:bg-gray-700 text-gray-800 dark:text-gray-100'
                  : 'hover:text-gray-800 text-gray-600 dark:text-gray-200'
                }`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
            >
              {sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}
            </NavLink>
          ))}
        </motion.div>
      )}
    </>
  );
};

export default Navigation;
