export default function Footer() {
  return (
    <footer className="bg-[#23402F] text-white py-20 px-6">

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

        <p className="mt-10 text-[#E8D9B5] font-medium">
          #SELoveStory
        </p>

        <p className="mt-12 flex justify-end">
  <a
    href="tel:07061908787"
    className="flex items-center gap-2 text-xs text-gray-400 hover:text-[#C8A96A] transition"
  >
    <img
      src="/images/osilight-logo.png"
      alt="osilight studios"
      className="w-6 h-6 rounded-full"
    />

    <span>|</span>

    <span className="text-[#C8A96A]">•</span>
  </a>
</div>

    </footer>
  );
}