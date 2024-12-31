"use client";

import { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css"; // Import default Splide styles
import ServicesButtons from "../objects/services_button";
import Image from "next/image"; // Import Next.js Image component
import "../styles/project_styles.css";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <AboutTextSection />
      <AboutProjectTypeSection />
    </section>
  );
}

function AboutTextSection() {
  return (
    <div>
      <h1 className="flex">
        Projects
        <p className="flex" style={{ fontFamily: "roboto" }}>
          .
        </p>
      </h1>
    </div>
  );
}

function AboutProjectTypeSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div>
      <ServicesButtons
        selectedIndex={selectedIndex}
        onButtonClick={(value) => setSelectedIndex(value)}
        listOfButtons={["Website", "Applications"]}
      />
      <section>
        <Splide
          aria-label="Project Slides"
          className = "p-4"
          options={{
            type: "loop",
            perPage: 2,
            perMove: 1,
            gap: "5rem",
            pagination: true,
            breakpoints: {
              768: { perPage: 1 },
              1024: { perPage: 2 },
            },
          }}
        >
          <SplideSlide>
            <div className="slide-content">
              <div className="image-container">
                <Image
                  src="/images/projects/images.png" // Replace with your image path
                  alt="Project 01"
                  width={300}
                  height={200}
                  className="slide-image"
                />
                <div className="hover-box">
                  <h3 className="hover-title">Project 01</h3>
                  <p className="hover-subtitle">This is the first project.</p>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="slide-content">
              <div className="image-container">
                <Image
                  src="/images/projects/images-2.png"
                  alt="Project 02"
                  width={300}
                  height={200}
                  className="slide-image"
                />
                <div className="hover-box">
                  <h3 className="hover-title">Project 02</h3>
                  <p className="hover-subtitle">This is the second project.</p>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="slide-content">
              <div className="image-container">
                <Image
                  src="/images/projects/image-3.png"
                  alt="Project 03"
                  width={300}
                  height={200}
                  className="slide-image"
                />
                <div className="hover-box">
                  <h3 className="hover-title">Project 03</h3>
                  <p className="hover-subtitle">This is the third project.</p>
                </div>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </section>
    </div>
  );
}
