import React from "react";
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"; // Import icons

const Navbar = () => {
  return (
    <>
      {/* Top Navbar */}
      <nav className="px-5 py-4   z-50 dark:bg-gray-900">
        <div className="flex justify-between items-center">
          {/* Logo / Title */}
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            JEYDUUU
          </h1>

          {/* Navigation Links (Visible Only on Desktop) */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <a
                href="#"
                className="hover:text-gray-400 transition duration-300 text-gray-900 dark:text-white"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-400 transition duration-300 text-gray-900 dark:text-white"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-400 transition duration-300 text-gray-900 dark:text-white"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Social Media Icons (Always Visible) */}
          <div className="flex space-x-4">
            <a
              href="https://github.com/kevinbalocos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-5 h-5 bg-black text-white rounded-full hover:bg-gray-700 transition duration-300"
            >
              <FaGithub size={10} />
            </a>
            <a
              href="https://www.facebook.com/kevin.balocos.3/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-5 h-5 bg-black text-white rounded-full hover:bg-gray-700 transition duration-300"
            >
              <FaFacebook size={10} />
            </a>
            <a
              href="https://www.instagram.com/jeyduuuuuu/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-5 h-5 bg-black text-white rounded-full hover:bg-gray-700 transition duration-300"
            >
              <FaInstagram size={10} />
            </a>
            <a
              href="https://www.linkedin.com/in/jade-kevin-balocos-51b13b358/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-5 h-5 bg-black text-white rounded-full hover:bg-gray-700 transition duration-300"
            >
              <FaLinkedin size={10} />
            </a>
          </div>
        </div>
      </nav>

      {/* Bottom Navbar (Mobile Only) */}
      <nav className="fixed bottom-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50 md:hidden">
        <ul className="flex space-x-6 overflow-x-auto px-4 py-3 whitespace-nowrap">
          <li>
            <a
              href="#"
              className="text-gray-900 dark:text-white hover:text-gray-400 transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-900 dark:text-white hover:text-gray-400 transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-900 dark:text-white hover:text-gray-400 transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
