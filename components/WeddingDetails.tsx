export default function WeddingDetails() {
  return (
    <section
      id="details"
      className="py-28 bg-[#F8F6F2] px-6"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center">

          <p className="uppercase tracking-[8px] text-[#C8A96A] text-sm font-medium">
            Wedding Details
          </p>

          <h2 className="font-heading text-5xl md:text-6xl text-[#23402F] mt-6">
            Join Us
          </h2>

          <div className="w-20 h-1 bg-[#C8A96A] rounded-full mx-auto mt-8"></div>

          <p className="mt-8 text-gray-600 text-lg">
            We would be honoured to celebrate this special day with you.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-20">

          {/* Ceremony */}

          <div className="bg-white rounded-[32px] shadow-xl p-10 transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <div className="text-5xl mb-6">
              ⛪
            </div>

            <h3 className="text-3xl font-heading text-[#23402F]">
              Ceremony
            </h3>

            <div className="w-12 h-1 bg-[#C8A96A] rounded-full my-6"></div>

            <p className="text-gray-700">
              <strong>Date:</strong> September 5, 2026
            </p>

            <p className="mt-3 text-gray-700">
              <strong>Time:</strong> 10:00 AM
            </p>

            <p className="mt-6 text-gray-700">
              Our Lady of Victory Catholic Church
            </p>

            <p className="text-gray-500">
              Airport Road, Rumuodomaya,
              <br />
              Obio-Akpor LGA, Rivers State
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Our+Lady+of+Victory+Catholic+Church+Rumuodomaya+Port+Harcourt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center mt-8 px-6 py-3 border-2 border-[#C8A96A] rounded-full text-[#23402F] font-medium hover:bg-[#C8A96A] hover:text-white transition duration-300"
            >
              📍 View Location
            </a>

          </div>

          {/* Reception */}

          <div className="bg-white rounded-[32px] shadow-xl p-10 transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <div className="text-5xl mb-6">
              🎉
            </div>

            <h3 className="text-3xl font-heading text-[#23402F]">
              Reception
            </h3>

            <div className="w-12 h-1 bg-[#C8A96A] rounded-full my-6"></div>

            <p className="text-gray-700">
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

            <p className="mt-6 text-gray-700">
              Reception begins immediately after the ceremony.
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=The+Ruby+Centre+103+Airport+Road+Rumuodomaya+Port+Harcourt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center mt-8 px-6 py-3 border-2 border-[#C8A96A] rounded-full text-[#23402F] font-medium hover:bg-[#C8A96A] hover:text-white transition duration-300"
            >
              📍 View Location
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}