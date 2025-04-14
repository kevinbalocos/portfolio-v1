import React, { useState, useEffect } from "react";
import profileImg from "/src/assets/images/portfolio_img2.jpg";
import ParticlesBg from "particles-bg";

const TypingEffect = ({
  text,
  typingSpeed = 80,
  deleteSpeed = 50,
  pauseTime = 2000,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let timeout;

    if (!isDeleting && index < text.length) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, typingSpeed);
    } else if (!isDeleting && index === text.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting && index > 0) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setIndex(index - 1);
      }, deleteSpeed);
    } else if (isDeleting && index === 0) {
      setIsDeleting(false);
      setIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting, text, typingSpeed, deleteSpeed, pauseTime]);

  useEffect(() => {
    const cursorBlink = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorBlink);
  }, []);

  return (
    <span className="whitespace-nowrap text-teal-400">
      {displayedText}
      <span
        className={`ml-1 ${
          showCursor ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
      >
        |
      </span>
    </span>
  );
};

const BackgroundProfile = ({ darkMode }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails((prev) => !prev);
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* Particle Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ParticlesBg
          type="circle"
          num={5}
          color={darkMode ? "#ffffff" : "#0c0c0f"}
        />
      </div>

      {/* Profile Card */}
      <div
        className={`shadow-2xl rounded-xl overflow-hidden relative transition-all duration-500 transform 
        ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
      >
        {/* Profile Image / Click to Toggle Details */}
        <div
          className="relative group w-full cursor-pointer"
          onClick={toggleDetails}
        >
          <img
            src={profileImg}
            alt="Profile"
            className={`w-full h-64 object-cover transition-all duration-500 
            ${showDetails ? "opacity-0 scale-105" : "opacity-100 scale-100"}`}
          />
          {showDetails && (
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center text-center p-6 
              transition-opacity duration-500 overflow-hidden 
              ${
                darkMode
                  ? "bg-gray-800 text-white bg-opacity-90"
                  : "bg-white text-gray-800 bg-opacity-90"
              }`}
            >
              <TypingEffect
                text="Curious about me?"
                typingSpeed={80}
                deleteSpeed={50}
                pauseTime={1500}
              />
              <p className="text-sm mt-2">
                Passionate about crafting digital solutions.
              </p>
            </div>
          )}
        </div>

        {/* Profile Info */}
        <div className="p-6 text-center">
          {/* Profile Name */}
          <div className="text-lg font-semibold">
            <span className={darkMode ? "text-teal-300" : "text-teal-700"}>
              Jade Kevin Austria Balocos
            </span>
            {/* <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
              <TypingEffect
                text=" Kevin Balocos"
                typingSpeed={100}
                deleteSpeed={50}
                pauseTime={2000}
              />
            </span> */}
          </div>

          {/* Profile Description */}
          <p
            className={`text-sm mt-3 leading-relaxed ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Passionate about crafting innovative digital solutions. I specialize
            in full-stack development, UI/UX design, and real-time applications,
            transforming complex ideas into intuitive experiences.
          </p>

          {/* Action Buttons */}
          <div className="mt-5 flex justify-center space-x-4">
            {/* <button
              className="px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-md 
              bg-teal-500 text-white hover:bg-teal-600"
            >
              View Portfolio
            </button> */}
            <button
              className="px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-md 
              border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white"
            >
             Portfolio in progress. Updates coming soon.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundProfile;
