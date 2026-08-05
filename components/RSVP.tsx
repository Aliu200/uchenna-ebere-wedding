"use client";

import { FormEvent, useState } from "react";

export default function RSVP() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitting(true);

    const form = e.currentTarget;

    const data = {
      fullName: (form.elements.namedItem("Full Name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("Phone Number") as HTMLInputElement).value,
      email: (form.elements.namedItem("Email Address") as HTMLInputElement).value,
      attendance: (form.elements.namedItem("Attendance") as HTMLSelectElement).value,
      guests: (form.elements.namedItem("Guests") as HTMLSelectElement).value,
      message: (form.elements.namedItem("Message") as HTMLTextAreaElement).value,
    };

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyfcVLVrhlquAraa1eU2b2RBDzqi7w-Tbsl0HEMngp1A3vXLzP2Zgn3tgfOLsxzx97XVw/exec",
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit RSVP.");
      }

      form.reset();

      window.location.href = "/thank-you";
    } catch (error) {
      alert("Unable to submit RSVP. Please try again.");
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

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
            onSubmit={handleSubmit}
            className="space-y-6"
          >
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
                Email Address{" "}
                <span className="text-gray-500 text-sm">
                  (Optional)
                </span>
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
                Special Message{" "}
                <span className="text-gray-500 text-sm">
                  (Optional)
                </span>
              </label>

              <textarea
                name="Message"
                rows={5}
                className="w-full border rounded-xl p-4"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-[#C8A96A] hover:bg-[#b8934d] disabled:bg-gray-400 text-white rounded-full py-4 text-lg transition"
            >
              {submitting ? "Submitting..." : "Submit RSVP"}
            </button>
                      </form>

        </div>

      </div>

    </section>
  );
}