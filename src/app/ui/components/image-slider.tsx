"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import html from "../../../../public/html.png";
import css from "../../../../public/css.png";
import js from "../../../../public/js.png";
import java from "../../../../public/java.png";
import nextjs from "../../../../public/nextjs.png";
import postgres from "../../../../public/postgres.png";
import python from "../../../../public/python.png";
import react from "../../../../public/react.png";
import spring from "../../../../public/spring-boot.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Interface for image data
interface ImageData {
  src: StaticImageData;
}

// Image data array
const images: ImageData[] = [
  { src: html },
  { src: css },
  { src: js },
  { src: java },
  { src: nextjs },
  { src: postgres },
  { src: python },
  { src: react },
  { src: spring },
];

export default function ImageSlider(): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Show the previous slide
  const prevSlide = (): void => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Show the next slide
  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [isHovered]);

  return (
    <div className="relative mx-auto flex flex-col items-center">
      <div
        className="relative h-[100px] w-[100px] flex justify-center items-center group"
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={images[currentIndex].src}
          alt={`Slider Image ${currentIndex + 1}`}
          fill
          className="object-contain rounded-md transition-all duration-1000 ease-in-out"
        />
      </div>

      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#800080] text-white p-2 rounded-full hover:bg-[#1a222f] transition-all duration-300"
        onClick={prevSlide}
      >
        <ChevronLeft className="text-gray-400 group-hover:text-white" />
      </button>

      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#800080] text-white p-2 rounded-full hover:bg-[#1a222f] transition-all duration-300"
        onClick={nextSlide}
      >
        <ChevronRight className="text-gray-400 group-hover:text-white" />
      </button>

      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-10 mx-1 ${
              index === currentIndex
                ? "bg-[#6b1e7a] rounded-xl"
                : "bg-gray-300 rounded-xl"
            } transition-all duration-500 ease-in-out`}
          ></div>
        ))}
      </div>
    </div>
  );
}
