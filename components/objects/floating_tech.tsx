import { getRouteUrl } from "@/public/routing/icons";
import { MutableRefObject } from "react";

interface FloatingTechStacksProps {
  techStackRef: MutableRefObject<HTMLDivElement | null>;
}

export default function FloatingTechStacks({ techStackRef }: FloatingTechStacksProps) {
  return (
    <div className="absolute inset-0" ref={techStackRef}>
      <SvgIcon
        iconName="photoshop"
        left="left-10"
        bottom="bottom-24"
        rotate="-rotate-12"
        opacity="opacity-10"
        animate="animate-levitate"
        z="z-10"
        width={50}
        height={50}
      />
      <SvgIcon
        iconName="next"
        left="left-[540px]"
        bottom="bottom-16"
        rotate="-rotate-12"
        animate="animate-levitate3"
        z="z-20"
        width={150}
        height={100}
      />
      <SvgIcon
        iconName="mongo"
        right="right-[400px]"
        bottom="bottom-[120px]"
        rotate="-rotate-12"
        animate="animate-levitate"
        z="z-30"
        width={150}
        height={150}
      />
      <SvgIcon
        iconName="threeJs"
        left="left-36"
        bottom="bottom-96"
        rotate="-rotate-12"
        animate="animate-levitate5"
        z="z-40"
        opacity="opacity-10"
        width={100}
        height={100}
      />
      <SvgIcon
        iconName="postgres"
        left="left-[420px]"
        bottom="bottom-32"
        rotate="-rotate-12"
        animate="animate-levitate3"
        z="z-50"
        width={80}
        height={70}
      />
      <SvgIcon
        iconName="node"
        right="right-80"
        bottom="bottom-[330px]"
        rotate="-rotate-12"
        animate="animate-levitate4"
        z="z-60"
        opacity="opacity-90"
        width={150}
        height={150}
      />
      <SvgIcon
        iconName="javascript"
        left="left-[740px]"
        bottom="bottom-24"
        rotate="-rotate-12"
        animate="animate-levitate5"
        z="z-70"
        width={80}
        height={80}
      />
      <SvgIcon
        iconName="react"
        right="right-[340px]"
        bottom="bottom-[200px]"
        rotate="-rotate-12"
        opacity="opacity-90"
        animate="animate-levitate5"
        z="z-80"
        width={100}
        height={150}
      />
      <SvgIcon
        iconName="reactNative"
        left="left-[870px]"
        bottom="bottom-[450px]"
        rotate="-rotate-12"
        animate="animate-levitate5"
        z="z-90"
        opacity="opacity-60"
        width={70}
        height={100}
      />

      {/* Additional Icons */}
      <SvgIcon
        iconName="afterEffects"
        left="left-24"
        bottom="bottom-[200px]"
        rotate="-rotate-10"
        animate="animate-levitate"
        z="z-100"
        width={80}
        height={80}
        opacity="opacity-5"
      />
      <SvgIcon
        iconName="premierePro"
        right="right-[220px]"
        bottom="bottom-[7]"
        rotate="-rotate-15"
        opacity="opacity-10"
        animate="animate-levitate2"
        z="z-110"
        width={90}
        height={90}
      />
      <SvgIcon
        iconName="sql"
        right="right-12"
        bottom="bottom-12"
        rotate="rotate-8"
        animate="animate-levitate3"
        z="-z-120"
        opacity="opacity-5"
        width={100}
        height={100}
      />
      <SvgIcon
        iconName="typescript"
        left="left-[200px]"
        bottom="bottom-[-50px]"
        rotate="rotate-5"
        animate="animate-levitate5"
        z="-z-140"
        opacity="opacity-5"
        width={130}
        height={130}
      />
      <SvgIcon
        iconName="firebase"
        left="left-[300px]"
        bottom="bottom-[400px]"
        rotate="rotate-9"
        animate="animate-levitate"
        z="z-150"
        width={60}
        height={70}
        opacity="opacity-10"
      />
      <SvgIcon
        iconName="supabase"
        right="right-[140px]"
        bottom="bottom-[200px]"
        rotate="rotate-10"
        animate="animate-levitate2"
        z="z-160"
        width={110}
        opacity="opacity-5"
        height={110}
      />
      <SvgIcon
        iconName="appwrite"
        right="right-[250px]"
        bottom="bottom-[500px]"
        rotate="rotate-7"
        animate="animate-levitate3"
        z="-z-300"
        opacity="opacity-10"
        width={120}
        height={100}
      />
      <SvgIcon
        iconName="playstore"
        right="right-[100px]"
        bottom="bottom-[400px]"
        rotate="rotate-11"
        opacity="opacity-10"
        animate="animate-levitate4"
        z="z-180"
        width={90}
        height={90}
      />
      <SvgIcon
        iconName="applestore"
        left="left-[250px]"
        bottom="bottom-[200px]"
        rotate="rotate-6"
        animate="animate-levitate5"
        z="z-200"
        opacity="opacity-10"
        width={70}
        height={70}
      />
      <SvgIcon
        iconName="flutter"
        left="left-[350px]"
        bottom="bottom-[250px]"
        rotate="rotate-10"
        animate="animate-levitate"
        z="z-200"
        width={80}
        height={110}
      />
      <SvgIcon
        iconName="dart"
        left="left-[250px]"
        bottom="bottom-[600px]"
        rotate="rotate-14"
        animate="animate-levitate2"
        z="z-210"
        opacity="opacity-10"
        width={80}
        height={80}
      />
      <SvgIcon
        iconName="html"
        right="right-[500px]"
        bottom="bottom-[-20px]"
        rotate="-rotate-40"
        animate="animate-levitate"
        z="z-220"
        opacity="opacity-5"
        width={100}
        height={100}
      />
      <SvgIcon
        iconName="gsap"
        left="left-[450px]"
        bottom="bottom-[400px]"
        rotate="rotate-8"
        animate="animate-levitate4"
        z="z-200"
        opacity="opacity-70"
        width={70}
        height={70}
      />
    </div>
  );
}

interface SvgIconProps {
  iconName: string;
  width?: number;
  height?: number;
  left?: string;
  right?: string;
  bottom?: string;
  rotate?: string;
  opacity?: string;
  animate?: string;
  z: string;
}

function SvgIcon({
  iconName,
  width = 150,
  height = 150,
  left = "",
  right = "",
  bottom = "bottom-[100px]",
  rotate = "",
  opacity = "opacity-100",
  animate = "animate-levitate2",
  z,
}: SvgIconProps) {
  return (
    <div
      className={`floating-icon ${animate} ${z} ${left} ${right} ${bottom} ${rotate} ${opacity}`}
    >
      <img
        className={`${z}`}
        src={getRouteUrl(iconName)}
        alt={iconName}
        width={width}
        height={height}
      />
    </div>
  );
}
