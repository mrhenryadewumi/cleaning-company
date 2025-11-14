"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-sm">
      <nav className="max-w-5xl mx-auto flex items-center justify-between py-4 px-4">
        <Link href="/" className="text-xl font-bold text-sky-800">
          RainClean
        </Link>
        <div className="flex gap-4 text-sm text-slate-700">
          <Link href="/services">Services</Link>
          <Link href="/book">Book Now</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
