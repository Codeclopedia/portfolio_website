

import React from "react";
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
     <section className="w-full">
      <p className="flex gap-1 items-center justify-center place-items-center">Made By <a className="text-lime-500 hover:underline" href="https://google.com">Encoded ©</a></p>
     </section>
    </div>
  );
}

