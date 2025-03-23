import React from "react";
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"; // Import icons

const Navbar = () => {
  return (
    <nav className="">
      <div className="container mx-10 flex justify-between items-center">
        {/* Logo / Title */}
        <h1 className="text-xl font-bold">JEYDUUU</h1>

        {/* Navigation Links */}
        <ul className="flex space-x-4 ">
          <li>
            <a href="#" className="hover:text-gray-400 transition duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400 transition duration-300">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400 transition duration-300">
              Contact
            </a>
          </li>
        </ul>

        {/* Social Media Icons */}
        <div className="flex space-x-4 ">
          <a
            href="https://github.com/kevinbalocos"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition duration-300"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.facebook.com/kevin.balocos.3/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition duration-300"
          >
            <FaFacebook size={22} />
          </a>
          <a
            href="https://www.instagram.com/jeyduuuuuu/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition duration-300"
          >
            <FaInstagram size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/jade-kevin-balocos-51b13b358/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition duration-300"
          >
            <FaLinkedin size={22} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
