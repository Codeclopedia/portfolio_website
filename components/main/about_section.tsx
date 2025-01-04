"use client";
import { useState } from "react";
import DesignList from "../objects/work_type";
import ServicesButtons from "../objects/services_button";
import "../styles/about_section.css";
import ImageRow from "../objects/image_row";

export default function About() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <section id="about" className="section2 px-0">
      <div className="w-full">
        <div className="flex flex-col md:flex-row w-full justify-between">
          <AboutTextSection />
          <span className="self-center "><ServicesButtons
            selectedIndex={selectedIndex}
            onButtonClick={(value) => setSelectedIndex(value)}
            listOfButtons={["Work", "Journey", "Future"]}
          />
          </span>
        </div>
        {selectedIndex === 0 ? <WorKSection /> : <div className="mt-10 py-10 h-min flex flex-col items-center justify-center bg-slate-800 text-center">
  <div className="font-bold text-[30px] sm:text-[50px] md:text-[100px] text-white -m-8">
    COMING SOON
  </div>
  <div className="pt-6 sm:pt-4 md:pt-0 text-white text-[10px] sm:text-lg ">
    Good things take time. I&apos;m trying my best to get it done ASAP.
  </div>
</div>
        }
      </div>
    </section>
  );
}

function WorKSection() {
  return (
    <>
      <p>
        {/* Hi, I’m Chetan Joshi Aka Encoded, a passionate developer with a drive for creating innovative and impactful digital solutions. I specialize in building seamless, user-friendly applications and crafting robust, scalable backend systems. With a strong foundation in modern programming languages and frameworks, I continuously explore new technologies to stay ahead in this ever-evolving industry.
        <br />
        My journey as a developer began with a fascination for solving complex problems through code. Over the years, I’ve honed my skills across various domains, including web development, mobile app creation, and full-stack engineering. I thrive in collaborative environments where ideas can flourish and turn into reality.
        <br />
        When I’m not coding, you’ll find me exploring new tech trends, refining my workflows, or brainstorming ideas for my next project. For me, development isn’t just a career—it’s a passion that drives me to learn, grow, and make a difference. */}
      </p>
      <ImageRow/>
      <ComputerDisplay />
    </>
  );
}

function AboutTextSection() {
  return (
    <div className="mb-0 h-min px-10">
      <h1 className="flex">about<p style={{ fontFamily: "roboto" }}>.</p></h1>
      <h5 className="w-[600px] text-xs sm:text-md md:text-xl">A boy who stands out, adding vibrancy where others fade into the background.</h5>
    </div>
  );
}

function ComputerDisplay() {
  return (
    <div className="flex px-10 flex-wrap justify-between items-start w-full h-min">
      <DesignList />
    </div>
  );
}
