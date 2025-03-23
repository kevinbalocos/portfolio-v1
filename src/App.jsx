import React from "react";
import Navbar from "./components/navbar";
import BackgroundProfile from "./components/background_profile";
import ParticlesBg from "particles-bg";

const App = () => {
  return (
    <div class="relative h-full w-full bg-white">
      <div
        className="p-3 h-screen flex flex-col relative bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] 
      bg-[size:5px_5px] [mask-image:radial-gradient(ellipse_100%_100%_at_10%_0%,#000_70%,transparent_110%)]"
      >
        <div className="absolute inset-0 z-0">
          <ParticlesBg type="cobweb" num={16} color="#0c0c0f" />
        </div>
        <Navbar />

        <div className="flex flex-grow flex-col md:flex-row">
          <aside className="w-full md:w-[250px] lg:min-w-[350px] p-1 flex flex-col z-10 overflow-y-auto max-h-screen">
            <BackgroundProfile />
          </aside>

          {/* Main Content */}
          <main className="flex-grow p-1 text-center md:text-left overflow-y-auto"></main>

          {/* Right Sidebar */}
          <aside className="w-full md:w-[250px] lg:min-w-[350px] p-4 flex flex-col z-10">
            <h2 className="text-xl font-bold">Right Sidebar</h2>
            <p>Widgets, notifications, etc.</p>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default App;
