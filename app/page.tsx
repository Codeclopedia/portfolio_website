import Header from "@/components/main/header";
import HeroRings from "@/components/objects/hero_rings";
import { techStacks, getRouteUrl } from "@/public/routing/icons";
import Image from "next/image";

export default function Home() {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-[#0e0028] from-10% to-[#05000d] ">
      <HeroRings />
      <Clouds />
      <div>
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
      <Header />
    </div>
  );
}

function Clouds() {
  return (
    <div>
      <Image
        className="absolute top-40 opacity-30 z-0"
        src="/images/clouds/cloud2.webp"
        alt="Image"
        width={200}
        height={200}
        priority
      />
      <Image
        className="absolute top-40 right-[100px] opacity-30 z-0"
        src="/images/clouds/cloud1.webp"
        alt="Image"
        width={200}
        height={200}
        priority
      />
      <Image
        className="absolute top-40 right-[700px] opacity-30 z-0"
        src="/images/clouds/cloud3.webp"
        alt="Image"
        width={200}
        height={200}
        priority
      />
    </div>
  );
}
