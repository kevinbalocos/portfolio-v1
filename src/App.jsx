import React from "react";
import Navbar from "./components/navbar";
import ExpertiseSkills from "./components/right_section_expertise_skills";
import BackgroundProfile from "./components/background_profile";
import Projects from "./components/MainContent/projects";
import ParticlesBg from "particles-bg";

const App = () => {
  return (
    <div className="relative h-full w-full bg-white">
      <div
        className="min-h-screen  flex flex-col relative bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] 
        bg-[size:5px_5px] [mask-image:radial-gradient(ellipse_100%_90%_at_10%_10%,#000_70%,transparent_200%)]"
      >
        <div className="absolute inset-0 z-0">
          <ParticlesBg type="cobweb" num={100} color="#0c0c0f" />
        </div>

        <Navbar />

        {/* Main Container with Horizontal Scroll on Mobile */}
        <div className="mx-3 h-[calc(100%-60px)] flex flex-grow flex-col md:flex-row overflow-x-auto">
          {/* Left Sidebar - Scrollable */}
          <aside className="w-full max-h-screen md:w-[250px] lg:min-w-[350px] p-1 flex flex-col z-10  overflow-y-auto">
            <BackgroundProfile />
          </aside>

          {/* Main Content */}
          <main className="w-full max-h-screen  p-1 flex flex-col z-10 overflow-y-auto">
            <Projects />
          </main>

          {/* Right Sidebar - Scrollable */}
          <aside className="w-full max-h-screen md:w-[250px] lg:min-w-[350px] p-1 flex flex-col z-10  overflow-y-auto">
            <ExpertiseSkills />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default App;
