"use client";

import HeroRings from "../objects/hero_rings";
import Header from "@/components/main/header";
import Flaoting_TechStacks from "@/components/objects/floating_tech";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";

export default function IntroSection() {
    const heroRef = useRef<HTMLDivElement | null>(null);
    const techStackRef = useRef<HTMLDivElement | null>(null);
    const imageRef = useRef<HTMLImageElement | null>(null);
    const cloudsRef = useRef<(HTMLImageElement | null)[]>([]);
    const headerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);

            const tl = gsap.timeline();

            // Hero section animation
            tl.from(heroRef.current, {
                opacity: 0,
                y: -50,
                duration: 1.5,
                ease: "power3.out",
            });

            // Clouds animation
            tl.from(
                cloudsRef.current,
                {
                    opacity: 0,
                    x: 100,
                    stagger: 0.3,
                    duration: 2,
                    ease: "power3.out",
                },
                "<" // Starts the clouds animation concurrently with the hero section
            );
            // Developer image animation
            tl.from(
                imageRef.current,
                {
                    opacity: 0,
                    duration:3,
                    y: 75,
                    ease: "power3.out",
                },
                "-=1" // Overlaps this animation with the previous one
            );

            // Floating Tech Stacks animation
            tl.from(
                techStackRef.current,
                {
                    opacity: 0,
                    y: 100,
                    delay:2,
                    duration: 5,
                    ease: "power3.out",
                },
                "+=0.5" // Delays the start slightly after previous animation
            );

            

            // Header animation with ScrollTrigger
            gsap.to(headerRef.current, {
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

            gsap.to(techStackRef.current, {
                opacity: 1, y: 0, delay: 2, duration: 10, stagger: 0.3, ease: "power3.out"
            })

            // Cloud floating animation
            cloudsRef.current.forEach((cloud, index) => {
                if (cloud) {
                    gsap.to(cloud, {
                        y: "+=20",
                        duration: 3 + index,
                        repeat: -1,
                        yoyo: true,
                        ease: "sine.inOut",
                    });
                }
            });

           
        }
    }, []);

    return (
        <div className="relative h-screen bg-gradient-to-b from-[#0e0028] to-[#05000d]">
            <div className="absolute inset-0" ref={heroRef}>
                <HeroRings />
            </div>
            <Clouds cloudsRef={cloudsRef} />
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <p className="title-text text-[50px] mb-[600px]">Hello, I'm</p>
                <p className="absolute title-text text-[80px] mb-[450px] z-10">Chetan Joshi</p>
            </div>
            <Image
                ref={imageRef}
                className="absolute left-1/2 -translate-x-1/2 opacity-100 z-0"
                alt="test"
                src="/images/objects/developer.png"
                width={700}
                height={700}
            />
            <Flaoting_TechStacks techStackRef={techStackRef} />
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





