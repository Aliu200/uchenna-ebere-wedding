import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#23402F] text-white pt-20 pb-8 px-6">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="font-script text-5xl">
          Sandra & Ebere
        </h2>

        <div className="w-20 h-1 bg-[#C8A96A] rounded-full mx-auto my-8"></div>

        <p className="text-[#E8D9B5] text-lg">
          September 5, 2026
        </p>

        <p className="mt-8 text-gray-300 italic max-w-xl mx-auto leading-8">
          Thank you for celebrating our special day with us.
          Your love, prayers and presence mean the world to us,
          and we look forward to creating beautiful memories together.
        </p>

        <p className="mt-10 text-[#E8D9B5] font-medium tracking-[3px]">
          #SELoveStory
        </p>

        <div className="mt-40 flex justify-end">
          <a
            href="tel:07061908787"
            className="flex items-center gap-2 text-xs text-gray-400 hover:text-[#C8A96A] transition"
          >
            <span>Designed by</span>
            <Image
              src="/images/osilight-logo.png"
              alt="osilight studios"
              width={22}
              height={22}
              className="rounded-full"
            />

            <span className="text-[#C8A96A]">|</span>
                 
            <span>07061908787</span>
          </a>
        </div>

      </div>
    </footer>
  );
}