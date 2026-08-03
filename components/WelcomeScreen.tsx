"use client";

import Image from "next/image";
import { wedding } from "../data/wedding";

type WelcomeScreenProps = {
  onOpen: () => void;
};

export default function WelcomeScreen({
  onOpen,
}: WelcomeScreenProps) {
  return (
    <div className="fixed inset-0 z-50">

      {/* Background Photo */}
      <Image
        src="/images/hero3.jpg.png"
        alt="Wedding"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55 backdrop-blur-sm" />

      {/* Invitation Card */}
      <div className="absolute inset-0 flex items-center justify-center px-6">

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-16 max-w-xl w-full text-center">

          <p className="uppercase tracking-[8px] text-[var(--gold)] text-sm">
            Together With Their Families
          </p>

          <h1 className="font-script text-[#23402F] text-6xl md:text-7xl mt-8">
            {wedding.groom}
          </h1>

          <p className="text-[#C8A96A] text-4xl my-4">
            &
          </p>

          <h1 className="font-script text-[#23402F] text-6xl md:text-7xl">
            {wedding.bride}
          </h1>

          <p className="mt-10 text-gray-600 text-lg">
            {wedding.weddingDate}
          </p>

          <button
            onClick={onOpen}
            className="mt-10 bg-[#C8A96A] hover:bg-[#b8944f] text-white px-10 py-4 rounded-full text-lg transition duration-300 hover:scale-105"
          >
            Open Invitation
          </button>

        </div>

      </div>

    </div>
  );
}