import React, { useState, useRef, useEffect } from "react";
import { AiOutlineLink } from "react-icons/ai";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const images = import.meta.glob("/src/assets/images/*", { eager: true });

const projectData = [
  {
    title: "Faculty Ranking System and Data Management",
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
    title: "Faculty Ranking System and Data Management",
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
    title: "Faculty Ranking System and Data Management",
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
  const scrollRef = useRef(null);
  const [isBottom, setIsBottom] = useState(false);
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const element = scrollRef.current;
      if (element) {
        const isAtTop = element.scrollTop <= 10;
        const isAtBottom =
          element.scrollHeight - element.scrollTop <= element.clientHeight + 10;

        setIsTop(isAtTop);
        setIsBottom(isAtBottom);
      }
    };

    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => {
      if (container) container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative bg-neutral-100 p-1 rounded-lg shadow-lg">
      {/* Scrollable Project List */}
      <div
        ref={scrollRef}
        className="flex flex-col gap-1 h-[calc(100vh-110px)]  overflow-y-auto relative"
      >
        {projectData.map((project, index) => {
          const isEven = index % 2 === 0;
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.2,
          });

          return (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, x: isEven ? -100 : 100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`group flex flex-col md:flex-row items-center border border-gray-200 ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              } gap-6 bg-white rounded-lg p-6 shadow-md`}
            >
              {/* Project Image */}
              <div className="w-full md:w-1/2 overflow-hidden rounded-lg">
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
                      className="text-xs border border-teal-600 text-teal-900  px-3 py-1 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* See Live Button */}
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 bg-teal-700 text-white flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-teal-800 transition w-auto self-start"
                >
                  <AiOutlineLink className="w-4 h-4" />
                  <span>See Live</span>
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* White Shadow Effects */}
      {!isTop && (
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
      )}
      {!isBottom && (
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      )}
    </div>
  );
};

export default Projects;
