import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import ExpertiseSkills from "./components/RightSection/right_section_expertise_skills";
import BackgroundProfile from "./components/LeftSection/background_profile";
import TecnologiesUsed from "./components/RightSection/technologies_used";
import Projects from "./components/MainContent/projects";
import ParticlesBg from "particles-bg";

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className={`relative min-h-screen w-full ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } overflow-hidden`}
    >
      <div
        className="min-h-screen flex flex-col relative bottom-0 left-0 right-0 top-0 
        bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] 
        bg-[size:5px_5px] [mask-image:radial-gradient(ellipse_100%_90%_at_10%_10%,#000_70%,transparent_200%)]"
      >
        {/* Background particles */}
        <div className="absolute inset-0 z-0">
          <ParticlesBg
            type="cobweb"
            num={100}
            color={darkMode ? "#ffffff" : "#0c0c0f"}
          />
        </div>

        {/* Navbar */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Main Container */}
        <div className="mx-3 flex flex-col md:flex-row flex-grow overflow-auto">
          {/* Left Sidebar */}
          <aside className="w-full md:w-[250px] lg:min-w-[350px] h-[calc(100vh-200px)] p-1 flex flex-col z-10 overflow-auto">
            <BackgroundProfile />
          </aside>

          {/* Main Content */}
          <main className="w-full p-1 flex flex-col z-10 overflow-auto">
            <Projects />
          </main>

          {/* Right Sidebar */}
          <aside
            className={`w-full md:w-[250px] lg:min-w-[350px] gap-1 p-1 h-[calc(100vh-90px)] flex flex-col z-10 overflow-y-auto 
  ${darkMode ? " text-white" : " text-gray-900"}`}
          >
            <ExpertiseSkills darkMode={darkMode} />
            <TecnologiesUsed darkMode={darkMode} />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default App;
