import Image from "next/image";

export default function Story() {
  return (
    <section
      id="story"
      className="bg-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div className="relative w-full h-[620px] rounded-[32px] overflow-hidden shadow-2xl">
          <Image
            src="/images/hero2.jpg.png"
            alt="Our Story"
            fill
            className="object-cover object-[center_15%] transition-transform duration-700 hover:scale-105"
          />
        </div>

        <div>

          <p className="uppercase tracking-[8px] text-[#C8A96A] text-sm font-medium">
            Our Story
          </p>

          <h2 className="font-heading text-5xl md:text-6xl mt-6 text-[#23402F] leading-tight">
            A Journey of Love
          </h2>
          <div className="w-20 h-1 bg-[#C8A96A] rounded-full mt-8 mb-10"></div>

          <p className="mt-10 text-gray-600 leading-9 text-lg">
            Every love story is beautiful, but ours is our favourite.
            We are grateful for every moment that brought us together,
            and we cannot wait to celebrate this new chapter with our
            family and friends.
          </p>

          <p className="mt-8 text-gray-600 leading-9 text-lg">
            Your presence on our special day will make our joy complete.
            Thank you for being part of our journey.
          </p>

        </div>

      </div>
    </section>
  );
}