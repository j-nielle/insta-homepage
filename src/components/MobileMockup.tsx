"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import image1 from "@/assets/screenshot1.png";
import image2 from "@/assets/screenshot2.png";
import image3 from "@/assets/screenshot3.png";
import image4 from "@/assets/screenshot4.png";

export default function MobileMockup() {
  const images = [image1, image2, image3, image4];

  const [currentIndex, setCurrentIndex] = useState(0);

  // this useEffect hook changes the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hidden min-[875px]:block w-96">
      <div className="relative -left-[52px] -top-2 h-[581px] w-[422px] bg-[url('https://www.instagram.com/static/images/homepage/phones/home-phones.png/1dc085cdb87d.png')] bg-auto bg-no-repeat">
        <div className="absolute left-[149px] top-[9px] overflow-hidden w-[264px] h-[569px]">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
                currentIndex === index ? "opacity-100" : "opacity-0"
              }`}>
              <Image
                src={image.src}
                alt={`Mockup ${index + 1}`}
                className="object-scale-down"
                width={270}
                height={0}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
