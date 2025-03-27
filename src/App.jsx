import React from "react";
import Navbar from "./components/navbar";
import ExpertiseSkills from "./components/RightSection/right_section_expertise_skills";
import BackgroundProfile from "./components/LeftSection/background_profile";
import TecnologiesUsed from "./components/RightSection/technologies_used";
import Projects from "./components/MainContent/projects";
import ParticlesBg from "particles-bg";

const App = () => {
  return (
    <div className="relative min-h-screen w-full bg-white overflow-hidden">
      <div
        className="min-h-screen  flex flex-col relative bottom-0 left-0 right-0 top-0 
        bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] 
        bg-[size:5px_5px] [mask-image:radial-gradient(ellipse_100%_90%_at_10%_10%,#000_70%,transparent_200%)]"
      >
        <div className="absolute inset-0 z-0">
          <ParticlesBg type="cobweb" num={100} color="#0c0c0f" />
        </div>

        <Navbar />

        {/* Main Container - Ensure scrolling works */}
        <div className="mx-3 flex flex-col md:flex-row flex-grow  overflow-auto">
          {/* Left Sidebar */}
          <aside className="w-full md:w-[250px] lg:min-w-[350px] h-[calc(100vh-200px)] p-1 flex flex-col z-10 overflow-auto">
            <BackgroundProfile />
          </aside>

          {/* Main Content */}
          <main className="w-full p-1 flex flex-col z-10 overflow-auto">
            <Projects />
          </main>

          {/* Right Sidebar */}
          <aside className="w-full md:w-[250px] lg:min-w-[350px] gap-1 p-1 h-[calc(100vh-80px)] flex flex-col z-10 overflow-y-auto">
            <TecnologiesUsed />
            <ExpertiseSkills />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default App;
