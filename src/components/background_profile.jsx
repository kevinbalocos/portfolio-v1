import React, { useState, useEffect } from "react";
import profileImg from "../assets/images/portfolio_img3.jpg";
import ParticlesBg from "particles-bg";

const TypingEffect = ({
  text,
  typingSpeed = 100,
  deleteSpeed = 50,
  pauseTime = 1000,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let timeout;

    if (!isDeleting && index < text.length) {
      // Typing effect
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, typingSpeed);
    } else if (!isDeleting && index === text.length) {
      // Pause before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting && index > 0) {
      // Backspace effect
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setIndex(index - 1);
      }, deleteSpeed);
    } else if (isDeleting && index === 0) {
      // Restart the typing effect
      setIsDeleting(false);
      setIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting, text, typingSpeed, deleteSpeed, pauseTime]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorBlink = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorBlink);
  }, []);

  return (
    <span className="whitespace-nowrap">
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

const BackgroundProfile = () => {
  return (
    <div className="bg-white shadow-2xl rounded-lg w-full h-auto flex flex-col p-6 relative">
      {/* Background Particles */}
      <div className="absolute inset-0 z-0">
        <ParticlesBg type="cobweb" num={3} color="#0c0c0f" />
      </div>

      {/* Profile Image */}
      <div className="relative w-[calc(100%)] mx-auto mt-6 rounded-2xl overflow-hidden shadow-md group">
        <img
          src={profileImg}
          alt="Profile"
          className="w-full h-56 object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        {/* Hover Effect Overlay */}
        <div className="flex flex-col absolute inset-0 m-5 text-gray-800 font-bold text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <TypingEffect
            text="Jade Kevin Balocos"
            typingSpeed={100}
            deleteSpeed={50}
            pauseTime={1000}
          />
          <div className="font-normal ">
            Driven by curiosity and a passion for technology, I specialize in
            creating dynamic digital experiences. Whether developing seamless
            applications, structuring data for insights, or designing
            user-friendly platforms, I turn complex problems into elegant
            solutions.
          </div>
        </div>
      </div>

      {/* Profile Name with Typing Effect and Radar Cursor */}
      <div className="mt-5">
        <div className="gap-2 flex">
          <div className="flex gap-2 relative group">
            <div className="text-teal-950 font-bold text-xs uppercase cursor-pointer">
              Jade
              {/* Tooltip Below */}
            </div>

            <div
              className="profile-name flex items-center text-left font-bold text-lg uppercase
               bg-gradient-to-r bg-teal-950 bg-clip-text text-transparent cursor-pointer"
            >
              <TypingEffect
                text=" Kevin Balocos"
                typingSpeed={100}
                deleteSpeed={50}
                pauseTime={2000}
              />
            </div>
            <div
              className="absolute top-full left-30 w-[130px] transform -translate-x-1/2 mt-2 px-2 py-1
             text-white text-xs bg-cyan-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Just call me "JADE"
            </div>
          </div>
        </div>
      </div>

      {/* Profile Description */}
      <div className="profile-description text-sm mt-2 text-gray-700">
        Driven by curiosity and a passion for technology, I specialize in
        creating dynamic digital experiences. Whether developing seamless
        applications, structuring data for insights, or designing user-friendly
        platforms, I turn complex problems into elegant solutions.
      </div>
    </div>
  );
};

export default BackgroundProfile;
