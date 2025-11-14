"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-[85vh] flex items-center justify-center text-center text-white">
        <Image
          src="/cleaning-hero.jpg"
          alt="Cleaning Service"
          fill
          priority
          className="object-cover"
        />

        {/* Light overlay instead of dark */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" />

        <div className="relative z-10 px-6 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 drop-shadow">
            Professional Cleaning Services
          </h1>

          <p className="text-lg md:text-xl text-gray-800 mb-6 drop-shadow">
            Fast • Reliable • Affordable
          </p>

          <a
            href="/book"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-lg shadow-lg"
          >
            Book Now
          </a>
        </div>
      </section>
    </main>
  );
}
