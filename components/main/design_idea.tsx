"use client";
import { useState } from "react";

// pages/discuss-ideas.js
export default function DiscussIdeas() {
  const [isHoveredOverResumeText, setisHoveredOverResumeText] = useState(false);

  function onResumeHovered(value: boolean) {
    console.log("inside function");
    setisHoveredOverResumeText(value);
  }

  function followMeClickAction() {
    console.log("follow me clicked");
    const a = document.createElement("a");
    a.href = "https://www.linkedin.com/in/chetan-joshi-216178250/";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  function contactMeClickAction() {
    console.log("contact me clicked");
    const a = document.createElement("a");
    a.href = "/contact/";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  function downloadResume() {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1MoeVFd_wkMkrIu1QD5-cJ2thN8KUvUdA/view?usp=sharing'; // Path to your PDF file
    link.download = 'MyCustomFileName.pdf'; // Custom file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div id="contact" className="min-h-screen flex flex-col justify-center px-4 sm:px-8 lg:px-16 items-center bg-black bg-gradient-to-b from-gray-900 to-[#05000d]">
      {/* Main Card Section */}
      <div className="bg-lime-500 text-center w-full rounded-b-[40px] sm:rounded-b-[100px] py-12 sm:py-16 lg:py-20 px-6 sm:px-8 relative">
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black mb-8 sm:mb-12">
          LET’S DISCUSS <br /> YOUR IDEAS
        </h1>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button onClick={contactMeClickAction} className="bg-black text-lime-500 font-semibold text-lg py-3 px-8 rounded-full hover:bg-lime-600 hover:text-black transition w-full sm:w-auto">
            CONTACT ME
          </button>
          <button onClick={followMeClickAction} className="border-2 border-black text-black font-semibold text-lg py-3 px-8 rounded-full hover:bg-black hover:text-lime-500 transition w-full sm:w-auto">
            FOLLOW ME
          </button>
        </div>

        {/* Subtle Stars Line (Optional Decorative) */}
        <div className="absolute top-4 sm:top-10 left-1/2 transform -translate-x-1/2 flex space-x-4 text-black opacity-40">
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
        </div>
      </div>

      {/* Footer Text */}
      <div onMouseEnter={() => onResumeHovered(true)} onMouseLeave={() => onResumeHovered(false)} className="flex mt-8 sm:mt-10 text-lime-500 text-xl gap-1 font-semibold cursor-pointer">
        Resume  {isHoveredOverResumeText && (
          <svg onClick={downloadResume} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#84cc16">
            <path d="M260-160q-91 0-155.5-63T40-377q0-78 47-139t123-78q17-72 85-137t145-65q33 0 56.5 23.5T520-716v242l64-62 56 56-160 160-160-160 56-56 64 62v-242q-76 14-118 73.5T280-520h-20q-58 0-99 41t-41 99q0 58 41 99t99 41h480q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-80q0-48-22-89.5T600-680v-93q74 35 117 103.5T760-520q69 8 114.5 59.5T920-340q0 75-52.5 127.5T740-160H260Zm220-358Z"/>
          </svg>
        )}
      </div>
    </div>
  );
}
