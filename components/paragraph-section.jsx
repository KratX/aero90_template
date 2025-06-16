"use client";

export default function ParagraphSection() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-6 py-16">
      <div className="max-w-4xl w-full text-white">
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-8xl font-semibold leading-tight">
          <span className="text-white">Empower Your </span>
          <span className="text-red-600 italic font-bold">Ambition.</span>
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-8xl italic font-medium mt-2">
          <span className="text-red-600">Spark </span>
          <span className="text-white">Your Passion.</span>
        </h2>

        {/* Paragraph */}
        <p className="mt-8 text-3xl sm:text-xl text-gray-300 leading-relaxed">
          At Aero 90, we believe every athlete carries a spark — a hunger to
          rise, compete, and achieve greatness. We're here to fuel that fire.
          With elite training, modern facilities, and a culture built on
          discipline and belief, we empower your ambition and spark your passion
          — transforming potential into performance, and dreams into goals.
        </p>

        {/* Button */}
        <div className="mt-10">
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md text-lg transition-all duration-200 shadow-md">
            Learn more
          </button>
        </div>
      </div>
    </main>
  );
}
