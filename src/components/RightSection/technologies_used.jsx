import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiVite } from "react-icons/si";

const technologies = [
  { name: "HTML", icon: <FaHtml5 className="text-teal-900 text-sm" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-teal-900 text-sm" /> },
  { name: "JavaScript", icon: <FaJs className="text-teal-900 text-sm" /> },
  { name: "React", icon: <FaReact className="text-teal-900 text-sm animate-spin" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-900 text-sm" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-teal-900 text-sm" /> },
  { name: "Express", icon: <SiExpress className="text-teal-900 text-sm" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-teal-900 text-sm" /> },
  { name: "Git", icon: <FaGitAlt className="text-teal-900 text-sm" /> },
  { name: "Vite", icon: <SiVite className="text-teal-900 text-sm" /> },
];

const TechnologiesUsed = () => {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth / 2);
    }
  }, []);

  return (
    <div className="flex items-center justify-center bg-white shadow-2xl rounded-lg w-full p-2 relative overflow-hidden">
      <div className="w-full overflow-hidden relative flex">
        <motion.div
          ref={containerRef}
          className="flex space-x-6 w-max items-center"
          animate={{ x: [0, -width] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          style={{ display: "flex", whiteSpace: "nowrap" }}
        >
          {[...technologies, ...technologies].map((tech, index) => (
            <div key={index} className="flex items-center space-x-2 border border-teal-900 px-4 py-2 rounded-md shadow-md">
              {tech.icon}
              <span className="text-xs font-semibold text-black">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TechnologiesUsed;
