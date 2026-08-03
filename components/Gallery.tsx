"use client";

import { useState } from "react";
import Image from "next/image";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const photos = [
  "/images/gallery/photo1.jpeg",
  "/images/gallery/photo2.jpeg",
  "/images/gallery/photo3.jpeg",
  "/images/gallery/photo4.jpeg",
  "/images/gallery/photo5.jpeg",
  "/images/gallery/photo6.jpeg",
  "/images/gallery/photo7.jpeg",
  "/images/gallery/photo8.jpeg",
  "/images/gallery/photo9.jpeg",
  "/images/gallery/photo10.jpeg",
  "/images/gallery/photo11.jpeg",
  "/images/gallery/photo12.jpeg",
  "/images/gallery/photo13.jpeg",
  "/images/gallery/photo16.jpeg",
  "/images/gallery/photo17.jpeg",
];

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <section
      id="gallery"
      className="bg-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <p className="uppercase tracking-[6px] text-[#C8A96A] text-center">
          Captured Moments
        </p>

        <h2 className="font-heading text-5xl text-center text-[#23402F] mt-5">
          Our Journey
        </h2>

        <p className="text-center text-gray-500 mt-5 mb-16 max-w-2xl mx-auto">
          A glimpse into the beautiful moments that brought us here...
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">

          {photos.map((photo, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className="cursor-pointer overflow-hidden rounded-2xl shadow-lg group"
            >
              <div className="relative aspect-[4/5]">

                <Image
                  src={photo}
                  alt={`Gallery ${i + 1}`}
                  fill
                  sizes="(max-width:768px) 50vw,
                         (max-width:1024px) 33vw,
                         25vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

              </div>
            </div>
          ))}

        </div>

      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={photos.map((photo) => ({ src: photo }))}
      />
    </section>
  );
}