import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { FaSquareWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t dark:border-gray-700 py-10">
      <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-start">
        {/* Logo and Company Info */}
        <div className="max-w-xs mb-6 md:mb-0">
          <img src="logo.png" alt="Company Logo" className="w-16 mb-4" />
          <h1 className="font-extrabold dark:text-gray-200 text-2xl tracking-wider leading-none">
            ʙʜᴀʀʏᴀ
            <span className="text-green-600">ᴡ</span>
            <span className="text-red-500">ᴀ</span>
            <span className="text-yellow-500">ᴛ</span>
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Empowering your business with innovative solutions. We provide top-notch services in web development and market research.
          </p>
        </div>

        {/* Company Links */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold dark:text-gray-300 text-gray-800 mb-4">Quick Access</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="text-gray-700 hover:text-gray-900 transition dark:text-gray-400 duration-300">Home</a></li>
            <li><a href="#work" className="text-gray-700 hover:text-gray-900 transition dark:text-gray-400 duration-300">Work</a></li>
            <li><a href="#about" className="text-gray-700 hover:text-gray-900 transition dark:text-gray-400 duration-300">About</a></li>
            <li><a href="#contact" className="text-gray-700 hover:text-gray-900 transition dark:text-gray-400 duration-300">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold dark:text-gray-300 text-gray-800 mb-4">GET IN TOUCH</h3>
          <p className="text-gray-700 dark:text-gray-400 mb-2">Enquire :- <a href="tel:+91915506175" className="text-indigo-600 hover:underline">+91 915506175</a></p>
          <p className="text-gray-700 dark:text-gray-400 mb-2">Email :- <a href="mailto:bharyawat@gmail.com" className="text-indigo-600 hover:underline">bharyawat@gmail.com</a></p>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-700 text-3xl hover:text-gray-900 transition dark:text-gray-400 dark:hover:text-gray-200">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-700 text-3xl hover:text-gray-900 transition dark:text-gray-400 dark:hover:text-gray-200">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-700 text-3xl hover:text-gray-900 transition dark:text-gray-400 dark:hover:text-gray-200">
              <FaLinkedinIn  />
            </a>
            <a href="#" className="text-gray-700 text-3xl hover:text-gray-900 transition dark:text-gray-400 dark:hover:text-gray-200">
              <FaInstagram />
            </a>
            <a
            href="https://wa.me/919155061725"
            target="_blank"
            rel="noopener noreferrer"
            className='flex items-center justify-center'
          >
            <FaSquareWhatsapp className='text-green-600 text-3xl bottom-5 cursor-pointer transition-transform transform hover:scale-125' />
          </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className='border-t px-2 dark:border-gray-700 mt-6 pt-4 text-center'>
        <p className="text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} All Rights Reserved by <span className="font-semibold">Bharyawat</span>.
          <span className="text-indigo-600 hover:underline cursor-pointer"> Privacy Policy</span> |
          <span className="text-indigo-600 hover:underline cursor-pointer"> Terms of Service</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
