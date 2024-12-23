import { getRouteUrl } from "@/public/routing/icons";
import Image from "next/image";
import { MutableRefObject } from "react";

interface FloatingTechStacksProps {
  techStackRef: MutableRefObject<HTMLDivElement | null>;
}

export default function Flaoting_TechStacks({ techStackRef }: FloatingTechStacksProps){
    return ( 
    <div className="absolute inset-0" ref={techStackRef}>
        <Image
          className="floating-icon animate-levitate bottom-[100px] left-[40px] -rotate-12 opacity-40"
          alt="Svg"
          src={getRouteUrl("photoshop")} // Use the key "photoshop"
          width={50}
          height={50}
        />
        <Image
          className="floating-icon animate-levitate2 bottom-[100px] right-[40px] -rotate-12 opacity-40"
          alt="Svg"
          src={getRouteUrl("threeJs")} // Use the key "photoshop"
          width={150}
          height={150}
        />
        <Image
          className="floating-icon animate-levitate3 bottom-[70px] left-[540px] -rotate-12"
          alt="Svg"
          src={getRouteUrl("mongo")} // Use the key "photoshop"
          width={150}
          height={100}
        />
        <Image
          className="floating-icon animate-levitate bottom-[100px] right-[240px] -rotate-12"
          alt="Svg"
          src={getRouteUrl("next")} // Use the key "photoshop"
          width={100}
          height={150}
        />
        <Image
          className="floating-icon animate-levitate5 bottom-[100px] left-[140px] -rotate-12 "
          alt="Svg"
          src={getRouteUrl("postgres")} // Use the key "photoshop"
          width={150}
          height={150}
        />
        <Image
          className="floating-icon animate-levitate3 bottom-[100px] left-[340px] -rotate-12 "
          alt="Svg"
          src={getRouteUrl("node")} // Use the key "photoshop"
          width={150}
          height={150}
        />
        <Image
          className="floating-icon animate-levitate4 bottom-[100px] right-[440px] -rotate-12 "
          alt="Svg"
          src={getRouteUrl("javscript")} // Use the key "photoshop"
          width={50}
          height={150}
        />
        <Image
          className="floating-icon animate-levitate5 bottom-[100px] left-[740px] -rotate-12 "
          alt="Svg"
          src={getRouteUrl("html")} // Use the key "photoshop"
          width={100}
          height={100}
        />
      </div>
    );
}