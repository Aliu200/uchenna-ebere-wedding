"use client";

export default function RSVP() {
  return (
    <section
      id="rsvp"
      className="bg-[#F8F6F2] py-24 px-6"
    >
      <div className="max-w-3xl mx-auto">

        <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-14">

          <p className="uppercase tracking-[6px] text-[#C8A96A] text-center">
            Kindly Respond
          </p>

          <h2 className="font-heading text-5xl text-center text-[#23402F] mt-5">
            RSVP
          </h2>

          <p className="text-center text-gray-500 mt-4 mb-12">
            We would be honoured to celebrate our special day with you.
          </p>

          <form
            action="https://formsubmit.co/danladialiu200@gmail.com"
            method="POST"
            className="space-y-6"
          >

            {/* Disable Captcha */}
            <input
              type="hidden"
              name="_captcha"
              value="false"
            />

            {/* Email Subject */}
            <input
              type="hidden"
              name="_subject"
              value="New Wedding RSVP"
            />

            {/* Redirect after submit */}
            <input
              type="hidden"
              name="_next"
              value="https://uchenna-ebere-wedding.vercel.app/thank-you"
            />

            <div>
              <label className="block mb-2 font-medium">
                Full Name
              </label>

              <input
                type="text"
                name="Full Name"
                required
                className="w-full border rounded-xl p-4"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Phone Number
              </label>

              <input
                type="tel"
                name="Phone Number"
                required
                className="w-full border rounded-xl p-4"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Email Address <span className="text-gray-500 text-sm">(Optional)</span>
              </label>

              <input
                type="email"
                name="Email Address"
                className="w-full border rounded-xl p-4"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Will You Attend?
              </label>

              <select
                name="Attendance"
                className="w-full border rounded-xl p-4"
              >
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Number of Guests
              </label>

              <select
                name="Guests"
                className="w-full border rounded-xl p-4"
              >
                <option>1</option>
                <option>2</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Special Message <span className="text-gray-500 text-sm">(Optional)</span>
              </label>

              <textarea
                name="Message"
                rows={5}
                className="w-full border rounded-xl p-4"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#C8A96A] hover:bg-[#b8934d] text-white rounded-full py-4 text-lg transition"
            >
              Submit RSVP
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}