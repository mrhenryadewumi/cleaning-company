import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "RainClean Service Ltd | Professional Cleaning Services",
  description:
    "RainClean Service Ltd provides reliable home and office cleaning services. Book trusted cleaners online in minutes.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-50">
        <Navbar />
        <div className="max-w-5xl mx-auto px-4 py-8">{children}</div>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
