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
      imageSrc: "/images/projects/websites/monksMinds.png",
      title: "Monks Minds",
      subtitle: "Monks Minds is a digital solutions agency. Using Next.js, Tailwind CSS, TypeScript, and Nodemailer, I developed dynamic UIs and functionalities to create an engaging and efficient user experience.",
    },
    {
      imageSrc: "/images/projects/websites/closetRove.png",
      title: "ClosetRove Admin Dashboard",
      subtitle: "Developed an admin dashboard for ClosetRove, a wardrobe management company. This dashboard synchronizes tasks and data between their mobile app and user data, enhancing operational efficiency.",
    },
    {
      imageSrc: "/images/projects/websites/portfolio.png",
      title: "My Portfolio",
      subtitle: "Designed and built to showcase my skills, creativity, and experience. Featuring animations with GSAP, Splide sliders, and CSS transitions, this project is a blend of functionality and aesthetic appeal. As I grow in my journey, so will this portfolio.",
    },
  ];
  

  const applicationSliderData = [
    {
      imageSrc: "/images/projects/applications/marinaWorld.png",
      title: "Marina World",
      subtitle: "Developed a cross-platform app for Kuwait's Marina World shopping complex, delivering an intuitive user experience for exploring stores, events, and promotions.",
    },
    {
      imageSrc: "/images/projects/applications/bvidya.png",
      title: "Bvidya",
      subtitle: "Created an e-learning platform with features like courses, quizzes, and interactive learning materials, providing a seamless educational experience on Android and iOS.",
    },
    {
      imageSrc: "/images/projects/applications/jouri.png",
      title: "Jouri",
      subtitle: "Developed a Kuwait-based e-commerce platform specializing in hijab and related accessories, offering a user-friendly shopping experience for Android and iOS users.",
    },
    {
      imageSrc: "/images/projects/applications/closetRove.png",
      title: "ClosetRove",
      subtitle: "Designed and built a closet management app that helps users organize and plan outfits effectively, available on both Android and iOS platforms.",
    },
    {
      imageSrc: "/images/projects/applications/ACI.png",
      title: "ACI",
      subtitle: "Built a construction company app to address user queries and provide detailed information about building damages and repair services, accessible on Android and iOS.",
    },
    {
      imageSrc: "/images/projects/applications/signals.png",
      title: "Signals",
      subtitle: "Developed an e-trading app for crypto enthusiasts, offering real-time trading signals and market insights for Android and iOS users.",
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
          innerHeight: 100,
          outerHeight: 100,
          perMove: 1,
          omitEnd: true,
          gap: "2rem", // Adjusted for better mobile spacing
          focus: "center",
          pagination: true,
          autoplay: true, // Enables autoplay
          interval: 3000, // Slide duration in milliseconds (3 seconds)
          pauseOnHover: true, // Pause autoplay on hover
          breakpoints: {
            500: { perPage: 1, gap: "1rem" },
            768: { perPage: 1, gap: "1.5rem" }, // Adjust gap and slides per view for smaller screens
            1024: { perPage: 2, gap: "2rem" }, // Adjust gap for medium-sized screens
          },
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
                <div className="hover-box absolute inset-0 bg-black bg-opacity-40 flex opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className=" text-center text-white">
                    <h3 className="hover-title text-xl sm:text-4xl">{slide.title}</h3>
                    <h4 className="hover-subtitle px-14 text-sm sm:text-base">{slide.subtitle}</h4>
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
