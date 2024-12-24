import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "../styles/header_styles.css";
import { useGSAP } from "@gsap/react";

function Header() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const container = useRef<HTMLDivElement | null>(null);
  const tl = useRef<gsap.core.Timeline>(null);

  useGSAP(() => {
    // Ensure the menu starts hidden
    gsap.set(container.current, {
      opacity: 0,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      display: "none",
    });

    // Initialize GSAP timeline
    tl.current = gsap.timeline({ paused: true })
      .to(container.current, {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        display: "block", // Show menu during animation
        ease: "power2.out",
      })
      .to(".more_menu_style p",{
        opacity: 1,
        display: "block",
        ease: "power4.out",
      })
      .eventCallback("onReverseComplete", () => {
        gsap.set(container.current, { display: "none" }); // Hide menu after reverse
      });
  }, []);

  useEffect(() => {
    if (isMenuOpened) {
      tl.current?.play();
    } else {
      tl.current?.reverse();
    }
  }, [isMenuOpened]);

  function onClickMore() {
    setIsMenuOpened((prev) => !prev);
  }

  return (
    <div className="flex justify-between px-16 py-5 font-langar text-[23px] font-bold">
      Encoded
      <div
        className="flex font-normal text-lg cursor-pointer"
        onClick={onClickMore}
      >
        More
        <MoreMenuSection container={container} />
      </div>
    </div>
  );
}

interface MoreMenuSectionProps {
  container: React.RefObject<HTMLDivElement | null>;
}

function MoreMenuSection({ container }: MoreMenuSectionProps) {
  const scrollToSection = (sectionId:string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  
    // if (target) {
    //   if ("scrollBehavior" in document.documentElement.style) {
    //     target.scrollIntoView({ behavior: "smooth" });
    //   } else {
    //     // Fallback for older browsers
    //     const targetPosition = target.offsetTop;
    //     const startPosition = window.scrollY;
    //     const distance = targetPosition - startPosition;
    //     const duration = 1000;
    //     var startTime: number | null = null;
  
    //     const easeInOutQuad = (t:number, b:number, c:number, d:number) => {
    //       t /= d / 2;
    //       if (t < 1) return (c / 2) * t * t + b;
    //       t--;
    //       return (-c / 2) * (t * (t - 2) - 1) + b;
    //     };
  
    //     const animation = (currentTime:number) => {
    //       if (!startTime) startTime = currentTime;
    //       const timeElapsed = currentTime - startTime;
    //       const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
  
    //       window.scrollTo(0, run);
  
    //       if (timeElapsed < duration) {
    //         requestAnimationFrame(animation);
    //       }
    //     };
  
    //     requestAnimationFrame(animation);
    //   }
    // }
  };
  
  return (
    <div className="more_menu_style" ref={container}>
      <p onClick={()=>scrollToSection("home")}>Home</p>
      <p onClick={()=>scrollToSection("about")}>About</p>
      <p>Projects</p>
      <p>Contact Me</p>
    </div>
  );
}

export default Header;
