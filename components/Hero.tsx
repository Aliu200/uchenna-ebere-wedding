import ImageSlider from "./ImageSliderMotion";
import { wedding } from "../data/wedding";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background */}
      <ImageSlider />

      {/* Elegant Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Hero Content */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pt-12 pb-20">

        <div className="text-center text-white px-6 max-w-4xl animate-fadeIn">

          <p className="uppercase tracking-[8px] text-sm md:text-base text-[#F8F6F2]">
            Together With Their Families
          </p>

          <div className="mt-8 text-3xl">
            ❤
          </div>

          <h1 className="font-script text-6xl md:text-8xl mt-8 leading-none">
            {wedding.groom}
          </h1>

          <p className="text-[#E8D9B5] text-3xl my-4">
            &
          </p>

          <h1 className="font-script text-6xl md:text-8xl leading-none">
            {wedding.bride}
          </h1>

          <div className="w-24 h-px bg-[#C8A96A] mx-auto my-10"></div>

          <p className="uppercase tracking-[5px] text-[#E8D9B5]">
            Are Getting Married
          </p>

          <p className="mt-6 text-xl md:text-2xl">
            {wedding.weddingDate}
          </p>

          <a
            href="#countdown"
            className="inline-block mt-12 px-10 py-4 rounded-full bg-[#C8A96A] hover:bg-[#b8944f] transition duration-300 text-white shadow-xl hover:scale-105"
          >
            Celebrate With Us
          </a>

          <div className="mt-16 animate-bounce">

            <p className="uppercase tracking-[4px] text-sm">
              Scroll to Explore
            </p>

            <div className="text-3xl mt-2">
              ↓
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}