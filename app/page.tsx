"use client"

import React, { useEffect, useRef } from "react";
import IntroSection from "@/components/main/intro_section";

export default function Home() {

  return (
    <div className="overflow-y-auto h-screen">
      {/* Page 1 */}
      <IntroSection/>

      {/* Page 2 */}
      <section className="h-screen bg-gradient-to-b from-[#05000d] to-gray-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4"></h1>
          <p className="text-lg">This is the content of the second page. Scroll to explore more!</p>
        </div>
      </section>
    </div>
  );
}

