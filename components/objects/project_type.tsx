"use client"
import Image from "next/image";
import React, { useState } from "react";

interface DesignOption {
  title: string;
  images: string[];
}

const DesignList: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Dummy data for the design options
  const designOptions: DesignOption[] = [
    { title: "UI/UX Design", images: ["/images/projects/images-2.png", "/images/projects/images.png", "/images/projects/image-3.png"] },
    { title: "Web Design", images: ["/images/projects/images-2.png", "/images/projects/images.png", "/images/projects/image-3.png"] },
    { title: "Brand Design", images: ["/images/projects/images-2.png", "/images/projects/images.png", "/images/projects/image-3.png"] },
    { title: "Graphic Design", images: ["/images/projects/images-2.png", "/images/projects/images.png", "/images/projects/image-3.png"] },
  ];

  return (
    <div className="flex flex-col  w-full py-16 h-min">
      {designOptions.map((option, index) => (
        <div
          key={index}
          className="relative flex items-center h-[120px] justify-between border-b border-gray-700 hover:bg-gray-700"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Title */}
          <div className="text-gray-400 text-4xl font-semibold">{option.title}</div>

          {/* Hover Arrow Icon */}
          <div className="text-gray-400 text-xl transition-transform duration-300 transform group-hover:translate-x-1">
            ↗
          </div>

          {/* Hover Image Stack */}
          {hoveredIndex === index && (
            <div className="absolute top-0 right-40 transform translate-x-16 -translate-y-4">
              <div className="relative w-40 h-40">
                {option.images.map((image, imgIndex) => (
                  <Image
                    key={imgIndex}
                    src={image}
                    alt={`Preview ${imgIndex}`}
                    className="absolute w-40 h-40 rounded-lg shadow-lg object-cover transition-transform duration-300 hover:scale-105"
                    style={{
                      top: `${imgIndex * 5}px`, // Offset each image slightly downward
                      left: `${imgIndex * 5}px`, // Offset each image slightly to the right
                      zIndex: option.images.length - imgIndex, // Stack order
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DesignList;
