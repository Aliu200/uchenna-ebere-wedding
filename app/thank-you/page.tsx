import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#F8F6F2] flex items-center justify-center px-6">

      <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-xl w-full text-center">

        <p className="text-6xl mb-6">❤️</p>

        <h1 className="text-5xl font-heading text-[#23402F]">
          Thank You!
        </h1>

        <p className="mt-8 text-gray-600 leading-8 text-lg">
          Your RSVP has been received successfully.
        </p>

        <p className="mt-4 text-gray-600 leading-8 text-lg">
          We can't wait to celebrate our special day with you.
        </p>

        <Link
          href="/"
          className="inline-block mt-10 bg-[#C8A96A] hover:bg-[#b8944f] text-white px-10 py-4 rounded-full transition"
        >
          Return Home
        </Link>

      </div>

    </main>
  );
}