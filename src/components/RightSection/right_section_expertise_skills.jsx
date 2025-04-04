import React, { useState, useEffect } from "react";
import {
  Code,
  BarChart,
  Bolt,
  Palette,
  FileText,
  ChevronDown,
} from "lucide-react";

const skills = [
  {
    icon: <Code />,
    title: "Web Development",
    level: 95,
    description:
      "Proficient in CodeIgniter, React (Vite), MongoDB, and Tailwind CSS.",
  },

  {
    icon: <Bolt />,
    title: "Real-Time Systems",
    level: 60,
    description: "Expert in WebSockets and live-data applications.",
  },
  {
    icon: <Palette />,
    title: "UI/UX & Digital Design",
    level: 90,
    description: "Skilled in designing futuristic, engaging user interfaces.",
  },
  {
    icon: <FileText />,
    title: "File Management Systems",
    level: 88,
    description:
      "Developed advanced file handling with structured categorization.",
  },
];

const RightSectionExpertiseSkills = ({ darkMode }) => {
  const [expanded, setExpanded] = useState(true);
  const [highlightedSkill, setHighlightedSkill] = useState(0);
  const [sortedSkills, setSortedSkills] = useState(skills);

  // Auto-highlight different expertise every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedSkill((prev) => (prev + 1) % skills.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Sorting function
  const sortSkills = () => {
    const sorted = [...sortedSkills].sort((a, b) => b.level - a.level);
    setSortedSkills(sorted);
  };

  return (
    <div className="">
      <div
        className={`shadow-md rounded-lg p-5 border transition ${
          darkMode
            ? "bg-gray-900 text-white border-gray-700"
            : "bg-white text-gray-900 border-gray-200"
        }`}
      >
        {/* Toggle Section */}
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setExpanded(!expanded)}
        >
          <h2
            className={`text-md font-semibold uppercase tracking-tighter flex items-center gap-2 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            <Bolt className="w-6 h-6 text-teal-500" /> Expertise & Skills
          </h2>
          <ChevronDown
            className={`w-5 h-5 text-teal-600 transition-transform ${
              expanded ? "rotate-180" : ""
            }`}
          />
        </div>

        {/* Expertise Skills */}
        {expanded && (
          <div className="mt-3">
            <button
              onClick={sortSkills}
              className={`w-full text-teal-600 uppercase border border-teal-600 px-3 py-2 rounded-md cursor-pointer transition ${
                darkMode
                  ? "bg-gray-800 text-white hover:bg-gray-700 border-teal-500"
                  : "bg-white text-gray-900 hover:bg-teal-50"
              }`}
            >
              Sort by Proficiency
            </button>

            <div className="grid grid-cols-1 gap-3 mt-3">
              {sortedSkills.map((skill, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 p-3 rounded-md border shadow-sm transition ${
                    darkMode
                      ? `border-gray-600 text-white ${
                          index === highlightedSkill
                            ? "bg-gray-800 scale-105 shadow-md"
                            : "bg-gray-900"
                        }`
                      : `border-gray-300 text-gray-900 ${
                          index === highlightedSkill
                            ? "bg-gray-100 scale-105 shadow-md"
                            : "bg-white"
                        }`
                  }`}
                >
                  <div className="text-teal-400 w-6 h-6">{skill.icon}</div>
                  <div>
                    <h3 className="font-medium">{skill.title}</h3>
                    <p className="text-sm">{skill.description}</p>
                    <div
                      className={`w-full h-2 rounded-full mt-2 ${
                        darkMode ? "bg-gray-700" : "bg-gray-200"
                      }`}
                    >
                      <div
                        className="bg-teal-500 h-2 rounded-full transition-all"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RightSectionExpertiseSkills;
