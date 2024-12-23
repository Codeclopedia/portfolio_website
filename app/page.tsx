"use client"
import React, { useEffect, useRef } from "react";
import Header from "@/components/main/header";
import Flaoting_TechStacks from "@/components/objects/floating_tech";
import HeroRings from "@/components/objects/hero_rings";
import Image from "next/image";

import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";

export default function Home() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const techStackRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const cloudsRef = useRef<(HTMLImageElement | null)[]>([]);
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Register ScrollTrigger only on the client
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      var tl = gsap.timeline({repeat: 2, repeatDelay: 1});

      // Hero section animation on page load
      tl.fromTo(
        heroRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
      );

      // Clouds animation on page load
      tl.fromTo(
        cloudsRef.current,
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 2, stagger: 0.3, ease: "power3.out" }
      );

      tl.fromTo(
        techStackRef.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, delay:2,duration: 10, stagger: 0.3, ease: "power3.out" }
      );

      tl.fromTo(
        imageRef.current,
        { opacity: 0,  },
        { opacity: 1, duration: 2, stagger: 0.6, ease: "power3.out" }
      );

      // Header scroll-triggered animation
      tl.to(headerRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      });

      // Cloud floating animation
      cloudsRef.current.forEach((cloud, index) => {
        if (cloud) {
          tl.to(cloud, {
            y: "+=20", // Move up and down
            duration: 3 + index, // Slight variation per cloud
            repeat: -1, // Infinite loop
            yoyo: true, // Reverse the animation
            ease: "sine.inOut",
            
          });
        }
      });
    }
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-[#0e0028] from-10% to-[#05000d]">
      {/* Hero section */}
      <div className="absolute inset-0" ref={heroRef}>
        <HeroRings />
      </div>

      {/* Clouds */}
      <Clouds cloudsRef={cloudsRef} />
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
      <div className="title-text text-[50px] mb-[600px]">Hello, I'm</div>
      <div className="absolute title-text text-[80px] mb-[450px] ">Chetan Joshi</div>
      </div>
   
        <Image ref={imageRef} className="absolute left-1/2 -translate-x-1/2 opacity-100 z-0" alt="test" src="/images/objects/developer.png" width={700} height={700}></Image>
   

      {/* Floating tech stacks */}
      <Flaoting_TechStacks techStackRef={techStackRef}/>

      {/* Header */}
      <div ref={headerRef}>
        <Header />
      </div>
    </div>
  );
}

type CloudsProps = {
  cloudsRef: React.MutableRefObject<(HTMLImageElement | null)[]>;
};

function Clouds({ cloudsRef }: CloudsProps) {
  return (
    <div>
      <Image
        ref={(el) => {
          cloudsRef.current[0] = el;
        }}
        className="absolute top-40 opacity-30 z-0"
        src="/images/clouds/cloud2.webp"
        alt="Cloud 2"
        width={200}
        height={200}
        priority
      />
      <Image
        ref={(el) => {
          cloudsRef.current[1] = el;
        }}
        className="absolute top-40 right-[100px] opacity-30 z-0"
        src="/images/clouds/cloud1.webp"
        alt="Cloud 1"
        width={200}
        height={200}
        priority
      />
      <Image
        ref={(el) => {
          cloudsRef.current[2] = el;
        }}
        className="absolute top-40 right-[700px] opacity-30 z-0"
        src="/images/clouds/cloud3.webp"
        alt="Cloud 3"
        width={200}
        height={200}
        priority
      />
    </div>
  );
}
