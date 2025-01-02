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
    <div className="mb-0 h-min ">
      <h1 className="flex ">
        Projects
        <p className="flex -center " style={{ fontFamily: "roboto" }}>
          .
        </p>
      </h1>
    </div>
  );
}

function AboutProjectTypeSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const websiteSliderData = [
    {
      imageSrc: "/images/projects/images.png",
      title: "Project 01",
      subtitle: "This is the first project.",
    },
    {
      imageSrc: "/images/projects/images-2.png",
      title: "Project 02",
      subtitle: "This is the second project.",
    },
    {
      imageSrc: "/images/projects/image-3.png",
      title: "Project 03",
      subtitle: "This is the third project.",
    },
  ];

  const applicationSliderData = [
    {
      imageSrc: "/images/projects/images.png",
      title: "Project 01",
      subtitle: "This is the app first project.",
    },
    {
      imageSrc: "/images/projects/images-2.png",
      title: "Project 02",
      subtitle: "This is the second project.",
    },
    {
      imageSrc: "/images/projects/image-3.png",
      title: "Project 03",
      subtitle: "This is the third project.",
    },
  ];

  return (
    <div>
      <ServicesButtons
        selectedIndex={selectedIndex}
        onButtonClick={(value) => setSelectedIndex(value)}
        listOfButtons={["Website", "Applications"]}
      />
      <WebsiteProjectsSlider sliderData={selectedIndex === 0 ? websiteSliderData : applicationSliderData} />
    </div>
  );
}

function WebsiteProjectsSlider({ sliderData }) {
  return (
    <section className="mt-8">
      <Splide
        aria-label="Project Slides"
        className="p-4"
        options={{
          type: "loop",
          perPage: 2,
          perMove: 1,
          omitEnd: true,
          gap: "2rem", // Adjusted for better mobile spacing
          focus: "center",
          pagination: true,
         
        }}
      >
        {sliderData.map((slide, index) => (
          <SplideSlide key={index}>
            <div className="slide-content flex flex-col items-center">
              <div className="image-container relative w-full h-64 sm:h-80 md:h-96 lg:h-112">
                <Image
                  src={slide.imageSrc}
                  alt={slide.title}
                  layout="fill"
                  objectFit="cover"
                  className="slide-image rounded-lg"
                />
                <div className="hover-box absolute inset-0 bg-black bg-opacity-40 flex place-content-end opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center text-white">
                    <h3 className="hover-title text-xl sm:text-2xl">{slide.title}</h3>
                    <p className="hover-subtitle text-sm sm:text-base">{slide.subtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
}
