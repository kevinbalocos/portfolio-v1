import React, { useState, useEffect } from "react";
import { Code, Bolt, Palette, FileText, Star, TrendingUp } from "lucide-react";
// Calculate years based on start dates
const calculateYears = (startYear) => {
  return new Date().getFullYear() - startYear;
};

const skills = [
  {
    icon: <Code className="w-4 h-4" />,
    title: "Web Development",
    startYear: 2020,
    tech: "React • CSS • Tailwind",
  },
  {
    icon: <Bolt className="w-4 h-4" />,
    title: "Real-Time Systems",
    startYear: 2020,
    tech: "WebSocket • Live Data",
  },
  {
    icon: <Palette className="w-4 h-4" />,
    title: "UI/UX Design",
    startYear: 2020,
    tech: "Design Systems",
  },
  {
    icon: <FileText className="w-4 h-4" />,
    title: "AI Development",
    startYear: 2024,
    tech: "Providing AI to existing systems",
  },
].map((skill) => ({ ...skill, years: calculateYears(skill.startYear) }));

const RightSectionExpertiseSkills = ({ darkMode = false }) => {
  const [activeSkill, setActiveSkill] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSkill((prev) => (prev + 1) % skills.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const totalYears = skills.reduce((sum, skill) => sum + skill.years, 0);

  return (
    <div
      className={`rounded-xl p-5 border transition-all duration-300 ${
        darkMode
          ? "bg-gray-900 backdrop-blur-sm border-gray-700/50"
          : "bg-white backdrop-blur-sm border-gray-200/50"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <div
            className={`p-2 rounded-lg ${
              darkMode ? "bg-teal-500/20" : "bg-teal-100"
            }`}
          >
            <Star className="w-4 h-4 text-teal-500" />
          </div>
          <div>
            <h2
              className={`text-lg font-bold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Skills
            </h2>
            <p
              className={`text-xs ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {totalYears} years experience
            </p>
          </div>
        </div>
        <div
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            darkMode
              ? "bg-teal-900/30 text-teal-300"
              : "bg-teal-100 text-teal-700"
          }`}
        >
          {skills.length} skills
        </div>
      </div>

      {/* Skills List */}
      <div className="space-y-3">
        {skills.map((skill, index) => {
          const isActive = index === activeSkill;
          const seniorityColor =
            skill.years >= 6 ? "emerald" : skill.years >= 3 ? "blue" : "amber";

          return (
            <div
              key={index}
              className={`relative p-3 rounded-xl border transition-all duration-300 cursor-pointer group ${
                darkMode
                  ? `border-gray-700/50 ${
                      isActive
                        ? "bg-gray-800/60 border-teal-500/40 shadow-lg shadow-teal-500/10"
                        : "bg-gray-800/30 hover:bg-gray-800/50"
                    }`
                  : `border-gray-200/50 ${
                      isActive
                        ? "bg-white border-teal-300/40 shadow-lg shadow-teal-500/10"
                        : "bg-gray-50/30 hover:bg-white/60"
                    }`
              }`}
              onClick={() => setActiveSkill(index)}
            >
              {/* Active indicator */}
              {isActive && (
                <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-8 bg-teal-500 rounded-full" />
              )}

              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div
                    className={`p-1.5 rounded-lg transition-colors ${
                      isActive
                        ? "bg-teal-500/20 text-teal-400"
                        : darkMode
                        ? "bg-gray-700 text-gray-400"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {skill.icon}
                  </div>
                  <div>
                    <h3
                      className={`text-sm font-semibold ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {skill.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <span
                    className={`text-xs font-bold px-2 py-1 rounded-full ${
                      seniorityColor === "emerald"
                        ? "bg-emerald-100 text-emerald-700"
                        : seniorityColor === "blue"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {skill.years}y
                  </span>
                </div>
              </div>

              {/* Tech Stack */}
              <p
                className={`text-xs ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {skill.tech}
              </p>
            </div>
          );
        })}
      </div>

      {/* Footer Stats */}
      <div
        className={`mt-5 pt-3 border-t flex items-center justify-center gap-4 ${
          darkMode ? "border-gray-700/50" : "border-gray-200/50"
        }`}
      >
        <div className="flex items-center gap-1">
          <TrendingUp className="w-3 h-3 text-teal-500" />
          <span
            className={`text-xs font-medium ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Growing expertise
          </span>
        </div>
      </div>
    </div>
  );
};

export default RightSectionExpertiseSkills;
