import React from "react";
import { AiOutlineLink } from "react-icons/ai"; // From Ant Design

const images = import.meta.glob("/src/assets/images/*", { eager: true });

const projectData = [
  {
    title: "Faculty Ranking System and data management",
    description:
      "Streamlines faculty evaluations with real-time tracking, dashboards, and automation.",
    image: images["/src/assets/images/portfolio_img2.jpg"].default,
    technologies: [
      "CodeIgniter",
      "Tailwind CSS",
      "Chart.js",
      "PHP",
      "Javascript",
    ],
    liveLink: "https://example.com/faculty-ranking",
  },
  {
    title: "Queueing System (MERN Stack)",
    description:
      "A real-time queueing system with MongoDB, optimizing service efficiency.",
    image: images["/src/assets/images/portfolio_img2.jpg"].default,
    technologies: [
      "CodeIgniter",
      "PHP",
      "Ratchet",
      "Tailwind CSS",
      "WebSocket",
      "Javascript",
    ],
    liveLink: "https://example.com/queueing-system",
  },
  {
    title: "Advanced Profile Page UI/UX",
    description:
      "A modern, interactive profile system with animations and professional aesthetics.",
    image: images["/src/assets/images/portfolio_img2.jpg"].default,
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    liveLink: "https://example.com/advanced-profile",
  },
];

const Projects = () => {
  return (
    <div className="bg-neutral-100 w-full h-[calc(100vh-75px)] p-2 rounded-lg shadow-lg overflow-auto">
      <div className="flex flex-col gap-1 ">
        {projectData.map((project, index) => (
          <div
            key={index}
            className={`group flex flex-col md:flex-row items-center border-1 border-gray-200 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } gap-6 md:gap-6 bg-white rounded-lg  p-6 `}
          >
            {/* Project Image */}
            <div className="w-full md:w-1/2 overflow-hidden rounded-lg ">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover rounded-lg transform transition duration-300 group-hover:scale-105"
              />
            </div>

            {/* Project Details */}
            <div className="w-full md:w-1/2 flex flex-col">
              <h3 className="text-xl font-semibold text-gray-900 uppercase">
                {project.title}
              </h3>
              <p className="text-gray-700 mt-2">{project.description}</p>

              {/* Technologies Used */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs bg-none border border-teal-600 text-teal-900 text-sm px-3 py-1 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* See Live Button with React Icons */}
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs mt-6 bg-teal-700 text-white flex items-center justify-center  gap-2 py-2 rounded-lg hover:bg-teal-800 transition w-auto px-4 self-start"
              >
                <AiOutlineLink className="w-4 h-4" />
                <span>See Live</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
