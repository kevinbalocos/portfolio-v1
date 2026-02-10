// components/navbar.jsx
import React from "react";
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Sun, Moon } from "lucide-react";

/**
 * Props:
 * - darkMode, setDarkMode
 * - activePage, setActivePage
 */
const Navbar = ({ darkMode, setDarkMode, activePage, setActivePage }) => {
  const linkClassBase = "transition duration-300 cursor-pointer";
  const activeClass = "underline decoration-teal-500";
  const lightLink = "text-gray-900 hover:text-gray-400";
  const darkLink = "text-white hover:text-gray-300";

  const iconWrapperClass = darkMode
    ? "inline-flex items-center justify-center w-6 h-6 bg-black text-white rounded-full hover:bg-gray-700 transition duration-300"
    : "inline-flex items-center justify-center w-6 h-6 bg-white text-black rounded-full hover:bg-gray-100 transition duration-300";

  return (
    <>
      <nav className="px-5 py-4 z-50 bg-transparent">
        <div className="flex justify-between items-center">
          <h1
            className={
              darkMode
                ? "text-xl font-bold text-white"
                : "text-xl font-bold text-gray-900"
            }
          >
            JEYDUUU
          </h1>

          {/* Desktop links */}
          <ul className="hidden md:flex space-x-6 items-center">
            <li
              onClick={() => setActivePage("Projects")}
              className={`${linkClassBase} ${
                activePage === "Projects" ? activeClass : ""
              } ${darkMode ? darkLink : lightLink}`}
            >
              Projects
            </li>

            <li
              onClick={() => setActivePage("Contact")}
              className={`${linkClassBase} ${
                activePage === "Contact" ? activeClass : ""
              } ${darkMode ? darkLink : lightLink}`}
            >
              Contact
            </li>
          </ul>

          {/* Social + Theme */}
          <div className="flex items-center space-x-3 md:space-x-5 lg:space-x-5">
            <a
              href="https://github.com/kevinbalocos"
              target="_blank"
              rel="noopener noreferrer"
              className={iconWrapperClass}
              aria-label="GitHub"
            >
              <FaGithub size={14} />
            </a>
            <a
              href="https://www.facebook.com/kevin.balocos.3/"
              target="_blank"
              rel="noopener noreferrer"
              className={iconWrapperClass}
              aria-label="Facebook"
            >
              <FaFacebook size={14} />
            </a>
            <a
              href="https://www.instagram.com/jeyduuuuuu/"
              target="_blank"
              rel="noopener noreferrer"
              className={iconWrapperClass}
              aria-label="Instagram"
            >
              <FaInstagram size={14} />
            </a>
            <a
              href="https://www.linkedin.com/in/jade-kevin-balocos-51b13b358/"
              target="_blank"
              rel="noopener noreferrer"
              className={iconWrapperClass}
              aria-label="LinkedIn"
            >
              <FaLinkedin size={14} />
            </a>

            <button
              onClick={() => setDarkMode(!darkMode)}
              title="Toggle Dark Mode"
              aria-pressed={darkMode}
              aria-label="Toggle dark mode"
              className={`relative inline-flex items-center justify-center w-7 h-7 ml-2 border-2 border-transparent rounded-full transition-all duration-300 shadow-sm hover:shadow-md ${
                darkMode ? "bg-gray-700" : "bg-white"
              }`}
            >
              {darkMode ? (
                <Sun size={14} className="text-yellow-300" />
              ) : (
                <Moon size={14} className="text-black" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile bottom nav */}
      <nav
        className={
          darkMode
            ? "fixed bottom-0 left-0 w-full bg-gray-900 shadow-md z-50 md:hidden"
            : "fixed bottom-0 left-0 w-full bg-white shadow-md z-50 md:hidden"
        }
      >
        <ul className="flex justify-around items-center px-4 py-3">
          <li
            onClick={() => setActivePage("Projects")}
            className={`${darkMode ? "text-white" : "text-gray-900"} ${
              activePage === "Projects" ? "font-semibold" : "font-normal"
            }`}
          >
            Projects
          </li>
       
          <li
            onClick={() => setActivePage("Contact")}
            className={`${darkMode ? "text-white" : "text-gray-900"} ${
              activePage === "Contact" ? "font-semibold" : "font-normal"
            }`}
          >
            Contact
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
