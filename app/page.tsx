import React from "react";
import IntroSection from "@/components/main/intro_section";
import About from "@/components/main/about_section";
import CreativeMessage from "@/components/objects/creative_message";
import Projects from "@/components/main/projects_section";
import DiscussIdeas from "@/components/main/design_idea";

export default function Home() {
  return (
    <div className="overflow-y-auto min-h-screen">
      {/* Page 1: Intro Section */}
      <IntroSection />

      {/* Page 2: About Section */}
      <About />

      {/* Page 3: Creative Message */}
      <CreativeMessage />

      {/* Page 4: Projects Section */}
      <Projects />

      {/* Page 5: Discuss Ideas Section */}
      <DiscussIdeas />

      {/* Footer */}
      <footer className="py-6">
        <p className="text-center text-sm sm:text-base lg:text-lg">
          Made By{" "}
          <a
            className="text-lime-500 hover:underline"
            href="https://google.com"
          >
            Encoded ©
          </a>
        </p>
      </footer>
    </div>
  );
}
