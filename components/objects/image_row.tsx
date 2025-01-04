"use client";
import React, { useEffect, useRef, useState } from "react";

interface ImageData {
  src: string;
  name: string;
  designation: string;
}

const ImageRow: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const imageRowRef = useRef<HTMLDivElement>(null);

  const imageData: ImageData[] = [
    { src: "/images/blurred/person4.jpg", name: "###", designation: "#####" },
    { src: "/images/blurred/person7.jpg", name: "###", designation: "#####" },
    { src: "/images/blurred/person8.jpg", name: "###", designation: "#####" },
    { src: "/images/blurred/person8.jpg", name: "Chetan Joshi", designation: "Software Developer" },
    { src: "/images/blurred/person1.jpg", name: "###", designation: "#####" },
    { src: "/images/blurred/person2.jpg", name: "###", designation: "#####" },
    { src: "/images/blurred/person3.jpg", name: "###", designation: "#####" },
  ];

  useEffect(() => {
    if (imageRowRef.current) {
      const rowElement = imageRowRef.current;
      const middleIndex = Math.floor(imageData.length / 2);
      const middleElement = rowElement.children[middleIndex] as HTMLElement;

      // Center the middle image
      const centerOffset =
        rowElement.offsetWidth / 2 - middleElement.offsetWidth / 2;
      rowElement.scrollLeft = middleElement.offsetLeft - centerOffset;
    }
  }, [imageData]);

  return (
    <div
      ref={imageRowRef}
      className="flex items-center gap-4 py-8 px-4 overflow-x-auto scroll-smooth snap-x snap-mandatory relative"
    >
      {imageData.map((image, index) => (
        <div
          key={index}
          className={`flex-shrink-0 group w-60 h-60 rounded-lg relative snap-center ${
            index === Math.floor(imageData.length / 2)
              ? "z-10 scale-105 shadow-lg"
              : "grayscale opacity-30"
          }`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <img
            src={image.src}
            alt={image.name}
            className="w-full h-full object-cover transition-all duration-300"
          />
          {/* Hover Info */}
          {hoveredIndex === index && (
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-75 text-white text-center px-2 py-2 transition-opacity duration-300">
              <div className="text-lg font-semibold">{image.name}</div>
              <div className="text-sm">{image.designation}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageRow;
