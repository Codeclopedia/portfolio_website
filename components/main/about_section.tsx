"use client"
import { useState } from "react";
import DesignList from "../objects/work_type";
import ServicesButtons from "../objects/services_button";
import "../styles/about_section.css";

export default function About() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <section id="about" className="section2">
      <div className="w-full">
        <div className="flex w-full justify-between">
          <AboutTextSection />
          <ServicesButtons selectedIndex={selectedIndex} onButtonClick={(value) => setSelectedIndex(value)} listOfButtons={["Work", "Journey", "Future"]} />
        </div>
        <p>
          Hi, I’m [Your Name], a passionate developer with a drive for creating innovative and impactful digital solutions. I specialize in building seamless, user-friendly applications and crafting robust, scalable backend systems. With a strong foundation in modern programming languages and frameworks, I continuously explore new technologies to stay ahead in this ever-evolving industry.

          My journey as a developer began with a fascination for solving complex problems through code. Over the years, I’ve honed my skills across various domains, including web development, mobile app creation, and full-stack engineering. I thrive in collaborative environments where ideas can flourish and turn into reality.

          When I’m not coding, you’ll find me exploring new tech trends, refining my workflows, or brainstorming ideas for my next project. For me, development isn’t just a career—it’s a passion that drives me to learn, grow, and make a difference.</p>
        <ComputerDisplay />
      </div>
    </section>
  );
}

function AboutTextSection() {
  return (
    <div><h1 className="flex">about<p style={{ fontFamily: "roboto" }}>.</p></h1><h5>Driven by passion and fueled by creativity, I strive to turn ideas into impactful realities through dedication and innovation.</h5></div>
  )
}

function ComputerDisplay() {
  return (
    <div className="flex justify-between items-start w-full h-min">
      <DesignList />
    </div>
  );
}
