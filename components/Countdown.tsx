"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const weddingDate = new Date("2026-09-05T10:00:00");

  const calculateTimeLeft = () => {
    const difference = weddingDate.getTime() - new Date().getTime();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const items = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section
      id="countdown"
      className="bg-[#F8F6F2] py-28 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">

        <p className="uppercase tracking-[8px] text-[#C8A96A] text-sm font-medium">
          Save The Date
        </p>

        <h2 className="font-heading text-5xl md:text-6xl text-[#23402F] mt-6">
          September 5, 2026
        </h2>

        <div className="w-20 h-1 bg-[#C8A96A] rounded-full mx-auto mt-8"></div>

        <p className="mt-8 text-lg text-gray-600">
          Saturday • 10:00 AM
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">

          {items.map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-[28px] shadow-xl py-10 px-6 transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <h3 className="text-5xl md:text-6xl font-bold text-[#23402F]">
                {String(item.value).padStart(2, "0")}
              </h3>

              <div className="w-10 h-1 bg-[#C8A96A] rounded-full mx-auto my-5"></div>

              <p className="uppercase tracking-[4px] text-sm text-gray-500">
                {item.label}
              </p>
            </div>
          ))}

        </div>

        <p className="mt-16 text-xl italic text-gray-600">
          Every moment brings us closer to saying{" "}
          <span className="text-[#C8A96A] font-semibold">
            "I Do"
          </span>
        </p>

      </div>
    </section>
  );
}