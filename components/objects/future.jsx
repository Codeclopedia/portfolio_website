// components/FutureSection.js
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const FutureSection = () => {
  const futurePlans = [
    {
      title: "Mastering Advanced Frameworks",
      description: "I will learn modern frameworks like Next.js and Tailwind CSS for building scalable and stylish applications.",
      lottie: "/lottie/future4.json", // Path to your Lottie file
    },
    {
      title: "Deepening Backend Expertise",
      description: "Focusing on Node.js and advanced database management to build robust and efficient backend systems.",
      lottie: "/lottie/backend.json",
    },
    {
      title: "Exploring AI & Machine Learning",
      description: "Integrating AI-driven solutions to innovate and solve real-world challenges with cutting-edge technology.",
      lottie: "/lottie/future3.json",
    },
    {
      title: "Honing Problem-Solving Skills",
      description: "Practicing algorithms and data structures to crack technical interviews and optimize system performance.",
      lottie: "/lottie/solving.json",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-darkBlue to-darkGray text-white py-20 px-6">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-4xl font-bold mb-8">Future</h2>
        <p className="text-lg mb-12">
          Here's what I'm planning to learn and do to advance my career and meet market demands.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {futurePlans.map((plan, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center"
            >
              <DotLottieReact
                  src={plan.lottie}
             
               
                  autoplay
                  loop
                  className="w-48 h-48"
                />
              <h3 className="text-2xl font-semibold mb-4">{plan.title}</h3>
              <p className="text-base text-gray-300">{plan.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureSection;
