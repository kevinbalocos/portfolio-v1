import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiVite,
  SiFigma,
  SiPostman,
  SiGithub,
  SiFirebase,
  SiMysql,
  SiPhp,
  SiSocketdotio,
  SiAxios,
  SiFramer,
  SiDocker,
} from "react-icons/si";

import { BsAwardFill, BsPeopleFill, BsFillLightbulbFill } from "react-icons/bs";

const categories = [
  {
    title: "Technologies",
    items: [
      { name: "HTML", icon: <FaHtml5 className="text-teal-400 text-sm" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-teal-400 text-sm" /> },
      { name: "JavaScript", icon: <FaJs className="text-teal-400 text-sm" /> },
      {
        name: "React",
        icon: <FaReact className="text-teal-400 text-sm animate-spin" />,
      },
      { name: "Vite", icon: <SiVite className="text-teal-400 text-sm" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-teal-400 text-sm" />,
      },
      { name: "Node.js", icon: <FaNodeJs className="text-teal-400 text-sm" /> },
      {
        name: "Express",
        icon: <SiExpress className="text-teal-400 text-sm" />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-teal-400 text-sm" />,
      },
      { name: "MySQL", icon: <SiMysql className="text-teal-400 text-sm" /> },
      {
        name: "CodeIgniter",
        icon: <SiPhp className="text-teal-400 text-sm" />,
      },
      { name: "PHP", icon: <SiPhp className="text-teal-400 text-sm" /> },
      {
        name: "REST API",
        icon: <SiPostman className="text-teal-400 text-sm" />,
      },
      {
        name: "WebSockets",
        icon: <SiSocketdotio className="text-teal-400 text-sm" />,
      },
      { name: "Git", icon: <FaGitAlt className="text-teal-400 text-sm" /> },
      { name: "GitHub", icon: <SiGithub className="text-teal-400 text-sm" /> },
      { name: "Axios", icon: <SiAxios className="text-teal-400 text-sm" /> },
      {
        name: "Framer Motion",
        icon: <SiFramer className="text-teal-400 text-sm" />,
      },
      { name: "Figma", icon: <SiFigma className="text-teal-400 text-sm" /> },
      { name: "Docker", icon: <SiDocker className="text-teal-400 text-sm" /> },
    ],
  },

  {
    title: "Certifications & Achievements",
    items: [
      {
        name: "Certified Web Developer",
        icon: <BsAwardFill className="text-teal-400 text-sm" />,
      },
      {
        name: "Google Data Analytics Professional Certificate",
        icon: <BsAwardFill className="text-teal-400 text-sm" />,
      },
      {
        name: "Google IT Support Professional Certificate",
        icon: <BsAwardFill className="text-teal-400 text-sm" />,
      },
      {
        name: "Solo Open Source Project Contributor",
        icon: <BsAwardFill className="text-teal-400 text-sm" />,
      },
    ],
  },

  {
    title: "Soft Skills",
    items: [
      {
        name: "Problem-Solving",
        icon: <BsFillLightbulbFill className="text-teal-400 text-sm" />,
      },
      {
        name: "Teamwork",
        icon: <BsPeopleFill className="text-teal-400 text-sm" />,
      },
      {
        name: "Leadership",
        icon: <BsPeopleFill className="text-teal-400 text-sm" />,
      },
      {
        name: "Adaptability",
        icon: <BsFillLightbulbFill className="text-teal-400 text-sm" />,
      },
      {
        name: "Time Management",
        icon: <BsFillLightbulbFill className="text-teal-400 text-sm" />,
      },
    ],
  },

  {
    title: "Open Source Contributions",
    items: [
      {
        name: "GitHub Projects",
        icon: <SiGithub className="text-teal-400 text-sm" />,
      },
      {
        name: "Open Source Collaborations",
        icon: <SiGithub className="text-teal-400 text-sm" />,
      },
    ],
  },
];

const TechnologiesUsed = ({ darkMode }) => {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth / 2);
    }
  }, []);

  return (
    <div
      className={`relative flex flex-col items-center justify-center h-[500px] rounded-lg w-full p-4
 ${
   darkMode
     ? "bg-gray-900 text-white border-gray-700"
     : "bg-white text-gray-900 border-gray-200"
 }
    `}
    >
      {/* Left Shadow  */}
      <div
        className={`absolute left-0 top-0 h-full w-12  z-10 ${
          darkMode
            ? "bg-gradient-to-r from-gray-900 via-gray-900  to-transparent"
            : "bg-gradient-to-r from-white via-white  to-transparent"
        }`}
      ></div>

      {/* Right Shadow */}
      <div
        className={`absolute right-0 top-0 h-full w-12  z-10 ${
          darkMode
            ? "bg-gradient-to-l from-gray-900 via-gray-900  to-transparent"
            : "bg-gradient-to-l from-white via-white  to-transparent"
        }`}
      ></div>

      {categories.map((category, idx) => (
        <div key={idx} className="w-full mb-4">
          <h3
            className={`text-xs tracking-widest ml-5 uppercase font-bold  mb-2 ${
              darkMode ? "text-white" : "text-black"
            } `}
          >
            {category.title}
          </h3>
          <div className="w-full overflow-hidden relative flex">
            <motion.div
              ref={containerRef}
              className="flex space-x-6 w-max items-center"
              animate={{ x: [0, -width] }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              style={{ display: "flex", whiteSpace: "nowrap" }}
            >
              {[...category.items, ...category.items].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-2 border border-teal-500 px-4 py-2  rounded-md shadow-md ${
                    darkMode ? "bg-gray-700" : ""
                  }`}
                >
                  {item.icon}
                  <span
                    className={`text-xs font-semibold  ${
                      darkMode ? "text-white" : "text-black"
                    }`}
                  >
                    {item.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechnologiesUsed;
