"use client"

import React, { useEffect, useRef } from "react";
import IntroSection from "@/components/main/intro_section";
import About from "@/components/main/about_section";
import CreativeMessage from "@/components/objects/creative_message";
import Projects from "@/components/main/projects_section";
import DiscussIdeas from "@/components/main/design_idea";

export default function Home() {

  return (
    <div className="overflow-y-auto h-screen">
      {/* Page 1 */}
      <IntroSection/>

      {/* Page 2 */}
     <About/>
     <CreativeMessage/>
     <Projects/>
     <DiscussIdeas/>
    </div>
  );
}

