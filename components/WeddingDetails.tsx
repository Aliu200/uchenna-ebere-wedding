"use client";

import { useState } from "react";

export default function WeddingDetails() {
  const [copied, setCopied] = useState("");

  const copyAccount = async (account: string, bank: string) => {
    await navigator.clipboard.writeText(account);
    setCopied(bank);

    setTimeout(() => {
      setCopied("");
    }, 2000);
  };

  return (
    <section
      id="details"
      className="py-20 md:py-28 bg-[#F8F6F2] px-5 md:px-6"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center">

          <p className="uppercase tracking-[8px] text-[#C8A96A] text-sm font-medium">
            Celebrate With Us
          </p>

          <h2 className="font-heading text-5xl md:text-6xl text-[#23402F] mt-6">
            Wedding Details
          </h2>

          <div className="w-20 h-1 bg-[#C8A96A] rounded-full mx-auto mt-8"></div>

          <p className="mt-8 text-gray-600 text-lg">
            Everything you need to know for our special day.
          </p>

        </div>

        {/* Ceremony & Reception */}

        <div className="grid md:grid-cols-2 gap-10 mt-20">

          {/* Ceremony */}

          <div className="bg-white rounded-[32px] shadow-xl p-10 hover:-translate-y-2 transition duration-300">

            <div className="text-5xl mb-6">⛪</div>

            <h3 className="text-3xl font-heading text-[#23402F]">
              Ceremony
            </h3>

            <div className="w-12 h-1 bg-[#C8A96A] rounded-full my-6"></div>

            <p><strong>Date:</strong> September 5, 2026</p>

            <p className="mt-3">
              <strong>Time:</strong> 10:00 AM
            </p>

            <p className="mt-4 font-semibold text-sm md:text-base">
              Our Lady of Victory Catholic Church
            </p>

            <p className="text-gray-500 text-xs md:text-base leading-6">
              Airport Road,
              <br />
              Rumuodomaya,
              <br />
              Obio-Akpor LGA,
              Rivers State
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Our+Lady+of+Victory+Catholic+Church+Rumuodomaya+Port+Harcourt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 bg-[#23402F] text-white px-6 py-3 rounded-full hover:bg-[#1a2f22] transition"
            >
              📍 Open Google Maps
            </a>

          </div>

          {/* Reception */}

          <div className="bg-white rounded-[32px] shadow-xl p-10 hover:-translate-y-2 transition duration-300">

            <div className="text-5xl mb-6">🎉</div>

            <h3 className="text-3xl font-heading text-[#23402F]">
              Reception
            </h3>

            <div className="w-12 h-1 bg-[#C8A96A] rounded-full my-6"></div>

            <p className="font-semibold">
              The Ruby Centre
            </p>

            <p className="text-gray-500">
              103 Airport Road,
              <br />
              Rumuodomaya,
              <br />
              Obio-Akpor LGA,
              Rivers State
            </p>

            <p className="mt-6">
              Reception follows immediately after the ceremony.
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=The+Ruby+Centre+103+Airport+Road+Rumuodomaya+Port+Harcourt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 bg-[#23402F] text-white px-6 py-3 rounded-full hover:bg-[#1a2f22] transition"
            >
              📍 Open Google Maps
            </a>

          </div>

        </div>

        {/* Color of the Day */}

        <div className="mt-10 bg-white rounded-[32px] shadow-xl p-10 text-center">

          <div className="text-5xl mb-6">👗</div>

          <h3 className="font-heading text-3xl text-[#23402F]">
            Color of the Day
          </h3>

          <div className="w-12 h-1 bg-[#C8A96A] rounded-full mx-auto my-6"></div>

          <div className="flex justify-center gap-8 flex-wrap">

            <div>
              <div className="w-20 h-20 rounded-full bg-[#F8F6F2] border-2 border-gray-300 mx-auto"></div>
              <p className="mt-3 font-semibold">Ivory</p>
            </div>

            <div>
              <div className="w-20 h-20 rounded-full bg-[#C8A96A] mx-auto"></div>
              <p className="mt-3 font-semibold">Champagne Gold</p>
            </div>

            <div>
              <div className="w-20 h-20 rounded-full bg-[#6F4E37] mx-auto"></div>
              <p className="mt-3 font-semibold">Brown</p>
            </div>

          </div>

        </div>

        {/* Gift */}

        <div className="mt-10 bg-white rounded-[32px] shadow-xl p-10">

          <div className="text-5xl mb-6 text-center">🎁</div>

          <h3 className="text-center text-3xl font-heading text-[#23402F]">
            Bless the Couple
          </h3>

          <div className="w-12 h-1 bg-[#C8A96A] rounded-full mx-auto my-6"></div>

          <p className="text-center text-gray-600 mb-10">
            Your presence is our greatest gift.
            <br />
            Should you wish to bless us further,
            kindly use any account below.
          </p>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="border rounded-2xl p-6">

              <h4 className="font-bold text-lg">Opay</h4>

              <p className="mt-4">
                Iwuala Ebere
              </p>

              <p className="font-bold text-2xl mt-2">
                7037779840
              </p>

              <button
                onClick={() =>
                  copyAccount("7037779840", "opay")
                }
                className="mt-5 bg-[#23402F] text-white px-5 py-3 rounded-full"
              >
                {copied === "opay"
                  ? "Copied!"
                  : "Copy Account"}
              </button>

            </div>

            <div className="border rounded-2xl p-6">

              <h4 className="font-bold text-lg">
                PalmPay
              </h4>

              <p className="mt-4">
                Uche Sandra
              </p>

              <p className="font-bold text-2xl mt-2">
                8101185806
              </p>

              <button
                onClick={() =>
                  copyAccount("8101185806", "palmpay")
                }
                className="mt-5 bg-[#23402F] text-white px-5 py-3 rounded-full"
              >
                {copied === "palmpay"
                  ? "Copied!"
                  : "Copy Account"}
              </button>

            </div>

          </div>

        </div>

        {/* Need Assistance */}

        <div className="mt-10 bg-white rounded-[32px] shadow-xl p-10 text-center">

          <div className="text-5xl mb-6">☎️</div>

          <h3 className="font-heading text-3xl text-[#23402F]">
            Need Assistance?
          </h3>

          <div className="w-12 h-1 bg-[#C8A96A] rounded-full mx-auto my-6"></div>

          <p className="text-gray-600 mb-10">
            For enquiries, directions or assistance,
            kindly contact:
          </p>

          <div className="grid md:grid-cols-2 gap-8">

            <div>

              <h4 className="font-bold text-xl">
                Aliu
              </h4>

              <a
                href="tel:07061908787"
                className="text-[#23402F] font-semibold"
              >
                📞 0706 190 8787
              </a>

            </div>

            <div>

              <h4 className="font-bold text-xl">
                Gabby
              </h4>

              <a
                href="tel:08143008533"
                className="text-[#23402F] font-semibold"
              >
                📞 0814 300 8533
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}