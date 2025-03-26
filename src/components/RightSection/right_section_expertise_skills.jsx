import React from "react";
import {
  Code,
  BarChart,
  Bolt,
  Database,
  Palette,
  FileText,
  FolderKanban,
} from "lucide-react";

const RightSectionExpertiseSkills = () => {
  return (
    <div className="">
      <div className="bg-white shadow-xl rounded-lg p-6 max-w-lg mx-auto overflow-auto  h-[350px] border border-gray-200">
        {/* Expertise Section */} 
        <h2 className="text-2xl font-semibold text-black mb-4 flex items-center gap-2">
          <Bolt className="w-12 h-12 text-black" /> Expertise & Technical Skills
        </h2>

        <ul className="grid gap-4 text-gray-800 text-base">
          <li className="flex items-center gap-x-3">
            <Code className="w-12 h-12 text-black" />
            <div>
              <strong className="text-black">Web & App Development</strong>
              <p className="text-sm text-gray-700">
                Proficient in CodeIgniter, React (Vite), MongoDB, and Tailwind
                CSS, developing modern, responsive, and feature-rich
                applications.
              </p>
            </div>
          </li>

          <li className="flex items-center gap-x-3">
            <BarChart className="w-12 h-12 text-black" />
            <div>
              <strong className="text-black">Data Science & Analytics</strong>
              <p className="text-sm text-gray-700">
                Passionate about data visualization, statistical analysis, and
                machine learning, leveraging insights for smarter
                decision-making.
              </p>
            </div>
          </li>

          <li className="flex items-center gap-x-3">
            <Bolt className="w-12 h-12 text-black" />
            <div>
              <strong className="text-black">Real-Time Systems</strong>
              <p className="text-sm text-gray-700">
                Experienced in WebSockets and real-time chat systems, ensuring
                seamless and interactive user experiences.
              </p>
            </div>
          </li>

          <li className="flex items-center gap-x-3">
            <Palette className="w-12 h-12 text-black" />
            <div>
              <strong className="text-black">UI/UX & Digital Design</strong>
              <p className="text-sm text-gray-700">
                Specializes in crafting intuitive, futuristic, and engaging user
                interfaces to enhance user interaction.
              </p>
            </div>
          </li>

          <li className="flex items-center gap-x-3">
            <FileText className="w-12 h-12 text-black" />
            <div>
              <strong className="text-black">
                File Management & Document Systems
              </strong>
              <p className="text-sm text-gray-700">
                Developed advanced file upload and categorization systems,
                enabling structured and dynamic file handling.
              </p>
            </div>
          </li>
        </ul>

        {/* Projects Section */}
        <h2 className="text-2xl font-semibold text-black mt-6 mb-4 flex items-center gap-2">
          <FolderKanban className="w-12 h-12 text-black" /> Key Projects &
          Innovations
        </h2>

        <ul className="grid gap-4 text-gray-800 text-base">
          <li className="flex items-center gap-x-3">
            <FolderKanban className="w-12 h-12 text-black" />
            <div>
              <strong className="text-black">
                Faculty Ranking & Data Management System
              </strong>
              <p className="text-sm text-gray-700">
                Designed to streamline faculty evaluations with real-time
                tracking, interactive dashboards, and ranking automation.
              </p>
            </div>
          </li>

          <li className="flex items-center gap-x-3">
            <FolderKanban className="w-12 h-12 text-black" />
            <div>
              <strong className="text-black">
                Queueing System (MERN Stack)
              </strong>
              <p className="text-sm text-gray-700">
                Developed a real-time queueing system using MongoDB, optimizing
                service management and efficiency.
              </p>
            </div>
          </li>

          <li className="flex items-center gap-x-3">
            <FolderKanban className="w-12 h-12 text-black" />
            <div>
              <strong className="text-black">
                Advanced Profile Page UI/UX
              </strong>
              <p className="text-sm text-gray-700">
                Created a modern, interactive profile system with enhanced
                navigation, animations, and professional aesthetics.
              </p>
            </div>
          </li>

          <li className="flex items-center gap-x-3">
            <FolderKanban className="w-12 h-12 text-black" />
            <div>
              <strong className="text-black">
                Dynamic User Notification & Messaging System
              </strong>
              <p className="text-sm text-gray-700">
                Implemented custom messaging for targeted admin-user
                notifications in a CodeIgniter-based system.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RightSectionExpertiseSkills;
