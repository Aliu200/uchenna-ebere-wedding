"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const images = [
  {
    src: "/images/gallery/photo13.jpeg",
    position: "center 40%",
  },
  {
    src: "/images/gallery/photo8.jpeg",
    position: "center 25%",
  },
  {
    src: "/images/hero3.jpg.png",
    position: "center 18%",
  },
];

export default function ImageSliderMotion() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1.08 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.8 },
            scale: { duration: 8, ease: "linear" },
          }}
        >
          <Image
            src={images[current].src}
            alt={`Hero ${current + 1}`}
            fill
            priority
            sizes="100vw"
            style={{
              objectPosition: images[current].position,
            }}
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}