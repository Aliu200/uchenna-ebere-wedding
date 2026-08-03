"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  {
    src: "/images/gallery/photo13.jpeg",
    position: "center 15%",
  },
  {
    src: "/images/gallery/photo8.jpeg",
    position: "center 25%",
  },
  {
    src: "/images/hero3.jpg.png",
    position: "center 20%",
  },
];

export default function ImageSlider() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[2000] ease-in-out ${
            currentImage === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.src}
            alt={`Hero ${index + 1}`}
            fill
            priority={index === 0}
            sizes="100vw"
            style={{
              objectPosition: image.position,
            }}
            className={`object-cover transition-transform duration-[8000] ease-linear ${
              currentImage === index ? "scale-110" : "scale-100"
            }`}
          />
        </div>
      ))}
    </div>
  );
}